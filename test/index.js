'use strict';

var path = require('path');
var execSync = require('child_process').execSync;

var test = require('tape');
var eslintPkg = require('eslint/package.json');

var config = require('..');

test('eslint config tests', function (t) {
	var eslintVersion = parseInt(eslintPkg.version.split('.')[0], 10);
	var isESLint9 = eslintVersion >= 9;

	t.test('strict mode violations fail linting', function (st) {
		var configFile = isESLint9
			? path.join(__dirname, 'eslint.config.js')
			: path.join(__dirname, '..', '.eslintrc');

		var threw = false;
		var strictModeError = false;
		try {
			execSync('npx eslint --no-eslintrc -c ' + configFile + ' \'test/fixtures/es3-strict-violations.js\'', { encoding: 'utf8' });
		} catch (e) {
			threw = true;
			strictModeError = /strict mode/i.test(e.stdout || e.message);
		}

		st.ok(threw, 'eslint should throw an error');
		st.ok(strictModeError, 'error should mention strict mode');

		st.end();
	});

	t.test('config should be valid', function (st) {
		st.ok(config, 'config exports an object');

		st.equal(config.parserOptions.ecmaVersion, 3, 'ecmaVersion should be 3');
		st.equal(config.rules.strict[0], 2, 'strict mode should be enforced');

		st.end();
	});
});
