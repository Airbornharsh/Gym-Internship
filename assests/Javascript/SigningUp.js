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
    this.nav = document.querySelector("nav");
    this.header = document.querySelector("header");
    this.main = document.querySelector("main");
    this.footer = document.querySelector("footer");
    this.name = document.getElementById("sign_up_name");
    this.email = document.getElementById("sign_up_email");
    this.submit = document.getElementById("sign_up_submit");
  }

  logDisplay() {
    if (this.isLogined) {
      this.signUpBt.style.display = "none";
      this.signedUp.textContent ="Hii " +
        JSON.parse(localStorage.getItem("airo")).name;
    } else {
        this.signedUp.style.display = "none";
    }
  }

  CheckClicked() {
    this.formContainer.style.display = "none";
    this.signUpBt.addEventListener("click", () => {
      this.formContainer.style.display = "block";
      this.nav.style.backgroundColor = "rgba(0,0,0,0.9)";
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
        alert("Submitted");
        window.localStorage.setItem("isLogined", true);
        this.Reset();
      } else {
        alert("Fill it Properly");
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

  Reset() {
    document.location.reload();
  }
}

export default SigningUp;
