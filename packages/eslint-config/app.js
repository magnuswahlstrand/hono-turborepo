export default [
    {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        parserOptions: {
            ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
            sourceType: 'module', // Allows for the use of imports
        },
        extends: [
            // 'eslint:recommended',
            // 'plugin:@typescript-eslint/recommended',
            // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
            // 'plugin:@typescript-eslint/strict',
        ],
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];