document.addEventListener('DOMContentLoaded', () => {
    const userStageExperience = document.querySelectorAll('.user__profile__stage__container')
    const bonsaiElement = document.querySelector('#bonsai__main')

    const initData = window.Telegram.WebApp.initData;

    async function test() {
        const params = new URLSearchParams(initData)

        const userField = params.get('user')

        if (userField) {
            try {
                const userData = JSON.parse(userField)

                const telegramUserId = userData.id

                alert("Telegram User ID:", telegramUserId)
            } catch (error) {
                alert("Ошибка при парсинге данных пользователя:", error)
            }
        } else {
            alert("Поле 'user' не найдено в initData")
        }
    }

    test()

    const bonsaiData = [
        {
            id: 1,
            value: 'seed',
            img: '/static/img/bonsai-1.png',
            stageEtap: 1
        },

        {
            id: 2,
            value: 'sprout',
            img: '/static/img/bonsai-2.png',
            stageEtap: 2
        },

        {
            id: 3,
            value: 'young',
            img: '/static/img/bonsai-3.png',
            stageEtap: 3
        },

        {
            id: 4,
            value: 'mature',
            img: '/static/img/bonsai-4.png',
            stageEtap: 4
        }
    ]

    let bonsaiStage
    let waterCount

    async function plantBonsai() {
        try {
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/plant', {
                method: 'POST',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
            return response.json()
        } catch (error) {
            console.log(`Plant error ${error}`)
        }
    }

    const getUserBonsai = async () => {
        try {
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/bonsai', {
                method: 'GET',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })

            if (!response.ok) {
                console.log(`HTTP err Status: ${response.status}`)
            }

            // if(response.can_be_harvested) {
            //     getBonsaiPopupContainer.classList.add('visible')
            //     getBonsaiButton.addEventListener('click', trimBonsai)

            //     const timeToTrim = convertSeconds(data.time_per_harvest)
            //     if (timeToTrim) {
            //         getBonsaiPopupContainer.querySelector('.get__bonsai__trim__timeout').textContent = timeToTrim
            //     }
            //     return
            // }

            const data = await response.json()
            bonsaiStage = data.stage
            waterCount = data.water_count

            const currentBonsai = bonsaiData.find((bonsai) => bonsai.value === bonsaiStage)

            if (currentBonsai) {
                bonsaiElement.setAttribute('src', currentBonsai.img)

                userStageExperience.forEach((stageExperience) => {
                    stageExperience.querySelectorAll('.user__profile__stage').forEach((stage, index) => {
                        if (index <= currentBonsai.stageEtap) {
                            stage.classList.add('filled')
                        } else {
                            stage.classList.remove('filled')
                        }
                    })
                })
            } else {
                plantBonsai()
            }

            console.log(data)
        } catch (error) {
            console.error('Err fetching:', error)
        }
    }

    getUserBonsai()
})