import baseConfig from './0.4.mjs';
import config from '../../node/4.json' with { type: 'json' };
import globals from 'globals';

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			globals: {
				...globals.es2015,
				...globals.es2017,
			},
		},
		rules: config.rules,
	},
];
