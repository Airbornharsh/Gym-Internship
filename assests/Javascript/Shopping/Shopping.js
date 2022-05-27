import AddItem from "./AddItem.js";
import ShoppingButton from "./ShoppingButton.js";
import ShoppingRender from "./ShoppingRender.js";

class Shopping{
    constructor() {
        new ShoppingButton();
        new AddItem();
        //new ShoppingRender();
    }
}

export default Shopping;