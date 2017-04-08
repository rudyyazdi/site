module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "comma-dangle": ["error", "always"],
    "react/jsx-filename-extension": "off",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "no-underscore-dangle": "off",
    "no-multi-spaces": ["error", { exceptions: { "VariableDeclarator": true } }],
  },
  "env": {
    "browser": true,
    "node": true
  }
};
