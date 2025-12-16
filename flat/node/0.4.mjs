import globals from 'globals';

import baseConfig from '../../flat.mjs';
import nodeConfig from '../../node/0.4.json' with { type: 'json' };
import parser from '../../parser.js';

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
	{
		files: ['**/*.mjs'],
		languageOptions: {
			sourceType: 'module',
			parser, // Use custom parser which handles import attributes for any ecmaVersion
		},
	},
]);
