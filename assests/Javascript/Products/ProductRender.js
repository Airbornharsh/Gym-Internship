import ProductDetails from "./ProductDetails.js";

class ProductRender {
  constructor() {
      this.productRenderTemplate = document.querySelector(
          "#product_render_template li");
    this.productRenderLocation = document.getElementById("products_bottom_List");
      this.iterate();  
    }
    
    iterate() {
        ProductDetails.forEach((ProductDetail) => {
            let productRenderClone = this.productRenderTemplate.cloneNode(true);
            productRenderClone.querySelector("img").src = ProductDetail.src;
            productRenderClone.querySelector(".product_name").textContent = ProductDetail.productName;
            productRenderClone.querySelector(".product_price_rate").textContent = ProductDetail.productPrice;
            this.productRenderLocation.append(productRenderClone);
        });
        
    }
}

export default ProductRender;
