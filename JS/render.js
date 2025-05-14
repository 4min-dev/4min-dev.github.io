document.addEventListener('DOMContentLoaded', () => {
    const initData = window.Telegram.WebApp.initData
    const user = window.Telegram.WebApp.initDataUnsafe.user

    async function getUser() {
        try {
            const users = await fetch('https://tapalka.wizardstech.ru:8443/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'initData': initData
                }
            })

            const usersData = await users.json()

            const foundingActiveUser = usersData.find((user) => user.tg_id === user?.id)

            if (!foundingActiveUser) {
                window.location.href = '/templates/tutorial.html'
            } else {
                window.location.href = '/templates/main.html'
            }
        } catch (error) {
            console.error(`Ошибка: ${error}`)
        }
    }

    if (!user || !user.id) {
        console.error('Данные пользователя недоступны')
        window.location.href = '/templates/error.html'
        return
    }

    getUser()
})