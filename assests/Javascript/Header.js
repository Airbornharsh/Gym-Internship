import HeaderList from "./HeaderList.js";

class Header {
  constructor() {
    this.headerBackgroundImage = document.getElementById(
      "header_background_image"
    );
    this.headerTextHeading = document.querySelector("#header_text_heading h2");
    this.headingTextDescription = document.querySelector(
      "#header_text_description p"
    );
    this.headerAnimation();
    this.start();
  }

  headerAnimation() {
    this.headerTextHeadingParent = document.getElementById(
      "header_text_heading"
    );
    this.headerTextDescriptionParent = document.getElementById(
      "header_text_description"
    );
    this.startAnimation();
  }

  startAnimation() {
    this.textAnimationInterval = setInterval(() => {
      this.headerTextDescriptionParent.classList.toggle("fade");
      this.headerTextHeadingParent.classList.toggle("textHeading");
      setTimeout(() => {
        this.headerTextHeadingParent.classList.toggle("textHeading");
        this.headerTextDescriptionParent.classList.toggle("fade");
      }, 1);
    }, 9000);
  }

  start() {
    this.HeaderListIndex = 1;
    this.ChangeInterval = setInterval(() => {
      this.change();
      this.HeaderListIndex++;
      if (this.HeaderListIndex === 4) {
        this.HeaderListIndex = 0;
      }
    }, 9000);
  }

  change() {
    this.headerBackgroundImage.src = HeaderList[this.HeaderListIndex].url;
    this.headerTextHeading.textContent =
      HeaderList[this.HeaderListIndex].heading;
    this.headingTextDescription.textContent =
      HeaderList[this.HeaderListIndex].description;
  }
}

export default Header;
