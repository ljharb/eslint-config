import { FlatCompat } from '@eslint/eslintrc';

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
	baseDirectory: dirname,
	resolvePluginsRelativeTo: dirname,
});

const baseConfigs = /** @type {import('./esm.d.mts').default} */ (
	compat.config({ extends: '../esm' })
);

export default baseConfigs;
