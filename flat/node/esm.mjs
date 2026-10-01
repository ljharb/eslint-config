import esmConfig from '../../esm.json' with { type: 'json' };
import parser from '../../parser.js';

// `.mjs` is ESM whichever engine a node preset targets, so a preset that sets ecmaVersion or rules must end with this, to not override the ESM config
/** @param {number} ecmaVersion */
export default function esm(ecmaVersion) {
	return {
		files: ['**/*.mjs'],
		languageOptions: {
			ecmaVersion: Math.max(esmConfig.parserOptions.ecmaVersion, ecmaVersion),
			sourceType: 'module',
			parser, // Use custom parser which handles import attributes for any ecmaVersion
		},
		rules: esmConfig.rules,
	};
}
