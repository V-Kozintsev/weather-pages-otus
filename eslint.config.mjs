import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        module: "readonly", // Allow module globally
        require: "readonly", // Allow require globally
        process: "readonly", // Allow process globally
        __dirname: "readonly", // Allow __dirname globally
      },
    },
  },

  pluginJs.configs.recommended,

  // Overrides for specific files
  {
    files: ["babel.config.js", "webpack.config.js"],
    rules: {
      "no-undef": "off", // Disable the no-undef rule for these files

      "import/no-extraneous-dependencies": "off", // Disable any dependency rules
    },
  },
];
