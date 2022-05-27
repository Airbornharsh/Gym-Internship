class ShoppingButton{
    constructor() {
        this.body = document.querySelector("body");
        this.openBt = document.getElementById("shopping_cart_button");
        this.closeBt = document.getElementById("shopping_cart_close");
        this.shopCart = document.getElementById("shopping_cart");
        this.clicked();
    }

    clicked() {
        this.openBt.addEventListener("click", () => {
            this.openBt.style.display = "none";
            this.closeBt.style.display = "block";
            this.shopCart.style.display = "block";
        });
        this.closeBt.addEventListener("click", () => {
            this.openBt.style.display = "block";
            this.closeBt.style.display = "none";
            this.shopCart.style.display = "none";
        });
    }
}

export default ShoppingButton;