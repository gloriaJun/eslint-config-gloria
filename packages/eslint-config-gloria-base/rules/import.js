module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["import"],
  extends: [],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", "tsx"],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
      },
    ],
    "import/exports-last": "error",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        vue: "never",
      },
    ],
    "import/first": "error",
    "import/group-exports": "off",
    "import/newline-after-import": "error",
    "import/no-extraneous-dependencies": ["error"],
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/prefer-default-export": "off",
    "import/no-absolute-path": "error",
    "import/no-internal-modules": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-named-default": "error",
    "import/no-named-export": "off",
    "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],
    "import/no-webpack-loader-syntax": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        // devDependencies: ["*.js", "src/**/*.test.js"],
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
  },
};
