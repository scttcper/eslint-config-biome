'use strict';

module.exports = {
  extends: ['xo', 'xo-typescript/space'],
  plugins: ['simple-import-sort'],
  rules: {
    'object-curly-spacing': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    'operator-linebreak': 'off',
    'no-multiple-empty-lines': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'off',
    'no-useless-rename': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    'no-constructor-return': 'off',
    'no-inner-declarations': 'off',
    'no-new-native-nonconstructor': 'off',
    'no-nonoctal-decimal-escape': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    'no-case-declarations': 'off',
    'prefer-rest-params': 'off',
    'no-negated-condition': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/consistent-type-exports': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    'operator-assignment': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    'no-cond-assign': 'off',
    'no-async-promise-executor': 'off',
    'no-func-assign': 'off',
    'no-unsafe-negation': 'off',
    'no-dupe-args': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-compare-neg-zero': 'off',
    'no-labels': 'off',
    'no-sparse-array': 'off',
    eqeqeq: 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    'no-with': 'off',

    // formatting conflict
    'array-element-newline': 'off',
    'jsx-quotes': 'off',

    /** Requires strictNullChecks kinda annoying */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'capitalized-comments': 'off',
    'no-warning-comments': 'off',
    complexity: 'off',

    // Conflicts with formatting
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',

    /**
     * This is kinda slow, and I don't think its always useful
     * like when a function just returns the promise
     *
     * Maybe turn it back on later
     */
    '@typescript-eslint/promise-function-async': 'off',

    /**
     * Better import sorting
     */
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],

          ['^node:.*$'],
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],

          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],

          // Internal packages.
          ['^(@ctrl)(/.*|$)'],

          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          BigInt: {
            message: 'Use `bigint` instead.',
            fixWith: 'bigint',
          },
          Object: {
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          '{}': {
            message:
              'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
            fixWith: 'Record<string, unknown>',
          },
          object: {
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          Function: 'Use a specific function type instead, like `() => void`.',
          Buffer: {
            message:
              'Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer',
            suggest: ['Uint8Array'],
          },
          '[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
          '[[]]':
            "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
          '[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
          '[[[[]]]]': 'ur drunk 🤡',
          '[[[[[]]]]]': '🦄💥',
        },
      },
    ],

    // Biome disabled - this run via biome lint
    'no-control-regex': 'off',
    'one-var': 'off',
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-unreachable': 'off',
    'no-regex-spaces': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-dupe-keys': 'off',
    'no-this-before-super': 'off',
    curly: 'off',
    'no-import-assign': 'off',
    'no-debugger': 'off',
    'no-shadow-restricted-names': 'off',
    'no-global-assign': 'off',
    'object-curly-newline': 'off',
    'prefer-const': 'off',
    'no-restricted-globals': 'off',
    'no-constant-condition': 'off',
    'no-unsafe-finally': 'off',
    'no-obj-calls': 'off',
    'prefer-arrow-callback': 'off',
    'no-self-compare': 'off',
    'no-setter-return': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-regex-literals': 'off',
    'prefer-numeric-literals': 'off',
    'no-self-assign': 'off',
    'no-const-assign': 'off',
    'require-yield': 'off',
    'no-class-assign': 'off',
    'no-sequences': 'off',
    'no-unneeded-ternary': 'off',
    'no-lonely-if': 'off',
    'no-unused-labels': 'off',
    'for-direction': 'off',
    'default-case-last': 'off',
    'no-useless-catch': 'off',
    'no-empty-character-class': 'off',
    'no-ex-assign': 'off',
    'no-void': 'off',
    'no-fallthrough': 'off',
    'no-prototype-builtins': 'off',
    'use-isnan': 'off',
    'valid-typeof': 'off',
    'no-eval': 'off',
    'no-misleading-character-class': 'off',
    'no-lone-blocks': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-empty-export': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
  },
};
