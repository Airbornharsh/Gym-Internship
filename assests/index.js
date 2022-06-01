import Navigate from "./Javascript/Navigation/Navigate.js";
import SigningIn from "./Javascript/Signing/SigningIn.js";
import Header from "./Javascript/Header/Header.js";
import Mode from "./Javascript/Mode/Mode.js";
import Shopping from "./Javascript/Shopping/Shopping.js";
import ProductRender from "./Javascript/Products/ProductRender.js";
import Contact from "./Javascript/Contact/Contact.js";



class Working {
  constructor() {
    this.isLogined;
    this.start();
  }

  start() {
    if (localStorage.length == 0) {
      this.isLogined = false;
    } else if (JSON.parse(localStorage.getItem("isLogined"))) {
      this.isLogined = true;
    }
  }
}

class App {
  static init() {
    const working = new Working();
    new SigningIn(working.isLogined);
    new Navigate();
    new Header();
    new ProductRender();
    new Shopping();
    new Mode();
    new Contact();
  }
}

App.init();
