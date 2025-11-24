import baseConfig from './14.mjs';
import config from '../../node/16.json' with { type: 'json' };

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
];
