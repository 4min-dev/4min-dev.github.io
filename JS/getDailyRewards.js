import Preloader from './preloader.js'
const preloader = new Preloader()

let dailyCombo
let nextDailyReward
let boostersArray = []

const homePageCurrentDayValue = document.querySelector('.calendar__date__value')
const dailyRewardsContainer = document.querySelector('.daily__rewards__container')

function getFormattedTokensAward(value) {
    if (value < 1000) {
        return value.toString()
    } else {
        return `${Math.floor(value / 1000)}К`
    }
}

async function handleGetDailyReward() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/daily-rewards/claim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then((res) => res.json())

        if (response.reward.combo_days === 1) {
            boostersArray.forEach(async (booster) => {
                await fetch(`https://tapalka.wizardstech.ru:8443/api/boosters/activate?user_boost_id=${booster.booster_uuid}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                }).then(async (res) => console.log(await res.json()))
            })
        }

        return response
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

async function handleGetBoostItems() {
    try {
        const boostersData = await fetch('https://tapalka.wizardstech.ru:8443/api/boosters', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then((res) => res.json())
        const userBoostersData = await fetch('https://tapalka.wizardstech.ru:8443/api/boosters/active', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then((res) => res.json())

        const boosters = boostersData.boosters
        const userBoosters = userBoostersData.boosters

        const activeBoosterUUIDs = userBoosters.map(b => String(b.booster_id))

        const inactiveBoosters = boosters.filter(b => !activeBoosterUUIDs.includes(String(b.booster_uuid)))

        boostersArray = inactiveBoosters
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

handleGetBoostItems()

// function getRandomUniqueBoosters(boosters) {
//     // Проверяем, достаточно ли бустеров
//     if (boosters.length < 3) {
//         return [];
//     }

//     // Создаем копию массива, чтобы не модифицировать оригинал
//     const randomBoostersData = [...boosters];
//     const selectedBoosters = [];
//     const usedTypes = new Set();

//     while (selectedBoosters.length < 3 && randomBoostersData.length > 0) {
//         // Получаем случайный индекс
//         const randomIndex = Math.floor(Math.random() * randomBoostersData.length);
//         const booster = randomBoostersData[randomIndex];

//         // Проверяем, что тип бустера еще не использован
//         if (!usedTypes.has(booster.booster_type)) {
//             selectedBoosters.push(booster);
//             usedTypes.add(booster.booster_type);
//         }

//         // Удаляем использованный бустер из массива
//         randomBoostersData.splice(randomIndex, 1);
//     }

//     return selectedBoosters;
// }

// // Пример использования:
// console.log(getRandomUniqueBoosters(boostersArray));

function createDailyReward(dailyReward, nextDailyReward) {
    const dailyRewardContainer = document.createElement('div')
    dailyRewardContainer.classList.add('daily__reward__card', 'flex', 'column', 'align__center', 'justify__space__between')
    if (nextDailyReward.can_claim_reward && dailyReward.combo_days === nextDailyReward.reward.combo_days) {
        dailyRewardContainer.classList.add('ready__to__get')

        dailyRewardContainer.addEventListener('click', handleGetDailyReward)
    }

    dailyRewardContainer.setAttribute('data-day', dailyReward.combo_days)

    dailyReward.combo_days < 31 ? dailyRewardContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
                      <path
                          d="M3.16667 21.9178V3.42466H10.5566C11.749 3.42466 12.75 3.66438 13.5595 4.14384C14.369 4.62329 14.9783 5.24401 15.3874 6.00599C15.7965 6.75942 16.0011 7.55565 16.0011 8.39469C16.0011 9.41353 15.7443 10.2868 15.2307 11.0146C14.7259 11.7423 14.0426 12.2389 13.1809 12.5043L13.1548 11.875C14.356 12.1661 15.2786 12.7354 15.9227 13.583C16.5668 14.4221 16.8889 15.4024 16.8889 16.524C16.8889 17.6113 16.6669 18.5574 16.223 19.3622C15.7878 20.167 15.148 20.7962 14.3037 21.25C13.4681 21.6952 12.4541 21.9178 11.2616 21.9178H3.16667ZM5.93461 19.3622H10.8438C11.4618 19.3622 12.0145 19.2466 12.502 19.0154C12.9981 18.7842 13.3854 18.4546 13.664 18.0265C13.9512 17.5899 14.0948 17.0719 14.0948 16.4726C14.0948 15.9161 13.9686 15.4152 13.7162 14.97C13.4725 14.5163 13.1156 14.161 12.6456 13.9041C12.1843 13.6387 11.6402 13.506 11.0135 13.506H5.93461V19.3622ZM5.93461 10.976H10.5174C11.0222 10.976 11.4749 10.8776 11.8752 10.6807C12.2843 10.4752 12.6064 10.1841 12.8414 9.80736C13.0851 9.42209 13.207 8.95976 13.207 8.42038C13.207 7.7012 12.9633 7.11044 12.4758 6.64812C11.9884 6.18579 11.3356 5.95462 10.5174 5.95462H5.93461V10.976Z"
                          fill="white" />
                      <path d="M0 7.87671H5.27778V9.24658H0V7.87671Z" fill="white" />
                      <path d="M0 16.4384H5.27778V17.8082H0V16.4384Z" fill="white" />
                      <path d="M8.44444 0H9.85185V5.13699H8.44444V0Z" fill="white" />
                      <path d="M8.44444 19.863H9.85185V25H8.44444V19.863Z" fill="white" />
                      <path d="M13.7222 7.87671H19V9.24658H13.7222V7.87671Z" fill="white" />
                      <path d="M14.4259 16.4384H19V17.8082H14.4259V16.4384Z" fill="white" />
                  </svg>

                  ${(dailyReward.combo_days < nextDailyReward.reward.combo_days)
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
              <g filter="url(#filter0_d_940_1839)">
                  <path d="M6.5 12L12.5004 17.6842L24.5 6.3158" stroke="#17C8B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                  <filter id="filter0_d_940_1839" x="0.3" y="0.115796" width="30.4" height="23.7684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.35" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.784314 0 0 0 0 0.713726 0 0 0 0.35 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_940_1839" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_940_1839" result="shape" />
                  </filter>
              </defs>
          </svg>`
            : `<span class="daily__reward__value text__uppercase">
              ${getFormattedTokensAward(dailyReward.value)}
          </span>`}


                  <div
                      class="get__reward__button flex align__center justify__center daily__button text__uppercase">
                      ${(dailyReward.combo_days === nextDailyReward.reward.combo_days && nextDailyReward.can_claim_reward)
            ? `Собрать`
            : `День ${dailyReward.combo_days}`
        }
                  </div>
  ` : (
        dailyRewardContainer.classList.add('finally__reward'),
        dailyRewardContainer.innerHTML = `
  <div class="finally__reward__value flex column">
                        <span class="finally__reward__content flex align__center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                fill="none">
                                <g filter="url(#filter0_d_604_1812)">
                                    <path
                                        d="M7.33333 16.8973V7.28082H10.4449C10.947 7.28082 11.3684 7.40548 11.7093 7.65479C12.0501 7.90411 12.3067 8.22688 12.4789 8.62312C12.6512 9.0149 12.7373 9.42894 12.7373 9.86524C12.7373 10.395 12.6292 10.8491 12.4129 11.2276C12.2004 11.606 11.9127 11.8642 11.5498 12.0022L11.5389 11.675C12.0446 11.8264 12.4331 12.1224 12.7043 12.5632C12.9755 12.9995 13.1111 13.5092 13.1111 14.0925C13.1111 14.6579 13.0177 15.1498 12.8307 15.5683C12.6475 15.9868 12.3781 16.314 12.0226 16.55C11.6708 16.7815 11.2438 16.8973 10.7417 16.8973H7.33333ZM8.49878 15.5683H10.5658C10.826 15.5683 11.0587 15.5082 11.264 15.388C11.4729 15.2678 11.636 15.0964 11.7533 14.8738C11.8742 14.6467 11.9347 14.3774 11.9347 14.0658C11.9347 13.7764 11.8815 13.5159 11.7752 13.2844C11.6726 13.0485 11.5224 12.8637 11.3245 12.7301C11.1302 12.5921 10.9012 12.5231 10.6373 12.5231H8.49878V15.5683ZM8.49878 11.2075H10.4284C10.6409 11.2075 10.8315 11.1563 11.0001 11.0539C11.1724 10.9471 11.308 10.7957 11.4069 10.5998C11.5095 10.3995 11.5608 10.1591 11.5608 9.8786C11.5608 9.50462 11.4582 9.19743 11.253 8.95702C11.0477 8.71661 10.7729 8.5964 10.4284 8.5964H8.49878V11.2075Z"
                                        fill="white" />
                                    <path d="M6 9.59589H8.22222V10.3082H6V9.59589Z" fill="white" />
                                    <path d="M6 14.0479H8.22222V14.7603H6V14.0479Z" fill="white" />
                                    <path d="M9.55556 5.5H10.1481V8.17123H9.55556V5.5Z" fill="white" />
                                    <path d="M9.55556 15.8288H10.1481V18.5H9.55556V15.8288Z" fill="white" />
                                    <path d="M11.7778 9.59589H14V10.3082H11.7778V9.59589Z" fill="white" />
                                    <path d="M12.0741 14.0479H14V14.7603H12.0741V14.0479Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_604_1812" x="0.7" y="0.2" width="18.6" height="23.6"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="2.65" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_604_1812" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_604_1812"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            <span class="mono">${getFormattedTokensAward(dailyReward.value)}</span>
                        </span>

                        <span class="plus">+</span>

                        <span class="finally__reward__content additionally__reward flex align__center">
                            <img src="/static/img/money__2.png" alt="Reward preview" />
                            <span>3 Boost</span>
                        </span>
                    </div>

                    <div
                        class="get__reward__button flex align__center justify__center daily__button text__uppercase">
                        <span>День 31</span>
                    </div>
`
    )

    dailyRewardsContainer.appendChild(dailyRewardContainer)
}

async function getDailyRewards() {
    try {
        preloader.setActive()
        const responseToDailyRewardsData = await fetch('https://tapalka.wizardstech.ru:8443/api/daily-rewards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        }).then((res) => res.json())
        const responseToUserStats = await fetch('https://tapalka.wizardstech.ru:8443/api/daily-rewards/user-info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        }).then((res) => res.json())

        dailyRewardsContainer.innerHTML = ``

        dailyCombo = responseToUserStats.current_combo
        nextDailyReward = responseToUserStats.next_reward

        responseToDailyRewardsData.rewards.map((dailyReward) => createDailyReward(dailyReward, nextDailyReward))

        homePageCurrentDayValue.textContent = `День ${dailyCombo}`
        console.log(responseToDailyRewardsData)
        console.log(responseToUserStats)
    } catch (error) {
        console.log(`Error: ${error}`)
    } finally {
        preloader.setInactive()
    }
}

getDailyRewards()