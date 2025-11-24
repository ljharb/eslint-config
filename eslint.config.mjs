import flat from './flat.mjs';

import node from './flat/node/22.mjs';

export default [
	...flat,
	...node.filter((config) => config.files), // Only include configs with file restrictions
	{
		files: ['./flat.mjs', './flat/node/**.*js'],
		rules: {
			'array-bracket-newline': 'off',
			'no-magic-numbers': 'off',
			'no-underscore-dangle': 'off',
			'sort-keys': 'off',
		},
	},
];
