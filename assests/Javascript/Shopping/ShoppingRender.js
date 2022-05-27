import AddItem from "./AddItem.js";

class ShoppingRender extends AddItem{
    constructor() {
        super();
        this.productTemplate = document.querySelector("#product_template li");
        this.renderLocation = document.getElementById("product_list_render");
        this.render();
    }

    render() {
        let productClone = this.productTemplate.cloneNode(true);
        console.log(productClone);
        productClone.querySelector("img").src = this.productData.src;
    }
}

export default ShoppingRender;