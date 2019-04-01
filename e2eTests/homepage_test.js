Feature('Example Homepage Test');

Scenario('Homepage should load on "/"', I => {
  I.amOnPage(process.env.UrlToTest);
});
