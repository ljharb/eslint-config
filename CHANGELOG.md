# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v21.1.1](https://github.com/ljharb/eslint-config/compare/v21.1.0...v21.1.1) - 2024-05-22

### Commits

- [Dev Deps] update `aud`, `npmignore`, `tape` [`87907f6`](https://github.com/ljharb/eslint-config/commit/87907f609be0096c9c9ffe88a83434a128239868)
- [patch] turn off more rules in tests [`c06c27a`](https://github.com/ljharb/eslint-config/commit/c06c27a8a45329487e06f2538928b8b03bce0a54)

## [v21.1.0](https://github.com/ljharb/eslint-config/compare/v21.0.1...v21.1.0) - 2023-05-24

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`8750f38`](https://github.com/ljharb/eslint-config/commit/8750f3853dda7271a5a5ab1aa60d3684ecda3e3e)
- [New] add `node/18` and `node/20` entrypoints [`9e563e5`](https://github.com/ljharb/eslint-config/commit/9e563e502efdbbe4a914759739ebfc82fbaf3932)
- [Dev Deps] update `tape` [`56f8a69`](https://github.com/ljharb/eslint-config/commit/56f8a69dca9f08273ad2142e7ba7903dbbb85ddc)

## [v21.0.1](https://github.com/ljharb/eslint-config/compare/v21.0.0...v21.0.1) - 2022-12-31

### Commits

- [Dev Deps] update `aud`, `tape` [`fe5f07f`](https://github.com/ljharb/eslint-config/commit/fe5f07fc64f8020b8e19f81c725bcfcde809f83b)
- [Fix] add bigint typed array globals [`ad6351c`](https://github.com/ljharb/eslint-config/commit/ad6351cd6b3b4115c9c41d331e7842e82a14c633)

## [v21.0.0](https://github.com/ljharb/eslint-config/compare/v20.2.3...v21.0.0) - 2022-04-10

### Commits

- [Breaking] prevent `native` as an identifier [`1818e56`](https://github.com/ljharb/eslint-config/commit/1818e560a397528c4c4d79491c740f71b399ec30)
- [Dev Deps] update `tape` [`d127e81`](https://github.com/ljharb/eslint-config/commit/d127e81f22ee4c43bb35a04f208ad693d9fcecca)

## [v20.2.3](https://github.com/ljharb/eslint-config/compare/v20.2.2...v20.2.3) - 2022-02-13

### Commits

- [Fix] pin `eslint-scope`, since v7.1.1+ breaks ES3 strict mode parsing [`3f418db`](https://github.com/ljharb/eslint-config/commit/3f418db1d8380e42c65a2aa50f1b093a7d042d7d)

## [v20.2.2](https://github.com/ljharb/eslint-config/compare/v20.2.1...v20.2.2) - 2022-02-12

### Commits

- [Deps] use a simpler peer dep range for eslint [`0b5505c`](https://github.com/ljharb/eslint-config/commit/0b5505cce9c1bdbd6416786721e9ee83b3441bcd)

## [v20.2.1](https://github.com/ljharb/eslint-config/compare/v20.2.0...v20.2.1) - 2022-02-11

### Commits

- [Fix] pin `eslint` to &lt; `v8.9`, since it breaks ES3 strict mode parsing [`a6efbad`](https://github.com/ljharb/eslint-config/commit/a6efbad1c15af29f673d6292a1f0e84b46981e49)
- [Deps] update `eslint` [`3bdaab5`](https://github.com/ljharb/eslint-config/commit/3bdaab56018fbbe3dab1ce2921c7989819712810)
- [Dev Deps] update `auto-changelog`, `tape` [`72c6591`](https://github.com/ljharb/eslint-config/commit/72c6591ed6eefe6c0b3c90e920a493f243adc039)
- [meta] improve `eclint` check [`81616c3`](https://github.com/ljharb/eslint-config/commit/81616c3fd8efd9fc901b5df2b713bcfe0339817b)

## [v20.2.0](https://github.com/ljharb/eslint-config/compare/v20.1.0...v20.2.0) - 2022-01-11

### Commits

- [New] add `node/0.4` config [`e51f8b5`](https://github.com/ljharb/eslint-config/commit/e51f8b519b58e8efb9bed288690b621b0bbe6919)
- [Deps] update `eslint` [`d0d2e19`](https://github.com/ljharb/eslint-config/commit/d0d2e191d1b5bc4158033778b8cf78008d633edd)
- [Dev Deps] update `aud`, `eslint-find-rules` [`7829d6a`](https://github.com/ljharb/eslint-config/commit/7829d6a5b149983ce1fcdb188ff86036c9587e54)
- [Deps] update `eslint` [`0014084`](https://github.com/ljharb/eslint-config/commit/00140843e8ce5408fd8f2244b3c4d2819fce5bef)
- [Fix] `node/4`: set `ecmaVersion` to 2015 [`9ee53d8`](https://github.com/ljharb/eslint-config/commit/9ee53d83866c44615c5bb28d61806a2312af3ec7)
- [Dev Deps] update `tape` [`44371fb`](https://github.com/ljharb/eslint-config/commit/44371fba006d5fe738b7745853070f13c6f55320)

## [v20.1.0](https://github.com/ljharb/eslint-config/compare/v20.0.0...v20.1.0) - 2021-12-13

### Commits

- [actions] reuse common workflows [`0396dc4`](https://github.com/ljharb/eslint-config/commit/0396dc462003c751fdd427b4991fa31f5a12dda7)
- [minor] add `ignorePatterns` [`b8f3a45`](https://github.com/ljharb/eslint-config/commit/b8f3a45b0b43f81a136f445494fd0bd884444c0c)
- [Deps] update `eslint` [`6d84b1a`](https://github.com/ljharb/eslint-config/commit/6d84b1a2e60f62c463c89758b2b0e95d3fb2ac63)

## [v20.0.0](https://github.com/ljharb/eslint-config/compare/v19.1.1...v20.0.0) - 2021-12-05

### Commits

- [Breaking] update `eslint`, add `allowReserved: true` [`ea09dc0`](https://github.com/ljharb/eslint-config/commit/ea09dc07d5cfd15b76da0cad23b62353942a7d2f)

## [v19.1.1](https://github.com/ljharb/eslint-config/compare/v19.1.0...v19.1.1) - 2021-12-05

### Commits

- [patch] tests: disable `no-buffer-constructor` [`b475f75`](https://github.com/ljharb/eslint-config/commit/b475f7506fff861733e5663a1e34444696383f83)

## [v19.1.0](https://github.com/ljharb/eslint-config/compare/v19.0.1...v19.1.0) - 2021-12-03

### Commits

- [New] add `node/4`, `node/6`, `node/8`, `node/10`, `node/12`, `node/14`, `node/16` configs [`434696a`](https://github.com/ljharb/eslint-config/commit/434696a63f27766f6043342df4aedf3af5b9d442)
- [New] add more globals [`77555f4`](https://github.com/ljharb/eslint-config/commit/77555f462aaad10480c8b9afade0b0c623e334b0)
- [patch] `operator-linebreak`: upstream "before" overrides from tons of my packages [`c2407eb`](https://github.com/ljharb/eslint-config/commit/c2407eb89ed30e8921f47bcaa70281a828151538)
- [Deps] update `eslint` [`a82cfa5`](https://github.com/ljharb/eslint-config/commit/a82cfa59c1742fc19096ed10d019f42263e53c6b)
- [patch] `no-invalid-regexp`: allow `u` and `y` as constructor flags [`41119d0`](https://github.com/ljharb/eslint-config/commit/41119d0677b0d06b3f7bab3a87487220fdc7389a)
- [Dev Deps] update `tape` [`643f300`](https://github.com/ljharb/eslint-config/commit/643f3000fed636481c50eb451b4b0a5bf7596a3c)

## [v19.0.1](https://github.com/ljharb/eslint-config/compare/v19.0.0...v19.0.1) - 2021-11-08

### Commits

- [meta] fix engines declaration, tests to match eslint [`0de82b6`](https://github.com/ljharb/eslint-config/commit/0de82b6ececb0f3cfbcc427444086a74b3b83df5)

## [v19.0.0](https://github.com/ljharb/eslint-config/compare/v18.0.0...v19.0.0) - 2021-11-08

### Commits

- [meta] add `auto-changelog` [`10da95e`](https://github.com/ljharb/eslint-config/commit/10da95e045f5c2e36e6c3f51b4559bc4689e7842)
- [Breaking] update to `eslint` 8 [`e5518a8`](https://github.com/ljharb/eslint-config/commit/e5518a888848e709eaa36d33e230b190ec23fb9a)
- [actions] update codecov uploader [`533ce96`](https://github.com/ljharb/eslint-config/commit/533ce96ca6cc29644e23ef200151561fc9e540b6)
- [Fix] `node/latest`: quote fewer properties [`622c2d1`](https://github.com/ljharb/eslint-config/commit/622c2d17b6977ee33cf1192aba4a5ef8d7e8d800)
- [Dev Deps] update `safe-publish-latest` [`666329a`](https://github.com/ljharb/eslint-config/commit/666329a9712cee69bbd9588d65aec31834572821)

<!-- auto-changelog-above -->

18.0.0 / 2021-08-30
=================
  * [Breaking] enable `no-div-regex`, `no-else-return`
  * [Breaking] `node/latest`: inherit from base, enable lots of "prefer" rules
  * [Deps] update `eslint`, `tape`

17.6.0 / 2021-05-02
=================
  * [minor] `node/latest`: add es2021
  * [Deps] update `eslint`
  * [meta] use `prepublishOnly` script for npm 7+
  * [actions] use `node/install` instead of `node/run`; use `codecov` action
  * [Dev Deps] update `aud`, `tape`

17.5.1 / 2021-02-09
=================
  * [patch] update `eslint` to v7.19.0
  * [Fix] `node/latest`: set up proper globals

17.5.0 / 2021-01-24
=================
  * [New] add `node/latest` config

17.4.0 / 2021-01-16
=================
  * [minor] update `eslint` to v7.18.0, enable `no-unsafe-optional-chaining`
  * [patch] add some new globals
  * [meta] do not publish github action workflow files
  * [meta] remove unneeded token
  * [Dev Deps] update `tape`

17.3.0 / 2020-11-23
=================
  * [minor] bump eslint to `v7.14.0`, enable `no-nonoctal-decimal-escape`
  * [patch] ESM: modernize some rules
  * [Dev Deps] update `aud`, `eslint-find-rules`
  * [actions] update rebase action to use checkout v2
  * [actions] add "Allow Edits" workflow
  * [Tests] migrate tests to Github Actions

17.2.0 / 2020-08-17
=================
  * [minor] update to `eslint` `v7.7.0`
  * [Dev Deps] update `tape`
  * [Tests] up to `node` `v10.22`

17.1.0 / 2020-05-15
=================
  * [New] add `esm` and `tests` entrypoints, for easier composition
  * [meta] only run `aud` on prod deps
  * [Dev Deps] add `aud`

17.0.0 / 2020-05-10
=================
  * [Breaking] `eslint` v7
  * [Dev Deps] update `eslint-find-rules`, `in-publish`, `tape`
  * [Tests] use shared travis-ci configs

16.0.0 / 2020-01-25
=================
  * [Breaking] `arrow-parens`: switch to always requiring arg parens, for consistency
  * [New] add `bin` overrides to allow node stuff
  * [New] add native ESM rules for `.mjs` files
  * [patch] loosen some rules
  * [Deps] update `eslint`
  * [Dev Deps] update `tape`

15.1.0 / 2019-12-19
=================
  * [minor] update `eslint` and add new rules
  * [patch] loosen `max-params` for tests
  * [meta] remove unused Makefile and associated utilities

15.0.2 / 2019-11-17
=================
  * [patch] disable `prefer-regex-literals` in tests
  * [Dev Deps] update `safe-publish-latest`
  * [actions] add automatic rebasing / merge commit blocking

15.0.1 / 2019-11-09
=================
  * [meta] normalize funding field URL

15.0.0 / 2019-11-06
=================
  * [Breaking] update `eslint` to `v6.6`
  * [meta] add `funding` field

14.1.0 / 2019-09-02
=================
  * [Deps] update `eslint` to v6.3
  * [Dev Deps] update `replace`, `safe-publish-latest`
  * [Tests] up to `node` `v12.9`, `v11.15`, `v10.16`, `v8.16`; drop nodes below 8, per eslint

14.0.2 / 2019-08-10
=================
  * [patch] disable `max-nested-callbacks` in tests

14.0.1 / 2019-08-10
=================
  * [patch] disable `symbol-description` in tests

14.0.0 / 2019-08-10
=================
  * [Breaking] upgrade to eslint v6
  * [Patch] add disabled `prefer-named-capture-group` rule
  * [Dev Deps] update `tape`, `semver`, `replace`, `eslint`
  * [Tests] use `eclint` over `editorconfig-tools` (#28)
  * [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops

13.1.1 / 2018-12-28
=================
  * [patch] disable `func-names`; too noisy
  * [Deps] update `eslint`

13.1.0 / 2018-12-26
=================
  * [Minor] update config and require eslint v5.11
  * [Dev Deps] update `eslint`, `replace`, `safe-publish-latest`, `semver`
  * [Tests] use `npm audit` instead of `nsp`
  * [Tests] up to `node` `v11.6`, `v10.15`, `v8.15`, `v6.16`

13.0.0 / 2018-07-23
=================
  * [Breaking] update eslint to v5

12.2.1 / 2017-08-06
=================
  * [Deps] update `eslint`
  * [Dev Deps] update `nsp`, `semver`

12.2.0 / 2017-07-23
=================
  * [Deps] update `eslint`; tighten `no-underscore-dangle`

12.1.0 / 2017-07-09
=================
  * [Deps] update `eslint`; enable `getter-return`
  * [Fix] `dot-notation`: `allowKeywords` should be `false` (#21)

12.0.0 / 2017-06-28
=================
  * [Breaking] update `eslint` to v4
  * [Deps] update `eslint`, `nsp`; enable `no-compare-neg-zero`, `nonblock-body-statement-position`, loosen `max-len`
  * [Dev Deps] update `eslint-find-rules`
  * [Tests] add editorconfig
  * [Tests] up to `node` `v8.1`, `v7.10`, `v6.11`, `v4.8`; improve test matrix
  * Only apps should have lockfiles.

11.0.0 / 2017-02-04
=================
  * [breaking] enable `template-tag-spacing`, update `eslint`

10.0.0 / 2017-01-21
=================
  * [breaking] [deps] update `eslint`; enable `no-await-in-loop`, `no-multi-assign`, `prefer-promise-reject-errors`

9.0.1 / 2016-11-27
=================
  * [Fix] `func-name-matching` should be set to “never”

9.0.0 / 2016-11-27
=================
  * [Deps] [Breaking] update `eslint` to `v3.11`
  * [Dev Deps] update `eslint-find-rules`, `nsp`, `safe-publish-latest`
  * [Deps] ensure `safe-publish-latest` does not need to be a runtime dep
  * [Tests] up to `node` `v7.2` ,`v6.9`, `v4.6`; improve test matrix
  * [Tests] Add `npm run find-unused`

8.0.0 / 2016-08-27
=================
  * [Breaking] [Deps] update `eslint` to `v3.4`

7.0.0 / 2016-08-12
=================
  * [Breaking] [Deps] update `eslint` to `v3.3`
  * [Dev Deps] update `eslint-find-rules`, `safe-publish-latest`, `nsp`, `semver`
  * [Tests] on `node` `v6.3`, `v5.12`
  * [Tests] stop testing on node < 4

6.0.0 / 2016-07-02
=================
  * [Breaking] [Deps] update `eslint` to v3
  * [Breaking] enable `rest-spread-spacing`
  * [Breaking] enable `object-curly-spacing` rule
  * [Breaking] enable `no-mixed-operators` rule
  * [Breaking] enable `max-lines` rule
  * [Tests] Only run `eslint-find-rules` on `prepublish`
  * [Dev Deps] add `safe-publish-latest` prepublish check
  * [Dev Deps] update `eslint`, `eslint-find-rules`, `nsp`, `semver`

5.0.0 / 2016-05-28
=================
  * [breaking] enable `no-prototype-builtins`, `no-useless-rename`, `unicode-bom`
  * [Dev Deps] update `eslint`

4.0.1 / 2016-05-15
=================
  * [patch] update `eslint` to v2.10
  * [Dev Deps] update `eslint-find-rules`, `nsp`
  * [Tests] up to `node` `v6.1`

4.0.0 / 2016-05-02
=================
  * [Breaking] update rules from eslint v2.9.0
  * [Dev Deps] update `eslint`, `eslint-find-rules`, `nsp`

3.0.1 / 2016-04-16
=================
  * [Fix] Loosen `no-extra-parens` rule

3.0.0 / 2016-04-15
=================
  * [Breaking] add `dot-location`, `indent`, `no-empty-function`, + disabled `no-var`, `require-jsdoc` rules
  * [Dev Deps / Peer Deps] update `eslint`, `nsp`, add `eslint` to peer deps
  * [Tests] ensure that no eslint rules are missing
  * [Tests] up to `node` `v5.10`, `v4.4`
  * Alphabetize rules

2.2.0 / 2016-03-26
=================
  * [New] enable `max-statements-per-line`
  * [New] enable `no-duplicate-imports`
  * [New] enable `no-useless-escape`
  * [Dev Deps] update `eslint`

2.1.1 / 2016-02-14
=================
  * Don’t warn on `spaced-comment` for docblocks

2.1.0 / 2016-02-13
=================
  * [New] add polyfillable/shimmable ES6 globals

2.0.0 / 2016-02-13
=================
  * [Dev Deps] update `eslint` to v2

1.6.1 / 2015-12-27
=================
  * [Fix] allow “throws” to be in bracket notation
  * [Dev Deps] update `eslint`, `semver`, `nsp`
  * [Tests] up to `node` `v5.3`
  * [Tests] fix npm upgrades for older nodes

1.6.0 / 2015-11-08
=================
  * [Dev Deps] update `nsp`, `eslint`
  * Add `no-case-declarations`, enable `radix` rule

1.5.0 / 2015-10-31
=================
  * [Dev Deps] update `nsp`, `eslint`
  * Add `no-arrow-condition`, `arrow-body-style` "as-needed", "maxEOF" option to `no-multiple-empty-lines`, enable `no-plusplus` with "allowForLoopAfterthoughts" option, add defaults to `no-shadow`

1.4.1 / 2015-10-17
=================
  * Make `no-magic-numbers` only a warning

1.4.0 / 2015-10-17
=================
  * Update rules for `v1.7.1`

1.3.0 / 2015-10-02
=================
  * Update rules for `v1.6.0`
  * [Dev Deps] update `eslint`

1.2.0 / 2015-09-14
=================
  * Update rules for `v1.4.1`
  * [Dev Deps] update `semver`

1.1.0 / 2015-08-28
=================
  * Update rules for `v1.3.0`

1.0.5 / 2015-08-01
=================
  * Update rules for `v1.1.0` and `v1.2.0` release
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG
  * [Tests] up to `io.js` `v3.0`

1.0.4 / 2015-08-01
=================
  * Update rules for `v1.0.0` release
  * Actually run `eslint` on `npm test`
  * Update configuration to be ESLint 1.0.0 compatible (#1)
  * Add new rules in `v1.0.0-rc-2`

1.0.3 / 2015-07-23
=================
  * Make sure that *this* module's `.eslintrc` is exported.

1.0.2 / 2015-07-23
=================
  * Fix omitted require

1.0.1 / 2015-07-21
=================
  * Fix package.json

1.0.0 / 2015-07-21
=================
  * Initial release.
