if (typeof module !== 'undefined' && module.exports) {
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
  console.info("\n-------------------------- END OF TEST --------------------------\n");
});
