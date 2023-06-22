function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmptybadge = document.querySelector("[data-cart-empty]");
  const orderForm = document.querySelector('#order-form');

  if (cartWrapper.children.length > 0) {
    cartEmptybadge.classList.add("none");
    orderForm.classList.remove('none');
  } else {
    cartEmptybadge.classList.remove("none");
    orderForm.classList.add('none');
  }
}
