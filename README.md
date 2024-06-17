# @ctrl/eslint-config-biome

Not really a shareable eslint config, more of a set of rules and eslint all together. Installs all required eslint dependencies. This package was created to unify my eslint rules and reduce churn from all the eslint packages in package.json. Does not include prettier rules, expected to be setup with biome.

Based on [xo](https://github.com/xojs/eslint-config-xo) and [xo-typescript](https://github.com/xojs/eslint-config-xo-typescript) and disables rules that are in biome are I found annoying.

```sh
npm i @biomejs/biome @ctrl/eslint-config-biome -D
```

.eslintrc
```json
{
  "root": true,
  "env": {
    "node": true,
  },
  "extends": ["@ctrl/eslint-config-biome"]
}
```

biome.json
```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "files": {
    "ignoreUnknown": true,
    "ignore": ["dist/*", "package.json"]
  },
  "extends": ["@ctrl/eslint-config-biome/biome"]
}
```
