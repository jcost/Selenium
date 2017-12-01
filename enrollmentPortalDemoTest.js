var webdriver = require('selenium-webdriver'),driver;

driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'chrome'
  }).build();
 
driver.get("https://cert-enroll.caresource.com/");
 
driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});
 
driver.quit();