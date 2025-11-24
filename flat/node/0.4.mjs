import { FlatCompat } from '@eslint/eslintrc';

import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../../parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

const rules = {
	'logical-assignment-operators': 'off',
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

const baseConfigs = compat.config({
	extends: '../../node/0.4',
});

export default [
	...baseConfigs,
	{ rules },
	{
		files: ['**/*.mjs'],
		languageOptions: {
			sourceType: 'module',
			parser, // Use custom parser which handles import attributes for any ecmaVersion
		},
	},
];
