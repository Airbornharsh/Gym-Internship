import RemoveItem from "./RemoveItem.js";

class ShoppingButton {
    constructor() {
        this.body = document.querySelector("body");
        this.openBt = document.getElementById("shopping_cart_button");
        this.closeBt = document.getElementById("shopping_cart_close");
        this.shopCart = document.getElementById("shopping_cart");
        this.nav = document.querySelector("nav");
        this.clicked();
    }

    clicked() {
        this.openBt.addEventListener("click", () => {
            this.openBt.style.display = "none";
            this.closeBt.style.display = "block";
            this.shopCart.style.display = "flex";
            this.nav.style.display = "none";
            RemoveItem();
        });
        this.closeBt.addEventListener("click", () => {
            this.openBt.style.display = "block";
            this.closeBt.style.display = "none";
            this.shopCart.style.display = "none";
            this.nav.style.display = "flex";
        });
    }
    
}

export default ShoppingButton;