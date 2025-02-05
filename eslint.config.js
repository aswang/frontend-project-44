import globals from "globals";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import"; // Добавляем импорт плагина

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin, // Регистрируем плагин "import"
    },
    rules: {
      "eol-last": ["error", "always"],
      "import/newline-after-import": ["error", { "count": 1 }],
    },
  },
  js.configs.recommended,
];
