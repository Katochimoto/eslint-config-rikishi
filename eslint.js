module.exports = {
  'env': {
    'browser': true,
    'amd': true,
    'jasmine': true
  },

  'extends': 'eslint:recommended',

  'rules': {
    'array-bracket-spacing': [
      'warn',
      'never'
    ],

    'camelcase': [
      'error',
      {
        'properties': 'always'
      }
    ],

    'comma-dangle': [
      'error',
      'never'
    ],

    'comma-style': [
      'error',
      'last'
    ],

    'curly': [
      'error',
      'all'
    ],

    'dot-notation': 'error',

    'indent': [
      'error',
      4,
      {
        'ArrayExpression': 'first',
        'SwitchCase': 1,
        'MemberExpression': 'off',
        'ObjectExpression': 'first',
        'VariableDeclarator': 1
      }
    ],

    'key-spacing': [
      'error',
      {
        'mode': 'minimum'
      }
    ],

    'keyword-spacing': [
      'error',
      {}
    ],

    'linebreak-style': [
      'error',
      'unix'
    ],

    'max-len': [
      'warn',
      {
        'ignoreComments': true,
        'ignoreUrls': true
      }
    ],

    'new-cap': [
      'warn',
      {
        'capIsNewExceptions': [
          'Deferred', 'Event'
        ]
      }
    ],

    'no-empty': 'error',

    'no-implicit-coercion': [
      'error',
      {
        'boolean': false,
        'number': false,
        'string': false
      }
    ],

    'no-mixed-spaces-and-tabs': 'error',

    'no-multi-str': 'error',

    'no-trailing-spaces': 'error',

    'no-with': 'error',

    'object-curly-newline': [
      'error',
      {
        'minProperties': 1
      }
    ],

    'one-var': [
      'error',
      'always'
    ],

    'operator-linebreak': [
      'error',
      'after'
    ],

    'padded-blocks': [
      'warn',
      'never'
    ],

    'quote-props': [
      'error',
      'as-needed',
      {
        'keywords': true
      }
    ],

    'semi': [
      'error',
      'always'
    ],

    'space-before-blocks': [
      'error',
      'always'
    ],

    'space-before-function-paren': [
      'error',
      'never'
    ],

    'space-in-parens': [
      'error',
      'never'
    ],

    'space-unary-ops': [
      'error',
      {
        'words': false,
        'nonwords': false
      }
    ],

    'spaced-comment': [
      'warn',
      'always'
    ],

    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],

    'yoda': [
      'error',
      'never'
    ],

    'wrap-iife': 'error'
  }
};
