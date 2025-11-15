'use strict';

/* eslint
	func-style: 0,
	multiline-comment-style: 0,
	no-caller: 0,
	no-delete-var: 0,
	no-dupe-args: 0,
	no-eval: 0,
	no-global-assign: 0,
	no-implicit-globals: 0,
	no-native-reassign: 0,
	no-octal: 0,
	no-redeclare: 0,
	no-restricted-properties: 0,
	no-restricted-syntax: 0,
	no-undef: 0,
	no-unused-vars: 0,
	no-with: 0,
	quote-props: 0,
*/

// This file contains ES3-compatible syntax that is invalid in strict mode
// These should fail linting due to strict mode violations

// Using 'with' statement (illegal in strict mode)
var obj = { 'x': 1 };
with (obj) {
	var y = x;
}

// Octal literals (illegal in strict mode)
var octal = 0755;
var octal2 = 0644;

// Duplicate parameter names (illegal in strict mode)
function duplicate(a, a) {
	return a;
}

// Assignment to eval (illegal in strict mode)
eval = 17;

// Assignment to arguments (illegal in strict mode)
function test() {
	arguments = 42;
}

// Deleting plain variable (illegal in strict mode)
var z = 1;
delete z;

// Using 'arguments.callee' (deprecated in strict mode)
function factorial(n) {
	return n <= 1 ? 1 : n * arguments.callee(n - 1);
}
