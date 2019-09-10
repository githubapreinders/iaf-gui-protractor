const seleniumServer = require('selenium-server-standalone-jar');
const JasmineConsoleReporter = require('jasmine-console-reporter');

exports.config = {
    framework: 'jasmine2',
    seleniumServerJar: seleniumServer.path,
    baseUrl: 'https://ibis4example.ibissource.org/iaf/gui',

    capabilities: {
        browserName: 'chrome',
    },
    specs: ['*.spec.js'],

    allScriptsTimeout: 120000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000000
    },

    //SELENIUM_PROMISE_MANAGER: false,
    
    onPrepare: function(){
        jasmine.getEnv().addReporter(new JasmineConsoleReporter({
            emoji: true 
        }));
        jasmine.getEnv().defaultTimeoutInterval = 120000;

        browser.get('#/status');
    }
}