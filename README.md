> [!WARNING]  
> This eslint-config is no longer recommended.
> The repo is left open for reference.

# eslint-config-ebay

This package provides eBay's [.eslintrc](./.eslintrc) as a shared npm module. This is similar to that of airbnb's extensible [shared config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). 

## Usage

There are two ESLint configurations available.

### eslint-config-ebay

The default export contains all of our ESLint rules, including EcmaScript 6+.

1. `npm install --save-dev eslint-config-ebay eslint`
2. add `"extends": "ebay"` to your .eslintrc

### eslint-config-ebay/legacy
Lints ES5 and below.

1. `npm install --save-dev eslint-config-ebay eslint`
2. add `"extends": "ebay/legacy"` to your .eslintrc

## IDE Integration
Install the ESLint validator plugin in your favorite text editor. Next step is to point the eslint [config](http://eslint.org/docs/user-guide/configuring) to the rules in [this](https://github.com/ebay/eslint-config-ebay) repo. To do that, clone the repo

`git clone https://github.com/ebay/eslint-config-ebay.git`

and point the config to 

1. For ES5 and below `<path to repo>/eslint-config-ebay/legacy.js`
2. ES6 included `<path to repo>/eslint-config-ebay/index.js`

For example, in Sublime Text editor add the below in `SublimeLinter.sublime-settings` file
```json
"linters": {
        "eslint": {
            "@disable": false,
            "args": [
                "-c",
                "/Users/someUser/eslint-config-ebay/index.js"
            ],
            "excludes": []
        }
  }
```
