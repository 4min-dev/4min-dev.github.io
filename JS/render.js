document.addEventListener('DOMContentLoaded', () => {
    const initData = window.Telegram.WebApp.initData
    const user = window.Telegram.WebApp.initDataUnsafe.user

    if (!initData) {
        alert('Ошибка: initData отсутствует')
        return
    } else {
        alert('initData успешно получено')
    }

    if (!user || !user.id) {
        alert('Ошибка: Данные пользователя недоступны')
        return
    } else {
        alert(`Пользователь найден: ID ${user.id}`)
    }

    async function getUser() {
        try {
            alert('Отправка запроса к API...')
            const users = await fetch('https://tapalka.wizardstech.ru:8443/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'initData': initData
                }
            })

            if (!users.ok) {
                throw new Error(`HTTP ошибка: ${users.status} ${users.statusText}`)
            }

            const usersData = await users.json()
            alert('Данные пользователей получены от API')

            if (!Array.isArray(usersData)) {
                alert('Ошибка: API вернул некорректные данные (не массив)')
                console.error('API вернул не массив:', usersData)
                return
            }

            const foundingActiveUser = usersData.find((u) => u.tg_id === user.id)

            if (!foundingActiveUser) {
                alert('Пользователь не найден в базе данных')
                window.location.href = '/templates/tutorial.html'
            } else {
                alert(`Пользователь найден в базе: tg_id ${foundingActiveUser.tg_id}`)
                window.location.href = '/templates/main.html'
            }
        } catch (error) {
            alert(`Ошибка при запросе к API: ${error.message}`)
            console.error(`Ошибка: ${error}`)
        }
    }

    alert('Запуск функции getUser...')
    getUser()
})