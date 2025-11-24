import baseConfig from './22.mjs';
import config from '../../node/24.json' with { type: 'json' };

export default [
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			globals: config.globals,
		},
	},
];
