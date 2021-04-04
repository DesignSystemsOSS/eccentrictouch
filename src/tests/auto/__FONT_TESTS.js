
__FONTS__TESTS = [
  {
    "classname": "et-h1"
  },
  {
    "classname": "et-h2"
  },
  {
    "classname": "et-h3"
  },
  {
    "classname": "et-h4"
  },
  {
    "classname": "et-h5"
  },
  {
    "classname": "et-h6"
  }
]

let FONTS_TEST_DATA = document.createElement("div");

/// RUNNING TESTS
for (let testOperation in __FONTS__TESTS) {
  let _testable_font__ = document.createElement("p");
  _testable_font__.innerHTML = "Testing Buttons";
  _testable_font__.className = __FONTS__TESTS[testOperation].classname;
  FONTS_TEST_DATA.append(_testable_font__);
}

document.getElementById("root-tester-fonts").appendChild(FONTS_TEST_DATA);