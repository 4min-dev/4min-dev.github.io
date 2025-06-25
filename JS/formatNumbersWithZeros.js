export default function  (num) {
    let str = num.toString()

    let formatted = str.split('').map(char => {
        if (char === '0') {
            return '<span class="mono">0</span>'
        } else {
            return char
        }
    })

    let result = []
    let count = 0
    for (let i = formatted.length - 1; i >= 0; i--) {
        result.unshift(formatted[i])
        count++
        if (count % 3 === 0 && i !== 0) {
            result.unshift(' ')
        }
    }

    return result.join('')
}