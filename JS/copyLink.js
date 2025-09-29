// /JS/copyLink.js (исправленная версия с дополнительными проверками)
Telegram.WebApp.ready();  // Убедимся, что Mini App инициализирован

document.addEventListener('DOMContentLoaded', () => {
    const copyContainers = document.querySelectorAll('.copy__input__container');

    function handleCopyLink(link) {
        if (link && typeof link === 'string' && link.trim() !== '' && link.toLowerCase() !== 'null' && !link.startsWith('Ошибка')) {
            navigator.clipboard.writeText(link).then(() => {
                // Заменяем кастомный попап на встроенный в Telegram, чтобы избежать ошибки с несуществующим элементом
                Telegram.WebApp.showPopup({ message: 'Ссылка скопирована в буфер обмена' });
                console.log('Копирование успешно: ', link);  // Добавлен лог для отладки
            }).catch(err => {
                Telegram.WebApp.showAlert('Ошибка копирования: ' + err.message);
                console.error('Ошибка при копировании: ', err);  // Лог ошибки
            });
        } else {
            Telegram.WebApp.showAlert('Нет ссылки для копирования');
            console.warn('Недействительная ссылка для копирования: ', link);  // Лог предупреждения
        }
    }

    copyContainers.forEach(container => {
        const copyInput = container.querySelector('.copy__input');
        console.log('Найден input: ', copyInput);  // Для отладки (проверь в консоли, видит ли он элемент)
        if (copyInput) {
            const copyButton = container.querySelector('.copy__link__button');
            console.log('Найдена кнопка: ', copyButton);  // Для отладки
            if (copyButton) {
                copyButton.addEventListener('click', () => {
                    const link = copyInput.value;  // Используем .value для динамического значения
                    console.log('Попытка копирования ссылки: ', link);  // Лог перед копированием
                    handleCopyLink(link);
                });
            } else {
                console.error('Кнопка копирования не найдена в контейнере');
            }
        } else {
            console.error('Элемент ввода не найден в контейнере');
        }
    });
});