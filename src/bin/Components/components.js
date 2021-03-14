
/**
      Author: The DesignSystems
      LICENSE: https://www.github.com/DesignSystemsOSS/eccentrictouch/blob/master/LICENSE
      (c) All Copyrights are reserved by The DesignSystems
  */

var components = document.createElement("div");
components.className = "page section components";

let heading = document.createElement("h2");
heading.className = "heading";
heading.innerHTML = "Components - Documentation";
heading.style.color = "black";
heading.style.fontFamily = "Poppins";

let animations_section = document.createElement("div");
animations_section.className = "section";
animations_section.id = "animations_section";

let button_section = document.createElement("div");
button_section.className = "section";
button_section.id = "button_section";

let effects_section = document.createElement("div");
effects_section.className = "section";
effects_section.id = "effects_section";

let contents_section = document.createElement("div");
contents_section.className = "section";
contents_section.id = "contents_section";

let fonts_section = document.createElement("div");
fonts_section.className = "section";
fonts_section.id = "fonts_section";

let footer_section = document.createElement("div");
footer_section.className = "section";
footer_section.id = "footer_section"

let header_section = document.createElement("div");
header_section.className = "section";
header_section.id = "header_section";

let images_section = document.createElement("div");
images_section.className = "section";
images_section.id = "images_section";



components.append(heading);

fetch('components.json')
.then((res) => res.json())
.then((res) => {
  for (let data in res) {
      
    
    if (res[data].ComponentType === "animation") {
      let component_title = document.createElement("h4");
      component_title.className = "title";
      component_title.style.color = "black";
      component_title.style.fontFamily = "poppins";
      component_title.style.fontWeight = "600";

      component_title.innerHTML = "Animations";
      animations_section.append(component_title);
      
      var list = document.createElement("ul");
      list.className = "doc_list";
      
      fetch('animation_data.json')
      .then((_components) => _components.json())
      .then((_components) => {
        for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          animations_section.append(component_title);
          list.append(new_list_item);
          animations_section.append(list);
        }
      });
      
    } 
    else if (res[data].ComponentType === "button") {
      let component_title = document.createElement("h4");
      component_title.className = "title";
      component_title.style.color = "black";
      component_title.style.fontFamily = "poppins";
      component_title.style.fontWeight = "600";
      component_title.innerHTML = "Buttons";
      button_section.append(component_title);
      
      components.append(component_title);

      var list = document.createElement("ul");
      list.className = "doc_list";

      fetch('button_data.json')
      .then((_components) => _components.json())
        .then((_components) => {
          for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          button_section.append(component_title);
          list.append(new_list_item);
          button_section.append(list);
        }
      });
        

      
    } 
    else if (res[data].ComponentType === "effect") {
      component_title.innerHTML = "Effects";
      effects_section.append(component_title);  

      components.append(component_title);

      var list = document.createElement("ul");
      list.className = "doc_list";

      fetch('effect_data.json')
      .then((_components) => _components.json())
        .then((_components) => {
          for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          components.append(component_title);
          list.append(new_list_item);
          components.append(list);
        }
      });

    
    } 
    else if (res[data].ComponentType === "fonts") {
      component_title.innerHTML = "Fonts";
      fonts_section.append(component_title);
      
      components.append(component_title);

      var list = document.createElement("ul");
      list.className = "doc_list";

      fetch('font_data.json')
      .then((_components) => _components.json())
        .then((_components) => {
          for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          components.append(component_title);
          list.append(new_list_item);
          components.append(list);
        }
      });

      
    } 
    else if (res[data].ComponentType === "footer") {
      component_title.innerHTML = "Footers";
      footer_section.append(component_title);

      components.append(component_title);

      var list = document.createElement("ul");
      list.className = "doc_list";

      fetch('footer_data.json')
      .then((_components) => _components.json())
        .then((_components) => {
          for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          components.append(component_title);
          list.append(new_list_item);
          components.append(list);
        }
      });
      
    } 
    else if (res[data].ComponentType === "header") {
      component_title.innerHTML = "Headers";
      header_section.append(component_title);

      components.append(component_title);

      var list = document.createElement("div");
      list.className = "doc_list";

      fetch('header_data.json')
      .then((_components) => _components.json())
        .then((_components) => {
          for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          components.append(component_title);
          list.append(new_list_item);
          components.append(list);
        }
      });
      
    } 
    else if (res[data].ComponentType === "image") {
      component_title.innerHTML = "Images"
      images_section.append(component_title);
      
      components.append(component_title);

      var list = document.createElement("ul");
      list.className = "doc_list";

      fetch('image_data.json')
      .then((_components) => _components.json())
        .then((_components) => {
          for (let component__ in _components) {
          
          var new_list_item = document.createElement("li");
          new_list_item.className = "list_item";
          new_list_item.style.fontFamily = "Poppins";
            new_list_item.innerHTML = `<u>${_components[component__].class_name}</u> <br/> ${_components[component__].method_description}`;

          components.append(component_title);
          list.append(new_list_item);
          components.append(list);
        }
      });
    }
  }
  });


  // components.append(animations_section);
  
  components.append(animations_section);
  components.append(button_section);
  components.append(contents_section);
  components.append(effects_section);
  components.append(fonts_section);
  components.append(footer_section);
  components.append(header_section);
  components.append(images_section);

  document.getElementById("root").appendChild(components);