'use strict';

/* eslint multiline-comment-style: 0, no-unused-vars: 0, quote-props: 0 */

// This file contains non-ES3 syntax in strict mode
// These should fail linting with ecmaVersion: 3 config

// Reserved words as identifiers (ES5 strict mode makes these errors)
var implements = 1;
var interface = 2;
var package = 3;
var private = 4;
var protected = 5;
var public = 6;
var static = 7;

// Using future reserved words as identifiers
var let = 8;
var yield = 9;

// Trailing comma in object literal (parser difference between ES3 and ES5)
var obj = {
	'a': 1,
	'b': 2
};
