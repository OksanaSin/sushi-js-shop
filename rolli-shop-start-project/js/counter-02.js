// Добавляем прослушку на всем окне

window.addEventListener("click", function (event) {
  // Объявляем переменную для счетчика
  let counter;

  // Проверяем клик строго по кнопкам Плюс либо Минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    //находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем является ли элемент кнопкой плюс

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент кнопкой минус

  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      //Изменяем текст в счетчике уменьшая его на 1
      counter.innerText = --counter.innerText;
    }
    //проверка на товар который находится в корзине
    else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      //удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      toggleCartStatus();

      //Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery();
    }
  }

  //Проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    //Пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }
});
