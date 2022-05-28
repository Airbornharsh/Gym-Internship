class NavigateButton{
    constructor() {
        this.open = document.getElementById("nav_middle_button_open");
        this.close = document.getElementById("nav_middle_button_close");
        this.liContainer = document.getElementById("navigating_items");
        this.preprocess();
        this.openProcess();
        this.closeProcess();
      }
    
      preprocess() {
          this.close.style.display = "none";
          if (window.innerWidth >= 500) {
              this.liContainer.classList.remove("fadein");
          }
      }
    
      openProcess() {
        this.open.addEventListener("click", () => {
          this.close.style.display = "block";
          this.liContainer.style.display = "block";
          this.open.style.display = "none";
          this.liContainer.classList.remove("fadein");
          this.liContainer.classList.add("fadeout");
        });
      }
    
      closeProcess() {
        this.close.addEventListener("click", () => {
          this.open.style.display = "block";
          this.close.style.display = "none";
          this.liContainer.classList.remove("fadeout");
          this.liContainer.classList.add("fadein");
          setTimeout(() => {
            this.liContainer.style.display = "none";
          }, 1000);
        });
      }
}

export default NavigateButton;