module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "comma-dangle": "off",
    "react/jsx-filename-extension": "off",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"]
  },
  "env": {
    "browser": true,
    "node": true
  }
};
