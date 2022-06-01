import SigningUp from "./SigningUp.js";

class SigningIn extends SigningUp {
  constructor(isLogined) {
    super(isLogined);
    this.signFound = false;
    this.signGranted = false;
    this.checkSignInClicked();
    this.startSigningIn();
  }

  checkSignInClicked() {
    this.signInFormContainer.style.display = "none";
    this.signInBt.addEventListener("click", () => {
      this.signInFormContainer.style.display = "flex";
      this.displayForm();
    });
  }

  startSigningIn() {
    this.signInSubmit.addEventListener("click", (event) => {
        event.preventDefault();
      const email = document.getElementById("sign_in_email");
      const password = document.getElementById("sign_in_password");
      if (email.value && password) {
        this.signingIn(email.value, password.value);
      } else {
        this.customAlertFn("Fill it Properly");
      }
    });
  }

  signingIn(email, password) {
    let name, currentData;
    this.signingData = JSON.parse(localStorage.getItem("airo"));

    if (this.signingData) {
      this.signingData.forEach((Data) => {
        if (Data.email == email) {
          name = Data.name;
          this.signFound = true;
          if (Data.password == password) {
            this.signGranted = true;
            currentData = {
              name: name,
              email: email,
              password: password,
            };
          }
        }
      });
    }

    if (this.signFound == false) {
      this.customAlertFn("Email Not Found");
    } else {
      if (this.signGranted == false) {
        this.customAlertFn("Password Incorrect");
      } else {
        localStorage.setItem("currentSign", JSON.stringify(currentData));
        this.customAlertFn("Logined");
        localStorage.setItem("isLogined", true);
        this.Reset();
      }
    }
  }
}

export default SigningIn;
