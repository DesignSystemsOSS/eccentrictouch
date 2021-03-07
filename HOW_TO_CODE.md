# HOW TO CODE

**Summary**
- Syntax of writing CSS.
- File System explanation.

## Syntax of writing CSS

**Why Classes over IDs**

Classes can be reused. IDs should be unique on a page. This means that if you attach a style to an ID, you won't be able to reuse it within the same webpage.

**How to give class names**

EccentricTouch - CSS Codebase has a specific way of writing code. All the ways of writing methods are pre-defined and we need to follow that only, at the time of development. 

***All the CSS writing methods are given below:***
- Class names are having underscore (_) between words/keywords.
Like `<class_name>`. For eg. `header_bottom`

- Class names with variations will follow the above rule with a dash (-) between the class_name and variation. Like `<class_name>-<variation_name>`. For eg. `header_bottom-transparent`.

## File System Explanation

**Codebase @branch:development**

```
> (root)---|
           |
           |---(.github)...
           |
           |--(src)--|
           |          |
           |          |---(bin)----|
           |          |            |---(assets)...
           |          |            |___files.js
           |          |---(lib)----|
           |          |            |
           |          |            |---(animations)...
           |          |            |---(buttons)...
           |          |            |---(components)...
           |          |            |---(contents)...
           |          |            |---(effects)...
           |          |            |---(fonts)...
           |          |            |---(footers)...
           |          |            |---(headers)...
           |          |            |---(images)...
           |          |            |
           |          |            |___eccentric.css
           |          |            |___eccentric.css.map
           |          |            |___eccentric.scss
           |          |            |
           |          |            |___index.js
           |          |            |___moduleTests.htm
           |          |            |___variables.css
           |          |            |___variables.css.map
           |          |            |___variables.scss
           |          |
           |          |
           |          |---(tests)---|
           |          |             |___app.js
           |          |             |___index.htm
           |          ...
           |
           |___CODE_OF_CONDUCT.md
           |___CONTRIBUTING.md
           |___HOW_TO_CODE.md
           |___LICENSE
           |___README.md

```
