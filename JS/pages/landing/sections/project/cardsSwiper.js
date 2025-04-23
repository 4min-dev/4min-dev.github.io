document.addEventListener('DOMContentLoaded', function () {
    const swiperContainers = document.querySelectorAll('.swiper-container')

    function getSwiperOptions(swiperContainer) {

        if(swiperContainer.classList.contains('team__cards__container')) {
            if (window.innerWidth <= 1024) {
                return {
                    slidesPerView: 1.85,
                    spaceBetween: 12
                }
            } else {
                return {
                    slidesPerView: "auto",
                    spaceBetween: 12
                }
            }
        } else {
            if (window.innerWidth <= 1024) {
                return {
                    slidesPerView: 1.3,
                    spaceBetween: 20
                }
            } else {
                return {
                    slidesPerView: 2.8,
                    spaceBetween: 40
                }
            }
        }
    }

    swiperContainers.forEach((swiperContainer, index) => {
        if (!swiperContainer) return

        const { slidesPerView, spaceBetween } = getSwiperOptions(swiperContainer)

        const swiper = new Swiper(swiperContainer, {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            resistance: true,
            resistanceRatio: 0.6,
            simulateTouch: true,
            touchRatio: 1,
            direction: 'horizontal',
            watchOverflow: true,
            freeMode: true,

            mousewheel: {
                enabled: true,
                forceToAxis: true,
                sensitivity: 1,
            },

            on: {
                sliderFirstMove: function () {
                    swiperContainer.style.cursor = 'grabbing'
                },
                sliderMove: function () {
                    swiperContainer.style.cursor = 'grabbing'
                },
                slideChangeTransitionEnd: function () {
                    swiperContainer.style.cursor = 'grab'
                },
                touchEnd: function () {
                    swiperContainer.style.cursor = 'grab'
                },
            },
        })

        swiperContainer.style.cursor = 'grab'
    })

    window.addEventListener('resize', function() {
        swiperContainers.forEach((swiperContainer) => {
            const { slidesPerView, spaceBetween } = getSwiperOptions()
            const swiper = swiperContainer.swiper

            swiper.params.slidesPerView = slidesPerView
            swiper.params.spaceBetween = spaceBetween
            swiper.update()
        })
    })
})