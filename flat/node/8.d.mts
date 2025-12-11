import type { Linter } from 'eslint';
import type { ConfigObject } from '@eslint/core';

export type { Linter };
export type { ConfigObject };

export type Config = ConfigObject;
export type FlatConfig = Config[];

declare const flatConfig: FlatConfig;

export default flatConfig;
