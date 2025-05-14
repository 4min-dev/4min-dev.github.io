function formatDuration(seconds) {
    if (seconds < 0) {
        throw new Error("Время не может быть отрицательным")
    }

    const hours = Math.floor(seconds / 3600)
    const remainingSecondsAfterHours = seconds % 3600
    const minutes = Math.floor(remainingSecondsAfterHours / 60)
    const remainingSeconds = remainingSecondsAfterHours % 60

    if (hours > 0) {
        return `${hours}:${minutes}`
    } else {
        return `${minutes}:${remainingSeconds}`
    }
}

export { formatDuration }