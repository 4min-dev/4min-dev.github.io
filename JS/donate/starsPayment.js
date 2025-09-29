// /JS/donate/starsPayment.js
document.addEventListener('DOMContentLoaded', () => {
    const donateButton = document.getElementById('donate-button');
    const emailInput = document.querySelector('.donate__email__input');
    const errorPopupOverlay = document.querySelector('.error__popup__overlay');

    donateButton.addEventListener('click', async () => {
        const selectedMethod = document.querySelector('.selector__card.active').getAttribute('data-method');
        const selectedVariant = document.querySelector('.donate__variant.active');
        const messages = selectedVariant.getAttribute('data-messages');
        const amount = selectedMethod === 'stars' ? selectedVariant.getAttribute('data-stars') : selectedVariant.getAttribute('data-rub');

        if (selectedMethod !== 'stars' && !emailInput.value) {
            errorPopupOverlay.classList.add('active');
            return;
        }

        if (selectedMethod === 'stars') {
            try {
                const response = await fetch('/api/create-stars-invoice', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        init_data: Telegram.WebApp.initData,
                        messages: messages,
                        amount: amount
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const invoiceLink = data.invoice_link;

                    Telegram.WebApp.openInvoice(invoiceLink, (status) => {
                        if (status === 'paid') {
                            Telegram.WebApp.showAlert('Оплата успешна!');
                            // Опционально: обновить баланс или перейти
                        } else if (status === 'cancelled') {
                            Telegram.WebApp.showAlert('Оплата отменена');
                        } else if (status === 'failed') {
                            Telegram.WebApp.showAlert('Ошибка оплаты');
                        } else if (status === 'pending') {
                            Telegram.WebApp.showAlert('Оплата в обработке');
                        }
                    });
                } else {
                    Telegram.WebApp.showAlert('Ошибка создания инвойса: ' + response.status);
                }
            } catch (error) {
                Telegram.WebApp.showAlert('Ошибка: ' + error.message);
            }
        } else {
            // Для рублёвых методов: redirect на /order.html или внешний payment, передавая данные (например, через localStorage или query params)
            localStorage.setItem('paymentMethod', selectedMethod);
            localStorage.setItem('messages', messages);
            localStorage.setItem('amount', amount + ' ₽');
            window.location.href = '/order.html';
        }
    });
});