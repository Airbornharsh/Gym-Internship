const productList = document.getElementById("product_list_render");
const totalAmountEl = document.querySelector("#shopping_cart .total_amount_rate");

let RemoveItem = () => {
  const productsRemoveButtons =
    productList.querySelectorAll("li .product_remove");
  const products = productList.querySelectorAll("li");
  productsRemoveButtons.forEach((productsRemoveButton, index) => {
    productsRemoveButton.addEventListener("click", () => {
      let newTotalAmount =
        parseInt(totalAmountEl.textContent) -
        parseInt(products[index].querySelector(".details .amount").textContent);
      products[index].remove();
      document.querySelector("#shopping_cart .total_amount_rate").textContent =
        newTotalAmount;
    });
  });
};

export default RemoveItem;
