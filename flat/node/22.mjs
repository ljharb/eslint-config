import baseConfig from './20.mjs';
import config from '../../node/22.json' with { type: 'json' };

export default [
	...baseConfig,
	{
		languageOptions: {
			globals: config.globals,
		},
	},
];
