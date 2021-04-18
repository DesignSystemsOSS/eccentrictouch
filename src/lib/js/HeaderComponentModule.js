function headerAnimattionHandler() {
    var x = document.getElementById("et-header");
    if (x.className === "et-header") {
      x.className += " responsive";
    } else {
      x.className = "et-header";
    }
  }

  export default headerAnimattionHandler;