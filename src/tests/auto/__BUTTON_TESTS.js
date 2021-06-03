
let __BUTTON__TESTS = [
  {
    "classname": "et-button"
  },
  {
    "classname": "et-button-invalid"
  },
  {
    "classname": "et-button-valid"
  },
  {
    "classname": "et-button-warning"
  },
  {
    "classname": "et-button-disabled"
  },
  {
    "classname": "et-button-disabled-secondary"
  },
  {
    "classname":  "et-button-secondary"
  },
  {
    "classname":  "et-button-alert-secondary"
  },
  {
    "classname":  "et-button-warning-secondary"
  },
  {
    "classname":  "et-button-valid-secondary"
  }
]

let BUTTON_TEST_DATA = document.createElement("div");

/// RUNNING TESTS
for (let testOperation in __BUTTON__TESTS) {
  let _testable_button__ = document.createElement("button");
  _testable_button__.innerHTML = "Testing Buttons";
  _testable_button__.className = __BUTTON__TESTS[testOperation].classname;
  BUTTON_TEST_DATA.append(_testable_button__);
}

document.getElementById("root-tester-buttons").appendChild(BUTTON_TEST_DATA);