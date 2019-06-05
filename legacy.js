'use strict';

module.exports = {
    'extends': [
        'eslint-config-ebay/rules/bp',
        'eslint-config-ebay/rules/errors',
        'eslint-config-ebay/rules/node',
        'eslint-config-ebay/rules/style',
        'eslint-config-ebay/rules/variables'
    ].map(require.resolve),
    'rules': {},
    'env': {
        'browser': true,
        'node': true,
        'amd': false,
        'mocha': true,
        'jasmine': false,
        'jquery': true
    }
};
