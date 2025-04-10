document.querySelectorAll('.balance__money-main-text span').forEach(element => {
    const text = element.textContent;
    const formatted = text.replace(/,/g, '<span class="balance__money-main-text--comma">,</span>');
    element.innerHTML = formatted;
  });
  document.querySelectorAll('.balance-main-text').forEach(element => {
    const text = element.textContent;
    const formatted = text.replace(/\./g, '<span class="balance-main-text--comma">.</span>');
    element.innerHTML = formatted;
  });
  document.querySelectorAll('.main-text').forEach(element => {
    const text = element.textContent;
    const formatted = text.replace(/,/g, '<span class="balance-main-text--comma">,</span>');
    element.innerHTML = formatted;
  });
  
 
  
  document.addEventListener('DOMContentLoaded', () => {
    const balance = document.querySelector('.balance');

    balance.style.transform = 'translateZ(0)';
    balance.offsetHeight;
    balance.style.transform = ''; 
});

document.querySelectorAll('.balance__money-secondary-text').forEach(element => {
  const text = element.textContent;
  const formatted = text.replace(/([ ,.]|₽)/g, (match) => {
    if (match === '₽') {
      return `<span class="balance-main-text--comma-money">${match}</span>`;
    } else {
      return `<span class="balance-main-text--comma">${match}</span>`;
    }
  });
  element.innerHTML = formatted;
});

  document.querySelectorAll('.secondary-text').forEach(element => {
    const text = element.textContent;
    const formatted = text.replace(/ /g, '<span class="main-text__500"> </span>');
    element.innerHTML = formatted;
  });
 

 Array.from(document.querySelectorAll('.transactions__button')).forEach(el => el.addEventListener('click', () => {
  Array.from(document.querySelectorAll('.transactions__button')).forEach(e => e.classList.remove('transactions__active'))
  el.classList.add('transactions__active')
 }))
 


//  Реализация инпута
