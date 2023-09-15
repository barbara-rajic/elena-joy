const dom = (() => {
  const nav = document.querySelector(".nav-links");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const burger = document.querySelector(".burger");
  const links = nav.querySelectorAll("a");

  // Helpers
  const hide = () => {
    dom.nav.style.display = "none"
    dom.main.classList.remove("hidden");
    dom.footer.classList.remove("hidden");
  }
  
  const show = () => {
    dom.nav.style.display = "flex"
    dom.main.classList.add("hidden");
    dom.footer.classList.add("hidden");
  }
  
  const toggleHere = () => {
    return (/toggle/i).test(dom.burger.className);;
  }

  return {
    nav,
    links,
    main,
    footer, 
    burger,
    hide,
    show,
    toggleHere,
  }
})();

const controller = ((DOM) => {

  const setEventListeners = () =>{
    DOM.burger.addEventListener("click", () => {
      DOM.burger.classList.toggle("toggle");
     
      DOM.toggleHere() ? DOM.show() : DOM.hide();
    });
    
    DOM.links.forEach((link) => {
      link.addEventListener("click", () => {
        if(DOM.toggleHere()){ 
          DOM.hide();
          DOM.burger.classList.toggle("toggle");
        }
      });
    });
  } 
  
  return {
    setEventListeners,
  }
})(dom);

controller.setEventListeners();

