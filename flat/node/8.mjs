import baseConfig from './6.mjs';
import config from '../../node/8.json' with { type: 'json' };
import esm from './esm.mjs';

export default /** @type {import('./8.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
		},
		rules: config.rules,
	},
	esm(config.parserOptions.ecmaVersion),
]);
