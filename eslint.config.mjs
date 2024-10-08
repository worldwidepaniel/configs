import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    rules: {
      "block-scoped-var": true,
      "camelCase": true,
      "consistent-return": true,
      "curly": "multi",
      "default-case": true,
      "default-case-last:": true,
      "eqeqeq": true,
    }
  },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintConfigPrettier,
];
