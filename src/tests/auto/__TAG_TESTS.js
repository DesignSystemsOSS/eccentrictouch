
__TAGS_TESTS =  [

{
    "classname": "et-paragraph"
  }
  ,
  {
    "classname": "et-bold"
  }
  ,
  {
    "classname": "et-italics"
  }
  ,
  {
    "classname": "et-underlined"
  }
  ,
  {
    "classname": "et-quote"
  }

]

let TAGS_TEST_DATA = document.createElement("div");

/// RUNNING TESTS
for (let testOperation in __TAGS__TESTS) {
  let _testable_tags__ = document.createElement("p");
  _testable_tags__.innerHTML = "Testing Buttons";
  _testable_tags__.className = __TAGS__TESTS[testOperation].classname;
  TAGS_TEST_DATA.append(_testable_tags__);
}

document.getElementById("root-tester-tags").appendChild(TAGS_TEST_DATA);