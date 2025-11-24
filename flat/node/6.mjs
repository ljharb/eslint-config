import baseConfig from './4.mjs';
import config from '../../node/6.json' with { type: 'json' };

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
		rules: config.rules,
	},
];
