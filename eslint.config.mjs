import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,

  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn"
    }
}
];