console.log("global.spec fajl is executed");

if (typeof module !== 'undefined' && module.exports) {
  // Kod se izvršava u Node.js okruženju
  const XMLReporter = require('jasmine-reporters').JUnitXmlReporter;
  const ConsoleReporter = require('jasmine-spec-reporter').SpecReporter;
  const jasmineEnv = jasmine.getEnv();
  jasmineEnv.addReporter(new XMLReporter({
    savePath: "./API-Automation/results",
    filePrefix: "test_results",
    consolidate: true,
    consolidateAll: true
  }));
}

afterEach(() => {
  // Logika se izvršava bez obzira na okruženje
  console.info("\n-------------------------- END OF TEST --------------------------\n");
});
