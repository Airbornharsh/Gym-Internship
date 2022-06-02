class Form {
  constructor(isLogined) {
    this.isLogined = isLogined;
    this.elements();
    this.logDisplay();
    this.quittingForm();
  }

  elements() {
    this.signedUp = document.querySelector("#signed_up h2");
    this.signUpBt = document.getElementById("sign_up");
    this.signInBt = document.getElementById("sign_in");
    this.quitForm1Bt = document.getElementById("quit_form_1");
    this.quitForm2Bt = document.getElementById("quit_form_2");
    this.signUpAlternateBt = document.getElementById("sign_up_alternate");
    this.signInAlternateBt = document.getElementById("sign_in_alternate");
    this.logOut = document.getElementById("log_out");
    this.signUpFormContainer = document.getElementById("sign_up_template");
    this.signInFormContainer = document.getElementById("sign_in_template");
    this.form = this.signUpFormContainer.querySelector("form");
    this.nav = document.querySelector("nav");
    this.header = document.querySelector("header");
    this.main = document.querySelector("main");
    this.footer = document.querySelector("footer");
    this.signUpSubmit = document.getElementById("sign_up_submit");
    this.signInSubmit = document.getElementById("sign_in_submit");
    this.open = document.getElementById("nav_middle_button_open");
    this.close = document.getElementById("nav_middle_button_close");
    this.liContainer = document.getElementById("navigating_items");
    this.customAlert = document.getElementById("custom_alert");
  }

  checkSignUpClicked() {
    this.signUpFormContainer.style.display = "none";
    this.signUpBt.addEventListener("click", () => {
      this.signUpClicked();
    });
    this.signInAlternateBt.addEventListener("click", () => {
      this.signInClicked();
    });
  }

  signUpClicked() {
    this.signUpFormContainer.style.display = "flex";
    this.signInFormContainer.style.display = "none";
    this.displayForm();
  }

  checkSignInClicked() {
    this.signInFormContainer.style.display = "none";
    this.signInBt.addEventListener("click", () => {
      this.signInClicked();
    });
    this.signUpAlternateBt.addEventListener("click", () => {
      this.signUpClicked();
    });
  }

  signInClicked() {
    this.signUpFormContainer.style.display = "none";
    this.signInFormContainer.style.display = "flex";
    this.displayForm();
  }

  logDisplay() {
    if (this.isLogined) {
      console.log("log");
      document.getElementById("sign_up_template").style.display = "none";
      document.getElementById("sign_in_template").style.display = "none";
      this.signUpBt.style.display = "none";
      this.signInBt.style.display = "none";
      this.signedUp.textContent =
        "Hii " + JSON.parse(localStorage.getItem("currentSign")).name;
      this.signedUp.style.display = "block";
      this.logOut.style.display = "block";
    } else {
      console.log("not log");
      this.signedUp.style.display = "none";
      this.logOut.style.display = "none";
    }
  }

  displayForm() {
    this.nav.style.backgroundColor = "rgba(26, 36, 47, 0.8)";
    this.open.style.display = "none";
    this.close.style.display = "none";
    this.liContainer.style.display = "none";
    this.header.style.display = "none";
    this.main.style.display = "none";
    this.footer.style.display = "none";
  }

  customAlertFn(message) {
    this.customAlert.textContent = message;
    this.customAlert.style.display = "block";
    setTimeout(() => {
      this.customAlert.style.display = "none";
    }, 700);
  }

  quittingForm() {
    this.quitForm1Bt.addEventListener("click", () => {
      this.Reset();
    });
    this.quitForm2Bt.addEventListener("click", () => {
      this.Reset();
    });
  }

  Reset(Data) {
    if (Data == "submitted") {
      this.isLogined = true;
      this.signInBt.style.display = "none";
      this.signUpBt.style.display = "none";
      console.log(this.isLogined);
      this.logOut.style.display = "block";
    }
    this.logDisplay();
    this.signUpFormContainer.style.display = "none";
    this.signInFormContainer.style.display = "none";
    if (window.innerWidth < 800) {
      this.open.style.display = "block";
      this.close.style.display = "none";
    } else {
      this.open.style.display = "none";
      this.close.style.display = "none";
    }
    this.liContainer.style.display = "flex";
    this.header.style.display = "flex";
    this.main.style.display = "block";
    this.footer.style.display = "flex";
  }
}

export default Form;
