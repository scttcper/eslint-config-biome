import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const tsEslintConfig = tseslint.config(
  {
    plugins: { '@typescript-eslint': typescriptEslint },
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-unsafe-function-type': ['error'],
      '@typescript-eslint/no-wrapper-object-types': ['error'],
      '@typescript-eslint/adjacent-overload-signatures': ['error'],
      '@typescript-eslint/await-thenable': ['error'],
      '@typescript-eslint/ban-tslint-comment': ['error'],
      '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
      '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
      '@typescript-eslint/consistent-indexed-object-style': ['error'],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',
            'public-static-field',
            'public-static-method',
            'protected-static-field',
            'protected-static-method',
            'private-static-field',
            'private-static-method',
            'static-field',
            'static-method',
            'public-decorated-field',
            'public-instance-field',
            'public-abstract-field',
            'public-field',
            'protected-decorated-field',
            'protected-instance-field',
            'protected-abstract-field',
            'protected-field',
            'private-decorated-field',
            'private-instance-field',
            'private-field',
            'instance-field',
            'abstract-field',
            'decorated-field',
            'field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'constructor',
            'public-decorated-method',
            'public-instance-method',
            'public-abstract-method',
            'public-method',
            'protected-decorated-method',
            'protected-instance-method',
            'protected-abstract-method',
            'protected-method',
            'private-decorated-method',
            'private-instance-method',
            'private-method',
            'instance-method',
            'abstract-method',
            'decorated-method',
            'method',
          ],
        },
      ],
      '@typescript-eslint/no-base-to-string': ['error'],
      '@typescript-eslint/no-array-constructor': ['error'],
      '@typescript-eslint/no-array-delete': ['error'],
      '@typescript-eslint/no-duplicate-enum-values': ['error'],
      '@typescript-eslint/no-duplicate-type-constituents': ['error'],
      '@typescript-eslint/no-dynamic-delete': ['error'],
      '@typescript-eslint/no-loop-func': ['error'],
      '@typescript-eslint/no-for-in-array': ['error'],
      '@typescript-eslint/no-meaningless-void-operator': ['error'],

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksConditionals: true,
          checksVoidReturn: false,
        },
      ],

      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            'error',
            'domain',
            'freelist',
            'smalloc',
            'punycode',
            'sys',
            'querystring',
            'colors',
          ],
        },
      ],

      '@typescript-eslint/no-require-imports': ['error'],
      '@typescript-eslint/only-throw-error': [
        'error',
        {
          allowThrowingUnknown: true,
          allowThrowingAny: false,
        },
      ],

      '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
      '@typescript-eslint/no-unnecessary-qualifier': ['error'],
      '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
      '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
      '@typescript-eslint/no-unsafe-enum-comparison': ['error'],
      '@typescript-eslint/no-unused-expressions': ['error'],
      '@typescript-eslint/no-var-requires': ['error'],
      '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
      '@typescript-eslint/parameter-properties': [
        'error',
        {
          prefer: 'parameter-property',
        },
      ],
      '@typescript-eslint/prefer-find': ['error'],
      '@typescript-eslint/prefer-includes': ['error'],
      '@typescript-eslint/prefer-promise-reject-errors': ['error'],
      '@typescript-eslint/prefer-readonly': ['error'],
      '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
      '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          minimumDescriptionLength: 4,
        },
      ],
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],

      '@typescript-eslint/return-await': ['error'],

      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          ignoreStringArrays: true,
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          allowDefaultCaseForExhaustiveSwitch: false,
          requireDefaultForNonUnion: true,
        },
      ],

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'never',
          types: 'never',
          lib: 'never',
        },
      ],

      '@typescript-eslint/prefer-regexp-exec': ['error'],
      '@typescript-eslint/prefer-return-this-type': ['error'],

      '@typescript-eslint/unified-signatures': [
        'error',
        {
          ignoreDifferentlyNamedParameters: true,
        },
      ],
      'no-dupe-else-if': ['error'],
      'no-invalid-regexp': ['error'],
      'no-promise-executor-return': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-unreachable-loop': ['error'],
      'no-useless-backreference': ['error'],
      'no-unexpected-multiline': ['error'],

      'accessor-pairs': [
        'error',
        {
          enforceForClassMembers: true,
          getWithoutSet: false,
          setWithoutGet: true,
        },
      ],

      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
          checkForEach: false,
          allowVoid: false,
        },
      ],

      'block-scoped-var': ['error'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': ['error'],
      'no-alert': ['error'],
      'no-caller': ['error'],
      'no-eq-null': ['error'],
      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-implicit-coercion': ['error'],
      'no-implicit-globals': ['error'],
      'no-implied-eval': ['error'],
      'no-iterator': ['error'],
      'no-multi-str': ['error'],
      'no-new-func': ['error'],
      'no-object-constructor': ['error'],
      'no-new': ['error'],
      'no-octal-escape': ['error'],
      'no-octal': ['error'],
      'no-proto': ['error'],
      'no-return-assign': ['error', 'always'],
      'no-return-await': ['error'],
      'no-script-url': ['error'],
      'no-unmodified-loop-condition': ['error'],
      'no-useless-call': ['error'],
      'no-useless-escape': ['error'],
      'no-useless-return': ['error'],
      radix: ['error'],
      'no-delete-var': ['error'],
      'no-undef-init': ['error'],
      'no-buffer-constructor': ['error'],
      'func-name-matching': [
        'error',
        {
          considerPropertyDescriptor: true,
        },
      ],
      'logical-assignment-operators': [
        'error',
        'always',
        {
          enforceForIfStatements: true,
        },
      ],
      'max-depth': ['warn'],
      'max-nested-callbacks': ['warn', 4],
      'max-params': [
        'warn',
        {
          max: 4,
        },
      ],

      'max-statements-per-line': ['error'],

      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: true,
          properties: true,
        },
      ],

      'no-bitwise': ['error'],
      'no-multi-assign': ['error'],
      'one-var-declaration-per-line': ['error'],
      'prefer-object-spread': ['error'],
      'unicode-bom': ['error', 'never'],
      'arrow-body-style': ['error'],
      'no-constant-binary-expression': ['error'],

      'no-useless-computed-key': [
        'error',
        {
          enforceForClassMembers: true,
        },
      ],

      'object-shorthand': [
        'error',
        'always',
        {
          avoidExplicitReturnArrows: true,
        },
      ],

      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },

          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      'prefer-object-has-own': ['error'],
      'prefer-spread': ['error'],
      'symbol-description': ['error'],
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.js',
      '**/*.jsx',
    ],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^node:.*$'],
            [
              '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            ],
            ['^react', '^@?\\w'],
            ['^(@ctrl)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
    },
  },
);

export default tsEslintConfig;
