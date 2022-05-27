class AddItem {
  constructor() {
    this.productAdd = document.querySelectorAll(
      "#products_bottom_List li .product_addtocart"
    );
    this.products = document.querySelectorAll("#products_bottom_List li");
    this.productTemplate = document.querySelector("#product_template li");
    this.renderLocation = document.getElementById("product_list_render");
    this.totalAmountEl = document.querySelector(
      "#shopping_cart .total_amount_rate"
    );
    this.totalAmount = 0;
    this.totalBuy = document.getElementById("total_buy_button");
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
    this.render();
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
    this.totalAmount += parseInt(this.productData.productPrice);
    this.totalAmountEl.textContent = this.totalAmount;
  }

  totalBuyFn() {
    this.totalBuy.addEventListener("click", () => {
      if (this.totalAmount != 0) {
        alert(`Bought Product of Rs${this.totalAmount}`);
          console.log(this.renderLocation.firstChild);
        while (this.renderLocation.firstChild) {
          this.renderLocation.removeChild(this.renderLocation.firstChild);
        }
      }
    });
  }
}

export default AddItem;
