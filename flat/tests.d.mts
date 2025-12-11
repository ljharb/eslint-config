import type { Linter } from 'eslint';

export type { Linter };

export type Config = Linter.Config;
export type FlatConfig = Config[];

declare const flatConfig: FlatConfig;

export default flatConfig;
