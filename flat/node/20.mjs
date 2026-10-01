import baseConfig from './18.mjs';
import config from '../../node/20.json' with { type: 'json' };
import esm from './esm.mjs';

export default /** @type {import('./20.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
	esm(config.parserOptions.ecmaVersion),
]);
