import ShoppingRender from "./ShoppingRender.js";

class AddItem extends ShoppingRender{
    constructor() {
        super();
    this.productAdd = document.querySelectorAll(
      "#products_bottom_List li .product_addtocart"
    );
      this.products = document.querySelectorAll("#products_bottom_List li");
      this.addedAlert = document.getElementById("added_to_cart");
    this.clicked();
    this.totalBuyFn();
  }

  clicked() {
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
    this.addedAlert.style.display = "block";
    setTimeout(() => {
      this.addedAlert.style.display = "none";
    }, 800);
  }
}

export default AddItem;
