Feature('Homepage');

Scenario('Homepage should load on "/"', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.seeElement('.logo');
});

Scenario('Error message should load when no postcode given', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/');
  I.seeElement('.searchBarSubmitButton');
  I.click('.searchBarSubmitButton');
  I.seeElement('.alertBox');
  I.see('FILL IN YER POSTCODE!', '.alertText');
});
