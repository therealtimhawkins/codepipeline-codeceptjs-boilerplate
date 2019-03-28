Feature('Basic test');

Scenario('navigate to homepage', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.saveScreenshot('frontpageScreenshot.png');
});
