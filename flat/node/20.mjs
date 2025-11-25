import baseConfig from './18.mjs';
import config from '../../node/20.json' with { type: 'json' };

export default /** @type {import('./20.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
]);
