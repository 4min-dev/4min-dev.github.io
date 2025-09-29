Telegram.WebApp.ready();
Telegram.WebApp.expand();

// Function to load balance dynamically
async function loadBalance(tg_id) {
    try {
        const response = await fetch(`api/user/${tg_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            document.getElementById('balance-value').innerHTML = `${data.balance}&nbsp;`;
            return true;
        } else {
            document.getElementById('balance-value').innerHTML = 'Ошибка загрузки';
            return false;
        }
    } catch (error) {
        document.getElementById('balance-value').innerHTML = 'Ошибка загрузки';
        return false;
    }
}

// Load data on init with loading overlay
async function initLoad() {
    const initDataUnsafe = Telegram.WebApp.initDataUnsafe;
    const tg_id = initDataUnsafe.user ? initDataUnsafe.user.id : null;
    if (!tg_id) {
        document.getElementById('balance-value').innerHTML = 'Ошибка: Нет ID пользователя';
        document.getElementById('loading-overlay').style.display = 'none';
        return;
    }

    // Wait for load
    await loadBalance(tg_id);

    // Hide overlay after done
    // document.getElementById('loading-overlay').style.display = 'none';
}

initLoad();