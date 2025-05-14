const waterCountElement = document.querySelector('.current__water__count')

export default function updateWaterValue(waterAmount) {
    waterCountElement.textContent = waterAmount
}