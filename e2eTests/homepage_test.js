Feature('Homepage');

Scenario('Homepage should load on "/"', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.seeElement('.logo');
});

Scenario('Error message should load when no postcode given', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.click('.searchBarSubmitButton');
  I.see('FILL IN YER POSTCODE!', '.alertText');
});

Scenario('Error message should flash when a postcode with no results is given', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.fillField('.searchBarTextInput', 'testingpostcode');
  I.click('.searchBarSubmitButton');
  I.see('NO RESTAURANTS FOR YOU!', '.alertText');
});