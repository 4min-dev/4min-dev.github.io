document.querySelectorAll('.modal__balance-main-text').forEach(element => {
    const text = element.textContent;
    const formatted = text.replace(/ /g, '<span class="modal__balance-main-text--comma"> </span>');
    element.innerHTML = formatted;
  });
  document.querySelectorAll('.modal__item-text-main--BC').forEach(element => {
    const text = element.textContent;
    const formatted = text.replace(/ /g, '<span class="modal__item-text-main--BC-comma"> </span>');
    element.innerHTML = formatted;
  });