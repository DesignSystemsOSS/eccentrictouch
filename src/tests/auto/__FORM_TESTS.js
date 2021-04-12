
__FORM__TESTS = [
  {
    "classname": "et-input-text"
  },
  {
    "classname": "et-input-password"
  },
  {
    "classname": "et-input-number"
  },
  {
    "classname": "et-input-email"
  },
  {
    "classname": "et-input-clean"
  },
  {
    "classname": "et-input-line"
  }
]

let FORM_TEST_DATA = document.createElement("div");

/// RUNNING TESTS
for (let testOperation in __FORM__TESTS) {
  let _testable_form__ = document.createElement("input");
  _testable_form__.innerHTML = "Testing Buttons";
  _testable_form__.className = __FORM__TESTS[testOperation].classname;
  FORM_TEST_DATA.append(_testable_form__);
}

document.getElementById("root-tester-forms").appendChild(FORM_TEST_DATA);