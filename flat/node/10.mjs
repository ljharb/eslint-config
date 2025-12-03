import baseConfig from './8.mjs';
import config from '../../node/10.json' with { type: 'json' };
import globals from 'globals';

export default /** @type {import('./10.d.mts').default} */ ([
	...baseConfig,
	{
		languageOptions: {
			ecmaVersion: config.parserOptions.ecmaVersion,
			globals: {
				...globals.es2015,
				...globals.es2017,
				...globals.node,
			},
		},
		rules: config.rules,
	},
	{
		rules: {
			'no-unused-vars': ['error', {
				args: 'after-used',
				caughtErrors: 'all', // `catch {}` available as of node v10.3.0
				vars: 'all',
			}],
		},
	},
]);
