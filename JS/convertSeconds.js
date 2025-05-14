function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600)
    if (hours > 0) {
        return `${hours}ч`
    }

    const minutes = Math.floor(seconds / 60)
    if (minutes > 0) {
        return `${minutes}м`
    }

    return `${seconds}с`
}

export { convertSeconds }