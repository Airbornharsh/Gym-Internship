import Form from "./Form.js";

class SigningUp extends Form {
  constructor(isLogined) {
    super(isLogined);
    this.checkExisted = false;
    this.elements();
    this.firstLog();
    this.checkSignUpClicked();
    this.logedOut();
    this.startSigningUp();
  }

  firstLog() {
    if (!JSON.parse(localStorage.getItem("isLoggedBefore"))) {
      localStorage.setItem("isLoggedBefore", true);
      localStorage.setItem("airo", JSON.stringify([]));
    }
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
      this.customAlertFn("Registered");
      localStorage.setItem("isLogined", true);
      this.Reset("submitted");
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

}

export default SigningUp;
