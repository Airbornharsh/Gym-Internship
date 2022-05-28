class NavScroll {
  constructor() {
    this.nav = document.querySelector("nav");
    this.scrollCheck();
  }

  scrollCheck() {
      window.onscroll = (e) => {
      if (window.scrollY >= 700) {
          this.nav.style.backgroundColor = "rgba(26, 36, 47, 0.8)";
      } else {
          this.nav.style.backgroundColor = "transparent";
      }
    };
  }
}

export default NavScroll;
