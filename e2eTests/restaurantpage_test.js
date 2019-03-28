Feature('Homepage');

Scenario('Should be routed to home page if there is not restaurant data', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/restaurants');
  I.waitForElement('.logo', 10);
  I.dontSeeInCurrentUrl("/restaurants");
});
