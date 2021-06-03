
let __TAGS_TESTS =  [
  {
    "classname": "et-paragraph"
  }
]

let TAGS_TEST_DATA = document.createElement("div");

/// RUNNING TESTS
for (let testOperation in __TAGS_TESTS) {
  let _testable_tags__ = document.createElement("p");
  _testable_tags__.innerHTML = "Testing Tags";
  _testable_tags__.className = __TAGS_TESTS[testOperation].classname;
  TAGS_TEST_DATA.append(_testable_tags__);
}

document.getElementById("root-tester-tags").appendChild(TAGS_TEST_DATA);