'use strict';

const assert = require('assert'),
    fs = require('fs'),
    path = require('path');

function isES6Rule(rule) {
    return /\/es6\.js$/.test(rule);
}

const rulesAvailable = fs.readdirSync(path.join(__dirname, '../rules'))
                        .map(name => path.join(process.cwd(), 'rules', name)),
    legacyRulesAvailable = rulesAvailable.filter(rule => !isES6Rule(rule)),
    legacyRulesIncluded = require('../legacy').extends,
    legacyRulesFinalSet = new Set(legacyRulesIncluded.concat(legacyRulesAvailable)),
    es6RulesIncluded = require('..').extends;

// Testing legacy rules
assert(legacyRulesFinalSet.size === legacyRulesIncluded.length &&
        legacyRulesFinalSet.size === legacyRulesAvailable.length,
        `
        The available legacy rules
        ${legacyRulesAvailable.join('\n\t')}

        should match exactly to included legacy rules
        ${legacyRulesIncluded.join('\n\t')}
        `);

// Testing ES6 rules
assert(es6RulesIncluded.findIndex(isES6Rule) !== -1,
        `The ES6 rule "${rulesAvailable.filter(isES6Rule)}" should be inlcuded`);

