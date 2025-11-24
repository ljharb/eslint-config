import baseConfig from './10.mjs';
import config from '../../node/12.json' with { type: 'json' };

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
];
