'use strict';

// Custom parser that enforces both ES3 syntax AND strict mode violations by parsing twice: once with ES3 (via espree), once with ES5 (via acorn)

// resolve espree relative to @eslint/eslintrc (which depends on it) to support non-hoisting package managers like vlt
var espreePath = require.resolve('espree', { paths: [require.resolve('@eslint/eslintrc')] });
var espree = require(espreePath);
// resolve acorn relative to espree (which depends on it)
var acorn = require(require.resolve('acorn', { paths: [espreePath] }));

/** @type {import('./parser.d.ts')} */
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
		if (options.sourceType === 'module' && typeof ecmaVersion === 'number' && ecmaVersion < 2025) {
			try {
				// Try parsing with the specified ecmaVersion first
				var ast = espree.parse(code, espreeOptions);
			} catch (e) {
				// If parsing failed, check if it's due to import attributes
				if ((/with|Unexpected token/).test(/** @type {Error} */ (e).message)) {
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
					} catch (e2) {
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
		if (typeof ecmaVersion === 'number' && ecmaVersion < 5 && options.sourceType !== 'module') {
			var es5Options = /** @type {const} */ ({
				ecmaVersion: 5,
				locations: true,
				sourceType: 'script'
			});
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
