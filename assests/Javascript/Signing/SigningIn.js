import SigningUp from "./SigningUp.js";

class SigningIn extends SigningUp {
  constructor(isLogined) {
    super(isLogined);
    this.signFound = false;
    this.signGranted = false;
    this.checkSignInClicked();
    this.startSigningIn();
  }

  startSigningIn() {
    this.signInSubmit.addEventListener("click", (event) => {
        event.preventDefault();
      const email = document.getElementById("sign_in_email");
      const password = document.getElementById("sign_in_password");
      if (email.value && password.value) {
        this.signingIn(email.value, password);
      } else {
        this.customAlertFn("Fill it Properly");
      }
    });
  }

  signingIn(email, password) {
    let name, currentData;
    this.signingData = JSON.parse(localStorage.getItem("airo"));

    if (this.signingData && JSON.parse(localStorage.getItem("isLoggedBefore"))) {
      this.signingData.forEach((Data) => {
        if (Data.email == email) {
          name = Data.name;
          this.signFound = true;
          if (Data.password == password.value) {
            this.signGranted = true;
            currentData = {
              name: name,
              email: email,
              password: password.value,
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
        const tempColor = password.style.backgroundColor;
        password.style.backgroundColor = "red";
        setTimeout(() => {
          password.style.backgroundColor = tempColor;
        },1000);
      } else {
        localStorage.setItem("currentSign", JSON.stringify(currentData));
        this.customAlertFn("Logined");
        localStorage.setItem("isLogined", true);
        this.resettingSignIn();
        this.Reset("submitted");
      }
    }
  }
}

export default SigningIn;
