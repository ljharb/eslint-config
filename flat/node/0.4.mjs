import globals from 'globals';

import baseConfig from '../../flat.mjs';
import nodeConfig from '../../node/0.4.json' with { type: 'json' };
import esm from './esm.mjs';

export default /** @type {import('./0.4.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: nodeConfig.parserOptions.ecmaVersion,
			parserOptions: {
				allowReserved: nodeConfig.parserOptions.allowReserved,
			},
			globals: {
				...globals.node,
			},
		},
		rules: nodeConfig.rules,
	},
	esm(nodeConfig.parserOptions.ecmaVersion),
]);
