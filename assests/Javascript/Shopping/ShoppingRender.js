class ShoppingRender {
  constructor() {
    this.productTemplate = document.querySelector("#product_template li");
    this.renderLocation = document.getElementById("product_list_render");
    this.totalAmountEl = document.querySelector(
      "#shopping_cart .total_amount_rate"
    );
    this.totalAmount = 0;
    this.totalBuy = document.getElementById("total_buy_button");
    this.customAlert = document.getElementById("custom_alert");
  }

  render() {
    let productClone = this.productTemplate.cloneNode(true);
    productClone.querySelector("img").src = this.productData.src;
    productClone.querySelector(".details h5").textContent =
      this.productData.productName;
    productClone.querySelector(".details div .amount").textContent =
      this.productData.productPrice;
    this.totalUpdate();
    this.renderLocation.append(productClone);
  }

  totalUpdate() {
    this.totalAmount =
      parseInt(
        document.querySelector("#shopping_cart .total_amount_rate").textContent
      ) + parseInt(this.productData.productPrice);
    this.totalAmountEl.textContent = this.totalAmount;
  }

  totalBuyFn() {
    this.totalBuy.addEventListener("click", () => {
      if (
        parseInt(
          document.querySelector("#shopping_cart .total_amount_rate")
            .textContent
        ) != 0
      ) {
        this.customAlertFn(`Bought Product of Rs${this.totalAmount}`);
        while (this.renderLocation.firstChild) {
          this.renderLocation.removeChild(this.renderLocation.firstChild);
        }
        this.totalAmountEl.textContent = "0";
      } else {
        this.customAlertFn("Nothing To Buy");
      }
    });
  }

  customAlertFn(message) {
    this.customAlert.textContent = message;
    console.log("alerted");
    this.customAlert.style.display = "block";
    setTimeout(() => {
      this.customAlert.style.display = "none";
    }, 700);
  }
}

export default ShoppingRender;
