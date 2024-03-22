const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn", "unused-imports", "simple-import-sort"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "ft-flow/space-after-type-colon": 0,
    "ft-flow/no-types-missing-file-annotation": 0,
    "ft-flow/generic-spacing": 0,
    "react/no-unescaped-entities": "off",
    "curly": "error",
    "eqeqeq": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { "fixStyle": "inline-type-imports" }
    ],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/sort-type-constituents": "error"
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
}
