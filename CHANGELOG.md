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
