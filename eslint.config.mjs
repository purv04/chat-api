// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: { js },
    extends: ["eslint:recommended", "plugin:node/recommended"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
]);
