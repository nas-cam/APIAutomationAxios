import Jasmine from 'jasmine';
const jasmine = new Jasmine();


jasmine.loadConfig({
  spec_files: [
    "./API-Automation/test-suites/regression/pet/*.js",
    "./API-Automation/test-suites/regression/store/*.js",
    "./API-Automation/test-suites/regression/user/*.js",
    "./API-Automation/test-suites/smokeTest/smoke-test/*.js",
  ],
  helpers: [
    "./API-Automation/test-suites/global.spec.js",
    "helpers/**/*.?(m)js",
    "node_modules/jasmine-spec-reporter/dist/jasmine-spec-reporter.css",
    "node_modules/jasmine-spec-reporter/dist/jasmine-spec-reporter.js"
  ]
});


let argument = process.argv[2];


switch (argument) {
  case 'user':
    jasmine.specFiles = jasmine.specFiles.filter(file =>
      file.includes('/regression/user/')
    );
    break;
  case 'store':
    jasmine.specFiles = jasmine.specFiles.filter(file =>
      file.includes('/regression/store/')
    );
    break;
  case 'pet':
    jasmine.specFiles = jasmine.specFiles.filter(file =>
      file.includes('/regression/pet/')
    );
    break;
  case 'smoke':
    jasmine.specFiles = jasmine.specFiles.filter(file =>
      file.includes('/smokeTest/smoke-test/')
    );
    break;
  default:
    break;
}

jasmine.execute();
