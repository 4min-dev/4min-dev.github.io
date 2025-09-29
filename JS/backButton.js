document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton;
    alert('test')
    function initBackButton() {
        backButton.show();
        backButton.onClick(() => {
            history.back();
        });
    }

    if (window.location.pathname === "/home.html") {
        backButton.hide();
    } else {
        initBackButton();
    }

    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide());

    // Перехватываем pushState и replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
        originalPushState.apply(this, args);
        alert('Страница изменилась!');
        // Обновляем состояние кнопки
        if (window.location.pathname === "/home.html") {
            backButton.hide();
        } else {
            initBackButton();
        }
    };

    history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        alert('Страница изменилась!');
        // Обновляем состояние кнопки
        if (window.location.pathname === "/home.html") {
            backButton.hide();
        } else {
            initBackButton();
        }
    };
});