import baseConfig from './10.mjs';
import config from '../../node/12.json' with { type: 'json' };

export default /** @type {import('./12.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
	},
]);
