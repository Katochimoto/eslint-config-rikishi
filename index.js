module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jasmine": true,
    "node": true
  },

  "extends": [
    "eslint:recommended"
  ],

  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "experimentalObjectRestSpread": true,
    "jsx": true,
    "spread": true,
    "templateStrings": true
  },

  "globals": {
    "afterEach": false,
    "beforeEach": false,
    "describe": false,
    "expect": false,
    "exports": false,
    "it": false,
    "module": false,
    "modules": false,
    "React": false,
    "ReactDOM": false,
    "require": false,
    "sinon": false
  },

  "rules": {
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "array-bracket-spacing": [
      2,
      "always"
    ],
    "object-curly-spacing": [
      2,
      "always"
    ],
    "max-len": [
      2,
      200,
      4
    ],
    "vars-on-top": [
      0
    ],
    "no-inner-declarations": [
      0
    ],
    "key-spacing": [
      0
    ],
    "valid-jsdoc": [
      2,
      {
        "prefer": {
          "return": "returns"
        },
        "requireReturn": false,
        "requireParamDescription": false,
        "requireReturnDescription": false
      }
    ],
    "react/jsx-uses-vars": [2],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "ignore"
    }]
  }
};
