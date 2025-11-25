import baseConfig from './14.mjs';
import config from '../../node/16.json' with { type: 'json' };

export default /** @type {import('./16.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
]);
