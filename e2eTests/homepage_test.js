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
  I.waitForElement('//*[@id="root"]/div/div[2]/div[2]/div/div/div', 10);
});

Scenario('Should route to /restaurants if results are found...', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.fillField('.searchBarTextInput', 'E147DX');
  I.click('.searchBarSubmitButton');
  I.waitForElement('.restaurantTile', 10);
  I.seeInCurrentUrl("/restaurants");
});