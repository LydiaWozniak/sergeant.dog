/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],

  parserOptions: {
    project: ["./tsconfig.test.json"],
    tsconfigRootDir: __dirname,
  },
};
