module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      impliedStric: true,
    },
  },
  plugins: ["prettier"],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
