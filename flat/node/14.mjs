import baseConfig from './12.mjs';
import config from '../../node/14.json' with { type: 'json' };
import esm from './esm.mjs';
import globals from 'globals';

export default /** @type {import('./14.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			globals: {
				...globals.es2020,
				...globals.es2021,
			},
		},
	},
	esm(config.parserOptions.ecmaVersion),
]);
