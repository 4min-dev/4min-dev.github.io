import formatNumberWithZeros from "./formatNumbersWithZeros.js";
import { retrieveLaunchParams } from 'https://cdn.jsdelivr.net/npm/@telegram-apps/sdk/+esm';
const { initDataRaw, initData } = retrieveLaunchParams();

// Проверка initData и вывод alert
function validateInitData(initData) {
    if (!initData) {
        alert("Ошибка: initData отсутствует. Убедитесь, что приложение запущено внутри Telegram.");
        return false;
    }

    // Разбираем initData на параметры
    const params = new URLSearchParams(initData);
    const queryId = params.get('query_id');
    const user = params.get('user');
    const authDate = params.get('auth_date');
    const hash = params.get('hash');

    // Проверяем наличие необходимых параметров
    if (!queryId || !user || !authDate || !hash) {
        alert(`Ошибка: initData не содержит всех необходимых параметров.\n\ninitData: ${initData}`);
        return false;
    }

    // Выводим информацию о initData
    alert(
        `initData успешно получен:\n` +
        `query_id: ${queryId}\n` +
        `user: ${user}\n` +
        `auth_date: ${authDate}\n` +
        `hash: ${hash}`
    );

    return true;
}

// Основная функция fetchUserData
async function fetchUserData() {
    try {
        // Проверяем initData перед отправкой запроса
        if (!validateInitData(initData)) {
            return; // Прерываем выполнение, если initData невалиден
        }

        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
            method: 'GET',
            headers: {
                'initData': initData,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const userAvatar = data.avatar_url;
        const userLevel = data.level;
        const userNickname = data.first_name;
        const userTokens = formatNumberWithZeros(data.tokens);
        const userTokenPerSecond = data.tokens_per_second;
        const userTokenPerTap = data.tokens_per_tap;

        userHeadingAvatarElements.forEach((userHeadingAvatar) => {
            const imgElement = userHeadingAvatar.querySelector('img');

            if (imgElement) {
                imgElement.setAttribute('src', userAvatar);
            }
        });
        userLevelValues.forEach((userLevelValue) => userLevelValue.textContent = userLevel);
        userNicknames.forEach((userNicknameElement) => userNicknameElement.textContent = userNickname);
        tapToken.textContent = getTokenValue(userTokenPerTap);
        secondToken.textContent = getTokenValue(userTokenPerSecond);
        currentBalance.innerHTML = userTokens;
    } catch (error) {
        console.error(`Error: ${error}`);
        alert(`Произошла ошибка при получении данных пользователя: ${error.message}`);
    }
}

fetchUserData();

export { fetchUserData };