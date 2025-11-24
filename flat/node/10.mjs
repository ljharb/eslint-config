import baseConfig from './8.mjs';
import config from '../../node/10.json' with { type: 'json' };
import globals from 'globals';

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			globals: {
				...globals.es2015,
				...globals.es2017,
				...globals.node,
			},
		},
		rules: config.rules,
	},
];
