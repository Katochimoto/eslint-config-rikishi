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

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
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
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", 200, 4],
    "vars-on-top": "off",
    "no-inner-declarations": "off",
    "key-spacing": "off",
    "valid-jsdoc": ["error", {
      "prefer": {
        "return": "returns"
      },
      "requireReturn": false,
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],
    "react/jsx-uses-vars": ["error"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "ignore"
    }]
  }
};
