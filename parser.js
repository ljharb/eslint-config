'use strict';

// Custom parser that enforces both ES3 syntax AND strict mode violations by parsing twice: once with ES3 (via espree), once with ES5 (via acorn)
var acorn = require('acorn');
var espree = require('espree');

module.exports = {
	meta: {
		name: '@ljharb/eslint-config/parser'
	},
	parseForESLint: function parseForESLint(code, options) { // eslint-disable-line func-name-matching
		var ecmaVersion = options.ecmaVersion || 3;

		// Use espree for the primary parsing (for proper eslint compatibility)
		var espreeOptions = Object.assign({}, options, {
			comment: true,
			loc: true,
			range: true,
			tokens: true
		});

		// eslint-disable-next-line multiline-comment-style
		// For ESM files with ecmaVersion < 2025, handle import attributes specially
		// Import attributes (with keyword) require ecmaVersion 2025, but we want to allow them
		// while still enforcing the correct ecmaVersion for all other syntax
		if (options.sourceType === 'module' && ecmaVersion < 2025) {
			try {
				// Try parsing with the specified ecmaVersion first
				var ast = espree.parse(code, espreeOptions);
			} catch (e) {
				// If parsing failed, check if it's due to import attributes
				if ((/with/).test(e.message) || (/Unexpected token/).test(e.message)) {
					// Remove import attributes syntax to test if that's the only issue
					var codeWithoutAttrs = code.replace(/\s+with\s*\{[^}]*\}/g, '');
					try {
						espree.parse(codeWithoutAttrs, espreeOptions);
						// eslint-disable-next-line multiline-comment-style
						// If that succeeded, the only error was import attributes
						// Parse original code with ecmaVersion 2025 to allow attributes
						var options2025 = Object.assign({}, espreeOptions, {
							ecmaVersion: 2025
						});
						ast = espree.parse(code, options2025);
					} catch (e2) { // eslint-disable-line no-unused-vars
						// The code has other syntax errors, throw original error
						throw e;
					}
				} else {
					// Not an import attributes error, throw original
					throw e;
				}
			}
		} else {
			// For non-ESM or ecmaVersion >= 2025, parse normally
			ast = espree.parse(code, espreeOptions);
		}

		// Then parse with acorn ES5 to catch strict mode violations (skip for modules, which are always strict)
		if (ecmaVersion < 5 && options.sourceType !== 'module') {
			var es5Options = {
				ecmaVersion: 5,
				locations: true,
				sourceType: 'script'
			};
			acorn.parse(code, es5Options);
		}

		return {
			ast: ast,
			scopeManager: null,
			services: {},
			visitorKeys: espree.VisitorKeys
		};
	}
};
