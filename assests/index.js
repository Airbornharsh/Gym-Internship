import Header from "./Javascript/Header.js";
import Navigate from "./Javascript/Navigate.js";
import SigningUp from "./Javascript/SigningUp.js";
import Shopping from "./Javascript/Shopping/Shopping.js";
import ProductRender from "./Javascript/Products/ProductRender.js";

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
    new Navigate();
    new Header();
    new SigningUp(working.isLogined);
    new ProductRender();
    new Shopping();
  }
}

App.init();
