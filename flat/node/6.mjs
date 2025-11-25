import baseConfig from './4.mjs';
import config from '../../node/6.json' with { type: 'json' };

export default /** @type {import('./6.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
		rules: config.rules,
	},
]);
