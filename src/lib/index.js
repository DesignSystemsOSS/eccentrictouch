/**
 * This is a list directory file, the Javascript code will be used to get CSS files by other JS Testing Modules.
 * 
 * All the files are mentioned in this code.
 * 
 * ? Do not change any file name
 * 
 * ! Getters are added into this file.
 */


class ListCSSStyleSheets {
  constructor() {
    stylesheets_modules = {
      "buttons": ["buttons.css", "buttons.css.map", "buttons.scss"],
      "components": ["components.css", "components.css.map", "components.scss"],
      "contents": ["contents.css", "contents.css.map", "contents.scss"],
      "effects": ["effects.css", "effects.css.map", "effects.scss"],
      "footers": ["footers.css", "footers.css.map", "footers.scss"],
      "headers": ["headers.css", "headers.css.map", "headers.scss"],
      "images": ["images.css", "images.css.map", "images.scss"],
    };

    stylesheets_variables = {
      "variables": ["variables.css", "variables.css.map", "variables.scss"];
    };

    stylesheet_main = ["eccentric.css", "eccentric.css.map", "eccentric.scss"];
  };

  /// getter: To get modules from the codebase
  getStyleSheetModules = (filetype="all") => {
    if (filetype === "all") {
      return stylesheets_modules;
    } else if (filetype === "buttons") {
      return stylesheets_modules.keys("buttons");
    } else if (filetype === "components") {
      return stylesheets_modules.keys("components");
    } else if (filetype === "contents") {
      return stylesheets_modules.keys("contents");
    } else if (filetype === "effects") {
      return stylesheets_modules.keys("effects");
    } else if (filetype === "footers") {
      return stylesheets_modules.keys("footers");
    } else if (filetype === "headers") {
      return stylesheets_modules.keys("headers");
    } else if (filetype === "images") {
      return stylesheets_modules.keys("images");
    } else {
      console.warn("Invalid FileType has been mentioned while testing file status...");
    }
  };

  /// getter: To get variable lists from the codebase
  getStyleSheetVariables = (filetype="all") => {
    if (filetype === "all") {
      return stylesheets_variables;
    } else if (filetype === "variables" || filetype === "general") {
      return stylesheets_variables.keys("variables");
    };
  };

  /// getter: To get the main CSS module
  getStyleSheetVariables = () => {
    return stylesheet_main;
  };
};