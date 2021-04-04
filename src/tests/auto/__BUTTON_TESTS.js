
__BUTTON__TESTS = [
  {
    "classname": "et-button"
  },
  {
    "classname": "et-primaryButton"
  },
  {
    "classname": "et-button-danger"
  },
  {
    "classname": "et-button-invalid"
  },
  {
    "classname": "et-button-success"
  },
  {
    "classname": "et-button-valid"
  },
  {
    "classname": "et-button-warning"
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