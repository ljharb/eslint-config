'use strict';

var test = require('tape');
var execSync = require('child_process').execSync;
var eslintVersion = parseInt(require('eslint/package.json').version.split('.')[0], 10);

test(
	'self-lint',
	{ skip: eslintVersion >= 9 && 'Skipping self-lint with ESLint 9+ (uses flat config by default, this package uses .eslintrc)' },
	function (t) {
		t.doesNotThrow(function () {
			execSync('eslint index.js', { stdio: 'inherit' });
		}, 'eslint index.js should pass');

		t.end();
	}
);
