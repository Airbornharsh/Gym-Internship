class Navigation {
  constructor() {
    this.navTrackNames = [
      document.getElementById("nav_home"),
      document.getElementById("nav_about"),
      document.getElementById("nav_services"),
      document.getElementById("nav_products"),
    ];
    this.navTracks = [
      document.querySelector("header"),
      document.getElementById("about_container"),
      document.getElementById("services_container"),
      document.getElementById("products_container"),
    ];
    this.navBtClick();
  }

  navBtClick() {
    let c = 0;
    this.navTrackNames.forEach((navTrackName, c) => {
      navTrackName.addEventListener("click", () => {
        this.scroll(c-1);
      });
    });
  }

  scroll(c) {
    let elHeight = 0;
    for (let i = 0; i <= c; i++) {
      const navTrack = this.navTracks[i];
      elHeight += navTrack.offsetHeight;
    }
    window.scrollTo(0, elHeight);
  }
}

export default Navigation;
