import baseConfig from './14.mjs';
import config from '../../node/16.json' with { type: 'json' };
import esm from './esm.mjs';

export default /** @type {import('./16.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
	esm(config.parserOptions.ecmaVersion),
]);
