import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

console.log(tseslint.configs.recommended);

const tsEslintConfig = tseslint.config(
  {
    plugins: { '@typescript-eslint': typescriptEslint },
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/restrict-plus-operands': [
        'off',
        {
          allowAny: false,
        },
      ],
      'no-await-in-loop': ['off'],
      'func-names': ['off', 'never'],
      '@typescript-eslint/promise-function-async': ['off'],
      'object-curly-spacing': ['off', 'never'],
      '@typescript-eslint/comma-dangle': ['off', 'always-multiline'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-unsafe-member-access': ['off'],
      '@typescript-eslint/no-unsafe-call': ['off'],
      '@typescript-eslint/no-unsafe-return': ['off'],

      '@typescript-eslint/no-floating-promises': [
        'off',
        {
          ignoreVoid: true,
          ignoreIIFE: true,
        },
      ],

      '@typescript-eslint/no-implicit-any-catch': ['off'],
      '@typescript-eslint/no-confusing-void-expression': ['off'],
      '@typescript-eslint/no-non-null-assertion': ['off'],
      '@typescript-eslint/no-unsafe-argument': ['off'],
      '@typescript-eslint/no-unsafe-assignment': ['off'],

      '@typescript-eslint/ban-ts-comment': [
        'off',
        {
          'ts-expect-error': 'allow-with-description',
          minimumDescriptionLength: 4,
        },
      ],

      '@typescript-eslint/naming-convention': [
        'off',
        {
          selector: [
            'variable',
            'function',
            'classProperty',
            'objectLiteralProperty',
            'parameterProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
          ],

          format: ['strictCamelCase'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allow',

          filter: {
            regex: '[- ]',
            match: false,
          },
        },
        {
          selector: 'typeLike',
          format: ['StrictPascalCase'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['StrictPascalCase'],
          prefix: ['is', 'has', 'can', 'should', 'will', 'did'],
        },
        {
          selector: 'interface',
          filter: '^(?!I)[A-Z]',
          format: ['StrictPascalCase'],
        },
        {
          selector: 'typeParameter',
          filter: '^T$|^[A-Z][a-zA-Z]+$',
          format: ['StrictPascalCase'],
        },
        {
          selector: ['classProperty', 'objectLiteralProperty'],
          format: null,
          modifiers: ['requiresQuotes'],
        },
      ],

      '@typescript-eslint/consistent-type-definitions': ['off', 'type'],

      '@typescript-eslint/consistent-type-imports': [
        'off',
        {
          fixStyle: 'inline-type-imports',
        },
      ],

      '@typescript-eslint/object-curly-spacing': ['off', 'never'],

      '@typescript-eslint/indent': [
        'off',
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: false,
          offsetTernaryExpressions: false,
          ignoreComments: false,
        },
      ],

      '@typescript-eslint/quotes': ['off', 'single'],
      'operator-linebreak': ['off', 'before'],

      'no-multiple-empty-lines': [
        'off',
        {
          max: 1,
        },
      ],

      'no-extra-boolean-cast': ['off'],
      'no-extra-label': ['off'],
      'no-useless-rename': ['off'],
      '@typescript-eslint/dot-notation': ['off'],
      'no-constructor-return': ['off'],
      'no-inner-declarations': ['off'],
      'no-new-native-nonconstructor': ['off'],
      'no-nonoctal-decimal-escape': ['off'],
      '@typescript-eslint/no-loss-of-precision': ['off'],
      'no-case-declarations': ['off'],
      'prefer-rest-params': ['off'],
      'no-negated-condition': ['off'],

      '@typescript-eslint/array-type': [
        'off',
        {
          default: 'array-simple',
        },
      ],

      '@typescript-eslint/default-param-last': ['off'],

      '@typescript-eslint/consistent-type-exports': [
        'off',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],

      '@typescript-eslint/prefer-for-of': ['off'],
      'operator-assignment': ['off', 'always'],
      '@typescript-eslint/prefer-function-type': ['off'],
      'no-cond-assign': ['off'],
      'no-async-promise-executor': ['off'],
      'no-func-assign': ['off'],

      'no-unsafe-negation': [
        'off',
        {
          enforceForOrderingRelations: true,
        },
      ],

      'no-dupe-args': ['off'],

      'no-empty': [
        'off',
        {
          allowEmptyCatch: true,
        },
      ],

      '@typescript-eslint/no-empty-function': ['off'],

      '@typescript-eslint/no-empty-interface': [
        'off',
        {
          allowSingleExtends: true,
        },
      ],

      'no-compare-neg-zero': ['off'],
      'no-labels': ['off'],
      'no-sparse-arrays': ['off'],
      eqeqeq: ['off'],
      '@typescript-eslint/no-dupe-class-members': ['off'],
      'no-with': ['off'],
      'no-var': ['off'],

      'no-else-return': [
        'off',
        {
          allowElseIf: false,
        },
      ],

      'no-empty-pattern': ['off'],
      'no-new-wrappers': ['off'],
      'no-label-var': ['off'],
      'no-duplicate-case': ['off'],
      'no-useless-concat': ['off'],
      'no-empty-static-block': ['off'],
      'array-element-newline': ['off', 'consistent'],
      'jsx-quotes': ['off', 'prefer-single'],

      '@typescript-eslint/prefer-nullish-coalescing': [
        'off',
        {
          ignoreTernaryTests: false,
          ignoreConditionalTests: false,
          ignoreMixedLogicalExpressions: false,
        },
      ],

      'capitalized-comments': [
        'off',
        'always',
        {
          ignorePattern: 'pragma|ignore|prettier-ignore|webpack\\w+:|c8|type-coverage:',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      ],

      'no-warning-comments': ['off'],
      complexity: ['off'],
      'no-mixed-operators': ['off'],
      'no-mixed-spaces-and-tabs': ['off'],

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

      'no-control-regex': ['off'],
      'one-var': ['off', 'never'],
      'constructor-super': ['off'],
      'getter-return': ['off'],
      'no-unreachable': ['off'],
      'no-regex-spaces': ['off'],

      'no-unsafe-optional-chaining': [
        'off',
        {
          disallowArithmeticOperators: true,
        },
      ],

      'no-dupe-keys': ['off'],
      'no-this-before-super': ['off'],
      curly: ['off'],
      'no-import-assign': ['off'],
      'no-debugger': ['off'],
      'no-shadow-restricted-names': ['off'],
      'no-global-assign': ['off'],

      'object-curly-newline': [
        'off',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 4,
            consistent: true,
          },

          ObjectPattern: {
            multiline: true,
            consistent: true,
          },

          ImportDeclaration: {
            multiline: true,
            minProperties: 4,
            consistent: true,
          },

          ExportDeclaration: {
            multiline: true,
            minProperties: 4,
            consistent: true,
          },
        },
      ],

      'prefer-const': [
        'off',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],

      'no-restricted-globals': [
        'off',
        'event',
        {
          name: 'atob',
          message:
            'This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead.',
        },
        {
          name: 'btoa',
          message:
            'This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead.',
        },
      ],

      'no-constant-condition': ['off'],
      'no-unsafe-finally': ['off'],
      'no-obj-calls': ['off'],

      'prefer-arrow-callback': [
        'off',
        {
          allowNamedFunctions: true,
          allowUnboundThis: true,
        },
      ],

      'no-self-compare': ['off'],
      'no-setter-return': ['off'],
      'prefer-exponentiation-operator': ['off'],

      'prefer-regex-literals': [
        'off',
        {
          disallowRedundantWrapping: true,
        },
      ],

      'prefer-numeric-literals': ['off'],

      'no-self-assign': [
        'off',
        {
          props: true,
        },
      ],

      'no-const-assign': ['off'],
      'require-yield': ['off'],
      'no-class-assign': ['off'],
      'no-sequences': ['off'],
      'no-unneeded-ternary': ['off'],
      'no-lonely-if': ['off'],
      'no-unused-labels': ['off'],
      'for-direction': ['off'],
      'default-case-last': ['off'],
      'no-useless-catch': ['off'],
      'no-empty-character-class': ['off'],
      'no-ex-assign': ['off'],

      'no-void': [
        'off',
        {
          allowAsStatement: true,
        },
      ],

      'no-fallthrough': ['off'],
      'no-prototype-builtins': ['off'],
      'use-isnan': ['off'],

      'valid-typeof': [
        'off',
        {
          requireStringLiterals: false,
        },
      ],

      'no-eval': ['off'],
      'no-misleading-character-class': ['off'],
      'no-lone-blocks': ['off'],
      '@typescript-eslint/no-extra-non-null-assertion': ['off'],

      '@typescript-eslint/no-extraneous-class': [
        'off',
        {
          allowConstructorOnly: false,
          allowEmpty: false,
          allowStaticOnly: false,
          allowWithDecorator: true,
        },
      ],

      '@typescript-eslint/no-inferrable-types': ['off'],
      '@typescript-eslint/no-misused-new': ['off'],
      '@typescript-eslint/no-namespace': ['off'],
      '@typescript-eslint/no-redeclare': ['off'],

      '@typescript-eslint/no-this-alias': [
        'off',
        {
          allowDestructuring: true,
        },
      ],

      '@typescript-eslint/no-unnecessary-type-constraint': ['off'],
      '@typescript-eslint/no-unsafe-declaration-merging': ['off'],
      '@typescript-eslint/no-useless-constructor': ['off'],
      '@typescript-eslint/no-useless-empty-export': ['off'],
      '@typescript-eslint/prefer-as-const': ['off'],
      '@typescript-eslint/prefer-literal-enum-member': ['off'],
      '@typescript-eslint/prefer-namespace-keyword': ['off'],
      '@typescript-eslint/prefer-optional-chain': ['off'],
      '@typescript-eslint/adjacent-overload-signatures': ['error'],
      '@typescript-eslint/await-thenable': ['error'],
      '@typescript-eslint/ban-tslint-comment': ['error'],
      '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
      '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
      '@typescript-eslint/consistent-indexed-object-style': ['error'],

      'brace-style': [
        'off',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],

      '@typescript-eslint/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],

      'comma-dangle': ['off', 'always-multiline'],

      'comma-spacing': [
        'off',
        {
          before: false,
          after: true,
        },
      ],

      '@typescript-eslint/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      'default-param-last': ['off'],
      'dot-notation': ['off'],

      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],

      'func-call-spacing': ['off', 'never'],
      '@typescript-eslint/func-call-spacing': ['error', 'never'],

      indent: [
        'off',
        'tab',
        {
          SwitchCase: 1,
          flatTernaryExpressions: false,
          offsetTernaryExpressions: false,
          ignoreComments: false,
        },
      ],

      'keyword-spacing': ['off'],
      '@typescript-eslint/keyword-spacing': ['error'],

      'lines-between-class-members': [
        'off',
        {
          enforce: [
            {
              blankLine: 'always',
              prev: '*',
              next: 'method',
            },
            {
              blankLine: 'always',
              prev: 'method',
              next: 'field',
            },
            {
              blankLine: 'never',
              prev: 'field',
              next: 'field',
            },
          ],
        },
      ],

      '@typescript-eslint/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
          exceptAfterOverload: true,
        },
      ],

      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },

          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
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

      camelcase: [
        'off',
        {
          properties: 'always',
          ignoreDestructuring: false,
          ignoreImports: false,
          ignoreGlobals: false,
        },
      ],

      '@typescript-eslint/no-base-to-string': ['error'],
      'no-array-constructor': ['off'],
      '@typescript-eslint/no-array-constructor': ['error'],
      '@typescript-eslint/no-array-delete': ['error'],
      'no-dupe-class-members': ['off'],
      '@typescript-eslint/no-duplicate-enum-values': ['error'],
      '@typescript-eslint/no-duplicate-type-constituents': ['error'],
      '@typescript-eslint/no-dynamic-delete': ['error'],
      'no-empty-function': ['off'],
      'no-extra-parens': ['off'],
      'no-extra-semi': ['off'],
      '@typescript-eslint/no-extra-semi': ['error'],
      'no-loop-func': ['off'],
      '@typescript-eslint/no-loop-func': ['error'],
      'no-loss-of-precision': ['off'],
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
      'no-redeclare': ['off'],

      'no-restricted-imports': [
        'off',
        'domain',
        'freelist',
        'smalloc',
        'punycode',
        'sys',
        'querystring',
        'colors',
      ],

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
      'no-throw-literal': ['off'],

      '@typescript-eslint/no-throw-literal': [
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

      'no-unused-expressions': [
        'off',
        {
          enforceForJSX: true,
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],

      '@typescript-eslint/no-unused-expressions': ['error'],

      'no-unused-vars': [
        'off',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_$',
        },
      ],

      'no-useless-constructor': ['off'],

      'padding-line-between-statements': [
        'off',
        {
          blankLine: 'always',
          prev: 'multiline-block-like',
          next: '*',
        },
      ],

      '@typescript-eslint/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'multiline-block-like',
          next: '*',
        },
      ],

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

      'prefer-promise-reject-errors': [
        'off',
        {
          allowEmptyReject: true,
        },
      ],

      '@typescript-eslint/prefer-promise-reject-errors': ['error'],
      '@typescript-eslint/prefer-readonly': ['error'],
      '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
      '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      '@typescript-eslint/prefer-ts-expect-error': ['error'],
      quotes: ['off', 'single'],

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

      'space-before-function-paren': [
        'off',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      '@typescript-eslint/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      'space-infix-ops': ['off'],
      '@typescript-eslint/space-infix-ops': ['error'],
      semi: ['off', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],
      'space-before-blocks': ['off', 'always'],
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      'default-case': ['off'],

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

      '@typescript-eslint/type-annotation-spacing': ['error'],
      '@typescript-eslint/prefer-regexp-exec': ['error'],
      '@typescript-eslint/prefer-return-this-type': ['error'],

      '@typescript-eslint/unified-signatures': [
        'error',
        {
          ignoreDifferentlyNamedParameters: true,
        },
      ],

      'no-undef': [
        'off',
        {
          typeof: true,
        },
      ],

      'node/no-unsupported-features/es-syntax': ['off'],
      'node/no-unsupported-features/es-builtins': ['off'],
      'import/namespace': ['off'],
      'import/named': ['off'],
      'no-duplicate-imports': ['off'],
      'no-dupe-else-if': ['error'],
      'no-invalid-regexp': ['error'],
      'no-irregular-whitespace': ['error'],
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
      'dot-location': ['error', 'property'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': ['error'],
      'no-alert': ['error'],
      'no-caller': ['error'],
      'no-eq-null': ['error'],
      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-floating-decimal': ['error'],
      'no-implicit-coercion': ['error'],
      'no-implicit-globals': ['error'],
      'no-implied-eval': ['error'],
      'no-iterator': ['error'],
      'no-multi-spaces': ['error'],
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

      'wrap-iife': [
        'error',
        'inside',
        {
          functionPrototypeMethods: true,
        },
      ],

      yoda: ['error'],
      'no-delete-var': ['error'],
      'no-undef-init': ['error'],
      'no-buffer-constructor': ['error'],
      'array-bracket-newline': ['error', 'consistent'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-style': ['error', 'last'],

      'computed-property-spacing': [
        'error',
        'never',
        {
          enforceForClassMembers: true,
        },
      ],

      'eol-last': ['error'],

      'func-name-matching': [
        'error',
        {
          considerPropertyDescriptor: true,
        },
      ],

      'function-call-argument-newline': ['error', 'consistent'],

      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      'linebreak-style': ['error', 'unix'],

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

      'new-parens': ['error'],
      'no-bitwise': ['error'],
      'no-multi-assign': ['error'],
      'no-whitespace-before-property': ['error'],
      'no-trailing-spaces': ['error'],
      'one-var-declaration-per-line': ['error'],

      'padded-blocks': [
        'error',
        'never',
        {
          allowSingleLineBlocks: false,
        },
      ],

      'prefer-object-spread': ['error'],
      'quote-props': ['error', 'as-needed'],

      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      'semi-style': ['error', 'last'],
      'space-in-parens': ['error', 'never'],
      'space-unary-ops': ['error'],

      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            exceptions: ['-', '+', '*'],
            markers: ['!', '/', '=>'],
          },

          block: {
            exceptions: ['-', '+', '*'],
            markers: ['!', '*'],
            balanced: true,
          },
        },
      ],

      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],

      'template-tag-spacing': ['error', 'never'],
      'unicode-bom': ['error', 'never'],
      'arrow-body-style': ['error'],
      'arrow-parens': ['error', 'as-needed'],

      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'generator-star-spacing': ['error', 'both'],
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
      'rest-spread-spacing': ['error', 'never'],
      'symbol-description': ['error'],
      'template-curly-spacing': ['error'],
      'yield-star-spacing': ['error', 'both'],
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
