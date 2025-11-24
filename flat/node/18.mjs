import baseConfig from './16.mjs';
import config from '../../node/18.json' with { type: 'json' };
import globals from 'globals';

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			globals: globals.es2022,
		},
	},
];
