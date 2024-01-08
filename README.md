# @ctrl/eslint-config

Not really a shareable eslint config, more of a set of rules and eslint all together. Installs all required eslint dependencies. This package was created to unify my eslint rules and reduce churn from all the eslint packages in package.json. Includes prettier and most of xo-typescript.

Extends from [xo](https://github.com/xojs/eslint-config-xo) and [xo-typescript](https://github.com/xojs/eslint-config-xo-typescript) and disables a few rules. Config uses 2 space indentation.

```sh
npm i @ctrl/eslint-config -D
```

.eslintrc
```json
{
  "root": true,
  "env": {
    "node": true,
    "jest": true
  },
  "extends": ["@ctrl/eslint-config"]
}
```
