'use strict';

module.exports = {
    'extends': [
        'eslint-config-ebay/legacy',
        'eslint-config-ebay/rules/es6'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2017
    },
    'rules': {}
};
