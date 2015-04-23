// An example configuration file.
exports.config = {
  directConnect: true,
  chromeOnly: true,
  chromeDriver: 'c:/Users/admin/AppData/Roaming/npm/node_modules/protractor/selenium/chromeDriver.exe',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'

  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //specs: ['spec/e2e/**/*.js'],
  specs: ['**/*.js'],

  //smn: working on local machine
  baseUrl: 'http://localhost:8080/',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
