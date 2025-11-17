'use strict';

var path = require('path');
var execSync = require('child_process').execSync;

var test = require('tape');
var eslintPkg = require('eslint/package.json');
var semver = require('semver');

var config = require('..');

test('eslint config tests', function (t) {
	var eslintVersion = parseInt(eslintPkg.version.split('.')[0], 10);
	var isESLint9 = eslintVersion >= 9;

	t.test(
		'strict mode violations fail linting',
		{ skip: !semver.satisfies(process.version, eslintPkg.engines.node) },
		function (st) {
			var configFile = isESLint9
				? path.join(__dirname, '..', 'eslint.config.mjs')
				: path.join(__dirname, '..', 'eslint-config.json');

			var threw = false;
			var strictModeError = false;
			try {
				var eslintCmd = isESLint9
					? 'npx eslint -c ' + configFile + ' \'test/fixtures/es3-strict-violations.js\''
					: 'npx eslint --no-eslintrc -c ' + configFile + ' \'test/fixtures/es3-strict-violations.js\'';
				var env = process.env;
				if (!isESLint9) {
					env = Object.assign({}, env, { ESLINT_USE_FLAT_CONFIG: 'false' });
				}
				execSync(eslintCmd, { encoding: 'utf8', env: env });
			} catch (e) {
				threw = true;
				strictModeError = (/strict mode/i).test(e.stdout || e.message);
			}

			st.ok(threw, 'eslint should throw an error');
			st.ok(strictModeError, 'error should mention strict mode');

			st.end();
		}
	);

	t.test('config should be valid', function (st) {
		st.ok(config, 'config exports an object');

		st.equal(config.parserOptions.ecmaVersion, 3, 'ecmaVersion should be 3');
		st.equal(config.rules.strict[0], 2, 'strict mode should be enforced');

		st.end();
	});
});
