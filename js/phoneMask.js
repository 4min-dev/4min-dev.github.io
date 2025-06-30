document.addEventListener("DOMContentLoaded", () => {
    const phoneInputs = document.querySelectorAll(".phone__number__input")

    phoneInputs.forEach((phoneInput) => {
        if (!phoneInput) return

        phoneInput.addEventListener("input", onPhoneInput)
        phoneInput.addEventListener("keydown", onPhoneKeyDown)
        phoneInput.addEventListener("paste", onPhonePaste)

        function onPhoneInput(e) {
            let value = phoneInput.value.replace(/\D/g, "")

            if (value.length > 11) {
                value = value.slice(0, 11)
            }

            if (value && value[0] !== "7") {
                value = "7" + value
            }

            phoneInput.value = formatPhoneNumber(value)
        }

        function formatPhoneNumber(value) {
            const country = value[0] === "7" ? "+7" : ""

            // Форматирование номера по шаблону +7(___)___-__-__
            const formatted = [
                country,
                value.substring(1, 4) ? `(${value.substring(1, 4)}` : "",
                value.substring(4, 7) ? `)${value.substring(4, 7)}` : "",
                value.substring(7, 9) ? `-${value.substring(7, 9)}` : "",
                value.substring(9, 11) ? `-${value.substring(9, 11)}` : ""
            ].join("")

            return formatted
        }

        function onPhoneKeyDown(e) {
            // Для того, чтобы разрешить только Backspace, Delete, Tab, Enter, стрелки, либо ввод цифр
            if (
                !e.key.match(/\d/) &&
                ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"].indexOf(e.key) === -1
            ) {
                e.preventDefault()
            }

            // Останавливаем ввод, если уже введено 11 цифр
            const value = phoneInput.value.replace(/\D/g, "")
            if (value.length >= 11 && e.key.match(/\d/)) {
                e.preventDefault()
            }
        }

        function onPhonePaste(e) {
            const pastedData = (e.clipboardData || window.clipboardData).getData("Text")
            const sanitizedData = pastedData.replace(/\D/g, "")

            if (sanitizedData && sanitizedData[0] !== "7") {
                sanitizedData = "7" + sanitizedData // Подставляем 7, если номер некорректен
            }

            phoneInput.value = formatPhoneNumber(sanitizedData)
            e.preventDefault()
        }

        phoneInput.value = formatPhoneNumber(phoneInput.value.replace(/\D/g, ""))
    })
})