module.exports = {
  env: {
    jest: true,
    es6: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    fetch: true,
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/prefer-stateless-function": 1,
    "react/jsx-filename-extension": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react/prop-types": [2, { ignore: ["navigator"] }],
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    "class-methods-use-this": 0,
    "react/no-unused-prop-types": [1, { skipShapeProps: true }]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".android.js", ".ios.js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
