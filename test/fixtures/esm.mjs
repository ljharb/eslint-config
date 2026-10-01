import path from 'path';

const base = [
	{
		rules: {
			'no-console': 'off',
		},
	},
];

const [{ rules, ...rest }] = base;

export const resolve = (file) => path.resolve(
	import.meta.dirname ?? '.',
	file?.name ?? file,
);

export default [
	...base,
	{
		...rest,
		files: ['**/*.mjs'],
		rules: {
			...rules,
			'no-process-exit': 'off',
		},
	},
];
