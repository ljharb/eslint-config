import baseConfig from './18.mjs';
import config from '../../node/20.json' with { type: 'json' };

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
];
