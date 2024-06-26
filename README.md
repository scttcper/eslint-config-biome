# @ctrl/eslint-config-biome

Not really a shareable eslint config, more of a set of rules and eslint all together. Installs all required eslint dependencies. This package was created to unify my eslint rules and reduce churn from all the eslint packages in package.json. Does not include prettier rules, expected to be setup with biome.

Based on [xo](https://github.com/xojs/eslint-config-xo) and [xo-typescript](https://github.com/xojs/eslint-config-xo-typescript) and disables rules that are in biome are I found annoying.

```sh
npm i @biomejs/biome @ctrl/eslint-config-biome @eslint/compat eslint -D
```

eslint.config.mjs
```js
import config from '@ctrl/eslint-config-biome';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['tailwind.config.cjs', 'postcss.config.cjs', 'eslint.config.mjs', 'vite.config.ts'],
  },
];
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
