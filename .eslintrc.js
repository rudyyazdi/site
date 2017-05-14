module.exports = {
  "extends": [
    "plugin:import/recommended",
    "airbnb"
  ],
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "react/jsx-filename-extension": "off",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "no-underscore-dangle": "off",
    "react/no-unused-prop-types": "error",
    "jsx-a11y/no-static-element-interactions": "off",
    "comma-dangle": ["error", "never"],
    "no-multi-spaces": ["error", { exceptions: { "VariableDeclarator": true } }],
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "settings": {
    "import/resolver": "webpack"
  }
};
