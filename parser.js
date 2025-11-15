'use strict';

// Custom parser that enforces both ES3 syntax AND strict mode violations
// by parsing twice: once with ES3 (via espree), once with ES5 (via acorn)
var acorn = require('acorn');
var espree = require('espree');

module.exports = {
	parseForESLint: function parseForESLint(code, options) {
		var ecmaVersion = options.ecmaVersion || 3;

		// Use espree for the primary ES3 parsing (for proper eslint compatibility)
		var espreeOptions = Object.assign({}, options, {
			tokens: true,
			comment: true,
			loc: true,
			range: true
		});
		var ast = espree.parse(code, espreeOptions);

		// Then parse with acorn ES5 to catch strict mode violations
		if (ecmaVersion < 5) {
			var es5Options = {
				ecmaVersion: 5,
				sourceType: options.sourceType || 'script',
				locations: true
			};
			acorn.parse(code, es5Options);
		}

		return {
			ast: ast,
			services: {},
			scopeManager: null,
			visitorKeys: espree.VisitorKeys
		};
	}
};
