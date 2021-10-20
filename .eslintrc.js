module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': 'off',
    'semi': ['off', 'always'],
    'no-multi-assign': 'error',
    'curly': ['error', 'all'],
    'quotes': ['off', 'single'],
    'no-mixed-spaces-and-tabs': 'off',
    'no-duplicate-imports': 'error',
    'keyword-spacing': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-empty': 'off',
    'no-unused-vars': 1,
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
