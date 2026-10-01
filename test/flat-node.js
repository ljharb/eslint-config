'use strict';

var path = require('path');

var test = require('tape');
var ESLint = require('eslint').ESLint;
var eslintVersion = parseInt(require('eslint/package.json').version.split('.')[0], 10);

var esmConfig = require('../esm.json');
var parser = require('../parser');

var presets = [
	'0.4',
	'4',
	'6',
	'8',
	'10',
	'12',
	'14',
	'16',
	'18',
	'20',
	'22',
	'24',
	'latest'
];

/** @type {(configFile: string) => import('eslint').ESLint} */
var getESLint = function (configFile) {
	return new ESLint({
		cwd: path.join(__dirname, 'fixtures'),
		overrideConfigFile: path.join(__dirname, '..', configFile)
	});
};

/** @type {(rules: Record<string, unknown>, esm: boolean) => Record<string, unknown>} */
var pickRules = function (rules, esm) {
	/** @type {Record<string, unknown>} */
	var picked = {};
	Object.keys(rules).forEach(function (rule) {
		if ((rule in esmConfig.rules) === esm) {
			picked[rule] = rules[rule];
		}
	});
	return picked;
};

test(
	'flat node presets: `.mjs` files',
	{ skip: eslintVersion < 9 && 'Skipping flat config tests with ESLint < 9 (uses .eslintrc by default)' },
	function (t) {
		return getESLint('flat.mjs').calculateConfigForFile('esm.mjs').then(function (base) {
			presets.forEach(function (preset) {
				t.test('flat/node/' + preset, function (st) {
					var eslint = getESLint('flat/node/' + preset + '.mjs');

					return Promise.all([
						eslint.lintFiles(['esm.mjs']),
						eslint.calculateConfigForFile('esm.mjs'),
						eslint.calculateConfigForFile('index.js')
					]).then(function (results) {
						var messages = results[0][0].messages;
						var mjs = results[1];
						var js = results[2];

						st.deepEqual(messages, [], 'modern ESM lints with no errors or warnings');

						st.equal(mjs.languageOptions.sourceType, 'module', 'sourceType is module');
						st.equal(mjs.languageOptions.parser, parser, 'custom parser is used');
						st.equal(
							mjs.languageOptions.ecmaVersion,
							Math.max(esmConfig.parserOptions.ecmaVersion, js.languageOptions.ecmaVersion),
							'ecmaVersion is the higher of the ESM config and the preset (' + js.languageOptions.ecmaVersion + ')'
						);

						st.deepEqual(
							pickRules(mjs.rules, true),
							pickRules(base.rules, true),
							'rules from the ESM config are not overridden by the preset'
						);
						st.deepEqual(
							pickRules(mjs.rules, false),
							pickRules(js.rules, false),
							'all other rules match what the preset sets for `.js` files'
						);
					});
				});
			});
		});
	}
);
