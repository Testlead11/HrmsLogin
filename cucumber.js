


module.exports = {
  default: {
  paths: ["tests/features/**/*.feature"],
  requireModule: ["tsx/cjs"],
  require: ["tests/StepDefinations/**/*.ts"],
   format: ["progress", "html:reports/playwright_cucumber/reports.html"]
 }
}; 
