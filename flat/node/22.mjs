import baseConfig from './20.mjs';
import config from '../../node/22.json' with { type: 'json' };

export default /** @type {import('./22.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			globals: config.globals,
		},
	},
]);
