class Contact {
  constructor() {
    this.contactUs = document.getElementById("contact_us");
    this.name = this.contactUs.querySelector(".name input");
    this.email = this.contactUs.querySelector(".email input");
    this.text = this.contactUs.querySelector(".text textarea");
    this.contactBt = this.contactUs.querySelector("#contact_button");
    this.customAlert = document.getElementById("custom_alert");
    this.submit();
  }

  submit() {
    this.contactBt.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.checkValid()) {
        this.tempData = [
          {
            name: this.name.value,
            email: this.email.value,
            text: this.text.value,
          },
        ];
        if (this.submittedData) {
          this.submittedData = JSON.parse(
            localStorage.getItem("submittedData")
          );
          this.customAlertFn(
            `Thanks ${this.tempData[0].name} for Sending Message`
          );
          this.tempData = [...this.submittedData, ...this.tempData];
        }
        localStorage.setItem("submittedData", JSON.stringify(this.tempData));
        console.log(localStorage.getItem("submittedData"));
        this.submittedData = [...this.tempData];
        this.reset();
      }
    });
  }

  reset() {
    this.name.value = null;
    this.email.value = null;
    this.text.value = null;
  }

  customAlertFn(message) {
    this.customAlert.textContent = message;
    console.log("alerted");
    this.customAlert.style.display = "block";
    setTimeout(() => {
      this.customAlert.style.display = "none";
    }, 1000);
  }

  checkValid() {
    if (this.name.value && this.email.value && this.text.value) {
      return true;
    }
    return false;
  }
}

export default Contact;
