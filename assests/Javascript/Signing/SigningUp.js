class SigningUp {
  constructor(isLogined) {
    this.checkExisted = false;
    this.elements();
    this.isLogined = isLogined;
    this.logDisplay();
    this.checkSignUpClicked();
    this.logedOut();
    this.startSigningUp();
  }

  elements() {
    this.signedUp = document.querySelector("#signed_up h2");
    this.signUpBt = document.getElementById("sign_up");
    this.signInBt = document.getElementById("sign_in");
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

  logDisplay() {
    if (this.isLogined) {
      document.getElementById("sign_up_template").style.display = "none";
      this.signUpBt.style.display = "none";
      this.signInBt.style.display = "none";
      this.signedUp.textContent =
        "Hii " + JSON.parse(localStorage.getItem("currentSign")).name;
      this.logOut.style.display = "block";
    } else {
      this.signedUp.style.display = "none";
      this.logOut.style.display = "none";
    }
  }

  checkSignUpClicked() {
    this.signUpFormContainer.style.display = "none";
    this.signUpBt.addEventListener("click", () => {
      this.signUpFormContainer.style.display = "flex";
      this.displayForm();
    });
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

  logedOut() {
    this.logOut.addEventListener("click", () => {
      localStorage.setItem("isLogined", false);
      localStorage.removeItem("currentSign");
      this.isLogined = false;
      this.logDisplay();
      this.signUpBt.style.display = "block";
      this.signInBt.style.display = "block";
    });
  }

  startSigningUp() {
    this.signUpSubmit.addEventListener("click", (event) => {
      const name = document.getElementById("sign_up_name").value;
      const email = document.getElementById("sign_up_email").value;
      const password1 = document.getElementById("sign_up_password_1").value;
      const password2 = document.getElementById("sign_up_password_2").value;
      event.preventDefault();
      if (name && email && password1 && password2 && password1 == password2) {
        this.signingUp(name, email, password1);
        // this.fetching(this.form);
      } else {
        this.customAlertFn("Fill it Properly");
      }
    });
  }

  signingUp(name, email, password) {
    this.tempData = [
      {
        name: name,
        email: email,
        password: password,
      },
    ];
    console.log(this.tempData);
    let currentData = this.tempData[0];
    this.submittedData = JSON.parse(localStorage.getItem("airo"));
    if (this.submittedData) {
      this.submittedData.forEach((Data) => {
        if (this.tempData[0].email == Data.email) {
          this.checkedExisted = true;
        }
      });
      this.tempData = [...this.submittedData, ...this.tempData];
    }
    if (!this.checkedExisted) {
      window.localStorage.setItem("airo", JSON.stringify(this.tempData));
      localStorage.setItem("currentSign", JSON.stringify(currentData));
      this.customAlertFn("SUBMITTED");
      localStorage.setItem("isLogined", true);
      this.Reset();
    } else {
      this.customAlertFn("Email Id Existed");
      this.checkedExisted = false;
    }
  }

  checkExisted() {
    console.log(this.submittedData);
    this.submittedData.forEach((Data) => {
      if (this.tempData[0].email == Data.email) {
        this.checkedExisted = true;
      }
    });
    this.checkedExisted = false;
  }

  customAlertFn(message) {
    this.customAlert.textContent = message;
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
    // this.formContainer.style.display = "flex";
    //   this.nav.style.backgroundColor = "rgba(26, 36, 47, 0.8)";
    //   this.open.style.display = "none";
    //   this.close.style.display = "none";
    //   this.liContainer.style.display = "none";
    //   this.header.style.display = "none";
    //   this.main.style.display = "none";
    //   this.footer.style.display = "none";
  }
}

export default SigningUp;
