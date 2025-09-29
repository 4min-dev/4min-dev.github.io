// /JS/order.js
document.addEventListener('DOMContentLoaded', () => {
    const paymentMethod = localStorage.getItem('paymentMethod');
    const messages = localStorage.getItem('messages');
    const amount = localStorage.getItem('amount');

    document.getElementById('order-title').textContent = 'Счет №' + Math.floor(Math.random() * 10000);  // Генерация номера счета
    document.getElementById('payment-method').textContent = paymentMethod === 'card' ? 'СБП / Банковская Карта' : 'Telegram Stars';
    document.getElementById('messages-count').textContent = messages;
    document.getElementById('payment-amount').textContent = amount;

    // Обработка кнопки "Оплатить" для рублёвых методов (например, redirect на внешний payment gateway)
    document.getElementById('pay-button').addEventListener('click', () => {
        // Здесь интеграция с ЮMoney, Tinkoff или аналогом, используя amount и messages
        Telegram.WebApp.showAlert('Переход к оплате...');  // Placeholder
        // window.location.href = 'https://payment-gateway.com/pay?amount=' + parseInt(amount) + '&description=' + messages + ' сообщений';
    });
});