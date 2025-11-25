import baseConfig from './16.mjs';
import config from '../../node/18.json' with { type: 'json' };
import globals from 'globals';

export default /** @type {import('./18.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			// @ts-expect-error it's fine that this is undefined
			globals: globals.es2022,
		},
	},
]);
