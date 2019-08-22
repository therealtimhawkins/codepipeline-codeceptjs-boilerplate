exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env.UrlToTest,
      host: 'selenium-ch',
      port: 4444,
      browser: 'chrome',
      smartWait: 5000,
      restart: false,
      waitForTimeout: 10000,
      timeouts: {
        script: 60000,
        'page load': 60000
      },
      coloredLogs: true,
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu']
        }
      }
    }
  },
  bootstrap: false,
  mocha: {},
  name: 'codeceptjs-docker'
}
