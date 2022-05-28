import ShoppingRender from "./ShoppingRender.js";

class AddItem extends ShoppingRender {
  constructor() {
    super();
    this.productAdd = document.querySelectorAll(
      "#products_bottom_List li .product_addtocart"
    );
    this.productBuyNow = document.querySelectorAll(
      "#products_bottom_List li .product_buynow"
    );
    this.products = document.querySelectorAll("#products_bottom_List li");
    this.customAlert = document.getElementById("custom_alert");
    this.buy();
    this.add();
    this.totalBuyFn();
  }

  buy() {
    this.productBuyNow.forEach((product, index) => {
      product.addEventListener("click", () => {
        const productDetail = this.products[index];
        const productName =
          productDetail.querySelector(".product_name").textContent;
        const productPrice = productDetail.querySelector(
          ".product_price_rate"
        ).textContent;
        const message = `Bought ${productName} of Rs${productPrice}`;
        this.customAlertFn(message);
      });
    });
  }

  add() {
    this.productAdd.forEach((product, index) => {
      product.addEventListener("click", () => {
        this.productDataManaged(index);
      });
    });
  }

  productDataManaged(index) {
    const productDetail = this.products[index];
    const src = productDetail.querySelector("img").src;
    const productName =
      productDetail.querySelector(".product_name").textContent;
    const productPrice = productDetail.querySelector(
      ".product_price_rate"
    ).textContent;
    this.productData = {
      src: src,
      productName: productName,
      productPrice: productPrice,
    };
    this.alert();
    this.render();
  }

  alert() {
    const message = "Added to Cart";
    this.customAlertFn(message);
  }

  customAlertFn(message) {
    this.customAlert.textContent = message;
    this.customAlert.style.display = "block";
    setTimeout(() => {
      this.customAlert.style.display = "none";
    }, 700);
  }
}

export default AddItem;
