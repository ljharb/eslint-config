import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import parser from './parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

// Get base config without overrides
const rawBaseConfigs = compat.config({
	extends: './eslint-config.json',
});

/** @type {(c: typeof rawBaseConfigs[number]) => c is { ignores: {} }} */
function isIgnore(c) {
	return c.ignores && Object.keys(c).length === 1;
}

const ignoreConfigs = rawBaseConfigs.filter(isIgnore);

const baseConfigs = rawBaseConfigs
	.filter((c) => !isIgnore(c))
	.map(({ languageOptions, ...c }) => ({
		...c,
		languageOptions: {
			...languageOptions,
			globals: {
				...globals.es5,
				...globals.node,
				// @ts-expect-error TS is dumb and thinks you can only object spread objects
				...languageOptions?.globals,
			},
		},
	}));

const testConfigs = compat.config({ extends: './tests' });
const esmConfigs = compat.config({ extends: './esm' });

const rules = {
	'logical-assignment-operators': 'off', // TODO: set to "always" when node flat configs exist
	'no-constant-binary-expression': 'error',
	'no-empty-static-block': 'error',
	'no-new-native-nonconstructor': 'error',
	'no-object-constructor': 'error',
	'no-unassigned-vars': 'error',
	'no-unused-expressions': ['error', {
		allowShortCircuit: false,
		allowTernary: false,
		allowTaggedTemplates: true,
		enforceForJSX: true,
		ignoreDirectives: true,
	}],
	'no-useless-assignment': 'error',
	'preserve-caught-error': 'error',
};

export default /** @type {import('./flat.d.mts').default} */ ([
	// Global ignores must be first and standalone to apply globally
	...ignoreConfigs,
	...baseConfigs,
	{
		files: ['test/**'],
		...testConfigs[0],
		rules: {
			...testConfigs[0].rules,
			...rules,
		},
	},
	{
		files: ['bin/**'],
		rules: {
			'no-console': 0,
			'no-process-env': 0,
			'no-process-exit': 2,
		},
	},
	{
		files: ['**/*.mjs'],
		...esmConfigs[0],
		rules: {
			...esmConfigs[0].rules,
			...rules,
		},
		languageOptions: {
			...esmConfigs[0].languageOptions,
			parser,
		},
	},
	{ rules },
]);
