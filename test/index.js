'use strict';

var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;

var test = require('tape');
var eslintPkg = require('eslint/package.json');
var semver = require('semver');

var config = require('..');
var parser = /** @type {{ parseForESLint: (code: string, options: Record<string, unknown>) => unknown }} */ (require('../parser'));

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
				var err = /** @type {{ stdout?: string; message: string }} */ (e);
				strictModeError = (/strict mode/i).test(err.stdout || err.message);
			}

			st.ok(threw, 'eslint should throw an error');
			st.ok(strictModeError, 'error should mention strict mode');

			st.end();
		}
	);

	t.test('parser: globalReturn', function (st) {
		var code = fs.readFileSync(path.join(__dirname, 'fixtures', 'global-return.js'), 'utf8');
		var baseOptions = {
			ecmaVersion: 3,
			sourceType: 'script',
			allowReserved: true
		};

		st['throws'](
			function () { parser.parseForESLint(code, baseOptions); },
			/return/,
			'top-level return fails without globalReturn'
		);

		st.doesNotThrow(
			function () {
				parser.parseForESLint(code, Object.assign({}, baseOptions, {
					ecmaFeatures: { globalReturn: true }
				}));
			},
			'top-level return succeeds with globalReturn: true'
		);

		st.end();
	});

	t.test('config should be valid', function (st) {
		st.ok(config, 'config exports an object');

		st.equal(config.parserOptions.ecmaVersion, 3, 'ecmaVersion should be 3');
		st.equal(config.rules.strict[0], 2, 'strict mode should be enforced');

		st.end();
	});
});
