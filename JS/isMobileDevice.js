function isMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

export { isMobileDevice }