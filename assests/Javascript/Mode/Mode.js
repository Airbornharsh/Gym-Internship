import LightModeColor from "./LightModeColor.js";

class DarkMode {
  constructor() {
    this.mode = document.getElementById("mode");
    this.logo = document.getElementById("logo");
    this.darkMode = this.mode.querySelector("#dark_mode");
    this.lightMode = this.mode.querySelector("#light_mode");
    this.modeName = "light";
    this.root = document.querySelector(":root");
    this.getRoot = getComputedStyle(this.root);
    this.nav = document.querySelector("nav");
    this.check();
    this.clicked();
  }

  check() {
    if (JSON.parse(localStorage.getItem("isDarkMode")) == null) {
      console.log("hii");
    }
  }

  clicked() {
    this.mode.addEventListener("click", () => {
      if (this.modeName == "light") {
        this.darkModeClicked();
      } else if (this.modeName == "dark") {
        this.lightModeClicked();
      }
    });
  }

  darkModeClicked() {
    this.modeName = "dark";
    localStorage.setItem("isDarkMode", true);
    this.lightMode.style.opacity = 0;
    this.darkMode.style.opacity = 1;
    setTimeout(() => {
      // setTimeout(() => {
        this.mode.style.backgroundColor = "black";
      // }, 500);
      this.lightMode.style.display = "none";
      this.darkMode.style.display = "block";
    }, 250);
    this.darkModeColorChange(this.root);
    this.navCheck();
  }

  lightModeClicked() {
    this.modeName = "light";
    localStorage.setItem("isDarkMode", false);
    this.lightMode.style.opacity = 1;
    this.darkMode.style.opacity = 0;
    setTimeout(() => {
      // setTimeout(() => {
        this.mode.style.backgroundColor = "white";
      // }, 500);
      this.lightMode.style.display = "block";
      this.darkMode.style.display = "none";
    }, 250);
    LightModeColor();
    this.navCheck();
  }

  darkModeColorChange(root) {
    document.querySelector("body").style.color = "#d1cfcf";
    root.style.setProperty("--light-green", " #cd7f13");
    root.style.setProperty("--light-green-background", " #112835");
    root.style.setProperty("--darkest-blue", " #dcedff");
    root.style.setProperty("--darkest-blue-background", " #0e1819");
    root.style.setProperty("--mid-blue-green", " #44896a");
    root.style.setProperty("--white", " rgb(219, 219, 219)");
    root.style.setProperty("--black", " rgb(212, 212, 212)");
    root.style.setProperty("--logo", "#f29b05");
    root.style.setProperty("--nav-scroll-background", " rgba(26, 36, 47, 0.8)");
    root.style.setProperty("--nav-el-color", " var(--light-green)");
    root.style.setProperty(
      "--nav-el-background",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--nav-border", " var(--light-green)");
    root.style.setProperty("--nav-signup-color", " var(--darkest-blue)");
    root.style.setProperty(
      "--nav-signup-background",
      " var(--light-green-background)"
    );
    root.style.setProperty(
      "--form-background",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty(
      "--form-boxshadow",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--form-label", " var(--light-green)");
    root.style.setProperty("--form-input-background", " var(--white)");
    root.style.setProperty("--form-input-color", " var(--darkest-blue)");
    root.style.setProperty("--form-submit-background", "var(--white)");
    root.style.setProperty("--form-submit-color", " var(--darkest-blue)");
    root.style.setProperty("--form-submit-border", " var(--black)");
    root.style.setProperty("--header-background", " rgba(0,0,0,0.7)");
    root.style.setProperty("--header-name", " var(--white)");
    root.style.setProperty("--header-heading", " var(--white)");
    root.style.setProperty("--header-description", " var(--white)");
    root.style.setProperty(
      "--about-background",
      " var(--light-green-background)"
    );
    root.style.setProperty("--about-top-heading", " var(--black)");
    root.style.setProperty("--about-top-description", " var(--black)");
    root.style.setProperty("--about-bottom-svg", " ");
    root.style.setProperty("--about-bottom-heading", " var(--black)");
    root.style.setProperty("--about-bottom-description", " var(--black)");
    root.style.setProperty("--services-background", " rgba(0, 0, 0, 0.7)");
    root.style.setProperty("--services-top-heading", " var(--white)");
    root.style.setProperty("--services-top-description", " var(--white)");
    root.style.setProperty(
      "--services-bottom-el-background",
      " var(--light-green-background)"
    );
    root.style.setProperty(
      "--services-bottom-el-boxshadow",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--services-bottom-el-svg", " ");
    root.style.setProperty(
      "--services-bottom-el-heading",
      " var(--darkest-blue)"
    );
    root.style.setProperty(
      "--products-background",
      " var(--light-green-background)"
    );
    root.style.setProperty("--products-top-heading", " var(--black)");
    root.style.setProperty("--products-top-description", " var(--black)");
    root.style.setProperty(
      "--products-bottom-el-background",
      " var(--mid-blue-green)"
    );
    root.style.setProperty(
      "--products-bottom-el-boxshadow",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--products-bottom-el-name", " var(--white)");
    root.style.setProperty("--products-bottom-el-price", " var(--white)");
    root.style.setProperty(
      "--products-bottom-el-button-background",
      " var(--light-green-background)"
    );
    root.style.setProperty(
      "--products-bottom-el-button-color",
      " var(--darkest-blue)"
    );
    root.style.setProperty(
      "--cart-background",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--cart-color", " var(--light-green)");
    root.style.setProperty(
      "--shopping-background",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--shopping-heading", " var(--white)");
    root.style.setProperty("--shopping-remove-background", " var(--white)");
    root.style.setProperty(
      "--shopping-remove-color",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--shopping-el-name", " var(--light-green)");
    root.style.setProperty("--shopping-el-price", " var(--light-green)");
    root.style.setProperty("--shopping-total", " var(--light-green)");
    root.style.setProperty("--shopping-total-price", " var(--light-green)");
    root.style.setProperty("--shopping-buy-background", " var(--white)");
    root.style.setProperty(
      "--shopping-buy-color",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty(
      "--footer-background",
      " var(--darkest-blue-background)"
    );
    root.style.setProperty("--footer-quotes-heading", " var(--light-green)");
    root.style.setProperty(
      "--footer-quotes-description",
      " var(--light-green)"
    );
    root.style.setProperty("--footer-link-heading", " var(--light-green)");
    root.style.setProperty("--footer-link", " var(--light-green)");
  }

  navCheck() {
    window.onscroll = (e) => {
      if (window.scrollY >= 700) {
        if (JSON.parse(localStorage.getItem("isDarkMode")) == false) {
          this.nav.style.backgroundColor = "rgba(26, 36, 47, 0.8)";
        } else {
          this.nav.style.backgroundColor = "rgba(13, 18, 23,0.8)";
        }
      } else {
        this.nav.style.backgroundColor = "transparent";
      }
    };
  }
}

export default DarkMode;
