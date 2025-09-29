// /JS/backend/referral.js (основной скрипт)
Telegram.WebApp.ready();
Telegram.WebApp.expand();

// Function to load user data (including ref_link)
async function loadUserData(tg_id) {
    try {
        const response = await fetch(`/api/user/${tg_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const user = await response.json();
            const refLink = (typeof user.ref_link === 'string' && user.ref_link.trim() !== '' && user.ref_link.toLowerCase() !== 'null') ? user.ref_link : 'Ошибка: Нет ссылки';
            document.getElementById('ref-link-input').value = refLink;
            console.log('Loaded ref_link:', user.ref_link, 'Type:', typeof user.ref_link); // Enhanced Debug
            return (typeof user.ref_link === 'string' && user.ref_link.trim() !== '' && user.ref_link.toLowerCase() !== 'null') ? true : false;
        } else {
            document.getElementById('ref-link-input').value = 'Ошибка загрузки';
            console.log('Error loading user data:', response.status);
            return false;
        }
    } catch (error) {
        document.getElementById('ref-link-input').value = 'Ошибка загрузки';
        console.log('Error loading user data:', error);
        return false;
    }
}

// Function to load referrals list
async function loadReferrals(tg_id) {
    try {
        const response = await fetch(`/api/referals/${tg_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const referrals = await response.json();
            const listContainer = document.getElementById('referrals-list');
            listContainer.innerHTML = ''; // Clear previous content
            if (referrals.length === 0) {
                listContainer.innerHTML = '<p class="text__sm text__center primary__text">Пока нет друзей</p>';
            } else {
                referrals.forEach(ref => {
                    const refItem = document.createElement('div');
                    refItem.className = 'referral__item flex justify__space__between align__center';
                    refItem.innerHTML = `
                        <span class="text__sm primary__text">${ref.full_name || 'Неизвестный пользователь'}</span>
                        <span class="text__sm font__semibold primary__text">+10</span>
                    `;
                    listContainer.appendChild(refItem);
                });
            }
            return true;
        } else {
            document.getElementById('referrals-list').innerHTML = '<p class="text__sm text__center primary__text">Ошибка загрузки</p>';
            console.log('Error loading referrals:', response.status);
            return false;
        }
    } catch (error) {
        document.getElementById('referrals-list').innerHTML = '<p class="text__sm text__center primary__text">Ошибка загрузки</p>';
        console.log('Error loading referrals:', error);
        return false;
    }
}

// Load data on init with loading overlay
async function initLoad() {
    const initDataUnsafe = Telegram.WebApp.initDataUnsafe;
    const tg_id = initDataUnsafe.user ? initDataUnsafe.user.id : null;
    if (!tg_id) {
        document.getElementById('ref-link-input').value = 'Ошибка: Нет ID пользователя';
        document.getElementById('referrals-list').innerHTML = '<p class="text__sm text__center primary__text">Ошибка: Нет ID пользователя</p>';
        document.getElementById('loading-overlay').style.display = 'none';
        console.log('No user ID');
        return;
    }

    // Wait for both loads
    const [userSuccess, referralsSuccess] = await Promise.all([
        loadUserData(tg_id),
        loadReferrals(tg_id)
    ]);

    // Hide overlay after both are done
    document.getElementById('loading-overlay').style.display = 'none';

    // Enable copy button and show MainButton only if user data loaded successfully and ref_link is valid
    if (userSuccess) {
        document.getElementById('copy-button').disabled = false;

        // Set up native MainButton
        Telegram.WebApp.MainButton.setText('ПРИГЛАСИТЬ ДРУЗЕЙ');
        Telegram.WebApp.MainButton.show();
    }
}

initLoad();

// Add invite functionality to MainButton with pre-prepared message share
Telegram.WebApp.MainButton.onClick(async function () {
    const link = document.getElementById('ref-link-input').value;
    if (link && typeof link === 'string' && link.trim() !== '' && link.toLowerCase() !== 'null' && !link.startsWith('Ошибка')) {
        try {
            const response = await fetch('/api/prepare-share/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    init_data: Telegram.WebApp.initData,
                    ref_link: link
                })
            });

            if (response.ok) {
                const data = await response.json();
                const msg_id = data.prepared_id;

                Telegram.WebApp.shareMessage(msg_id, (success) => {
                    if (success) {
                        Telegram.WebApp.showAlert('Приглашение отправлено!');
                    } else {
                        Telegram.WebApp.showAlert('Приглашение отменено');
                    }
                });
            } else {
                Telegram.WebApp.showAlert('Ошибка подготовки приглашения: ' + response.status);
            }
        } catch (error) {
            Telegram.WebApp.showAlert('Ошибка: ' + error.message);
        }
    } else {
        Telegram.WebApp.showAlert('Нет ссылки для приглашения');
    }
});