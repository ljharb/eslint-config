import type { Linter } from 'eslint';

declare const config: Linter.LegacyConfig & typeof import('./eslint-config.json');

export = config;

