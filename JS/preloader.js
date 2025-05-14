const preloaderContainer = document.querySelector('.loader__popup__overlay')

class Preloader {
    constructor() {
        this.activeRequests = 0
    }

    setActive() {
        this.activeRequests += 1
        if (!preloaderContainer.classList.contains('visible')) {
            preloaderContainer.classList.add('visible')
        }
    }

    setInactive() {
        this.activeRequests -= 1
        if (this.activeRequests <= 0) {
            preloaderContainer.classList.remove('visible')
            this.activeRequests = 0
        }
    }
}

export default Preloader