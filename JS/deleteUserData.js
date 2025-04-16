document.addEventListener('DOMContentLoaded', () => {
    const deleteDataButton = document.querySelector('.delete__user__data__button')

    async function handleDeleteUserData() {
        try {
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me/profile', {
                method: 'DELETE'
            })
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            window.location.reload()
            return data
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    deleteDataButton.addEventListener('click', handleDeleteUserData)
})