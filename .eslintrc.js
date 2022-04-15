module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': false,
  },
  'globals': {
    'JSX': true,
    'process': true,
  },
  'extends': [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'plugins': ['react', 'prettier'],
  'rules': {
    'arrow-body-style': [
      'error',
      'as-needed',
      { 'requireReturnForObjectLiteral': true },
    ],
    'no-shadow': 'off',
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'camelcase': ['off', { 'properties': 'always' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['warn'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': 'warn',
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      2,
      { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'paths': ['./src'],
      },
    },
  },
}
