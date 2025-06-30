document.addEventListener('DOMContentLoaded', function () {
    const swiperContainers = document.querySelectorAll('.swiper-container')

    swiperContainers.forEach((swiperContainer, index) => {
        if (!swiperContainer) return

        const slidesPerView = index === 0 ? 4 : 2.8

        const swiper = new Swiper(swiperContainer, {
            slidesPerView: slidesPerView,
            spaceBetween: 8,
            resistance: true,
            resistanceRatio: 0.6,
            simulateTouch: true,
            touchRatio: 1,
            direction: 'horizontal',
            watchOverflow: true,
            freeMode:true,

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
})