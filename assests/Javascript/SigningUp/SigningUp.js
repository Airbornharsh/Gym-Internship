class SigningUp {
  constructor(isLogined) {
    this.elements();
    this.isLogined = isLogined;
    this.logDisplay();
    this.CheckClicked();
    this.StartSigningUp();
  }

  elements() {
    this.signedUp = document.querySelector("#signed_up h2");
    this.signUpBt = document.getElementById("sign_up");
    this.formContainer = document.getElementById("sign_up_template");
    this.form = this.formContainer.querySelector("form");
    this.nav = document.querySelector("nav");
    this.header = document.querySelector("header");
    this.main = document.querySelector("main");
    this.footer = document.querySelector("footer");
    this.name = document.getElementById("sign_up_name");
    this.email = document.getElementById("sign_up_email");
    this.submit = document.getElementById("sign_up_submit");
    this.open = document.getElementById("nav_middle_button_open");
    this.close = document.getElementById("nav_middle_button_close");
    this.liContainer = document.getElementById("navigating_items");
    this.customAlert = document.getElementById("custom_alert");
  }

  logDisplay() {
    if (this.isLogined) {
      document.getElementById("sign_up_template").style.display = "none";
      this.signUpBt.style.display = "none";
      this.signedUp.textContent =
        "Hii " + JSON.parse(localStorage.getItem("airo")).name;
    } else {
      this.signedUp.style.display = "none";
    }
  }

  CheckClicked() {
    this.formContainer.style.display = "none";
    this.signUpBt.addEventListener("click", () => {
      this.formContainer.style.display = "flex";
      this.nav.style.backgroundColor = "rgba(26, 36, 47, 0.8)";
      this.open.style.display = "none";
      this.close.style.display = "none";
      this.liContainer.style.display = "none";
      this.header.style.display = "none";
      this.main.style.display = "none";
      this.footer.style.display = "none";
    });
  }

  StartSigningUp() {
    let password1 = document.getElementById("sign_up_password_1");
    let password2 = document.getElementById("sign_up_password_2");
    this.submit.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        this.name.value &&
        this.email.value &&
        password1.value == password2.value
      ) {
        this.Submitting(password1);
        this.customAlertFn("SUBMITTED");
        window.localStorage.setItem("isLogined", true);
        this.Reset();
        // this.fetching(this.form);
      } else {
        this.customAlertFn("Fill it Properly");
      }
    });
  }

  Submitting(password) {
    const data = {
      name: this.name.value,
      email: this.email.value,
      password: password,
    };
    window.localStorage.setItem("airo", JSON.stringify(data));
  }

  customAlertFn(message) {
    this.customAlert.textContent = message;
    console.log("alerted");
    this.customAlert.style.display = "block";
    setTimeout(() => {
      this.customAlert.style.display = "none";
    }, 700);
  }

  // fetching(myForm) {
  //   let formData = new FormData(myForm);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => console.log("Form successfully submitted"))
  //     .catch((error) => alert(error));
  // }

  Reset() {
    document.location.reload();
  }
}

export default SigningUp;
