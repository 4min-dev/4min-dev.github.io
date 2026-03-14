import React from 'react'
import isMobileDevice from '../../../assets/isMobileDevice'
import DeliveryCard from './DeliveryCard'
import type { Delivery } from '../../../types/Delivery'

const deliveries: Delivery[] = [
    { id: '#1082', date: '13.12.2025', recipient: 'Пастушков М.Д.', city: 'Сочи', carrier: 'СДЭК', carrierLogo: '/logos/sdek.png', track: '#YT543287916CN', cost: 400, status: 'paid' },
    { id: '#10823', date: '14.12.2025', recipient: 'Пастушков М.Д.', city: 'Сочи', carrier: 'Kit', carrierLogo: '/logos/kit.png', track: '#YT543287916CN', cost: 2440, status: 'partial' },
    { id: '#10824', date: '15.12.2025', recipient: 'Иванов А.В.', city: 'Москва', carrier: 'Энергия', carrierLogo: '/logos/energia.png', track: '#YT543287917CN', cost: 1200, status: 'pending' },
    { id: '#10825', date: '16.12.2025', recipient: 'Смирнов С.П.', city: 'Казань', carrier: 'Почта России', carrierLogo: '/logos/russianpost.png', track: '#YT543287918CN', cost: 3500, status: 'error' },
    { id: '#10826', date: '17.12.2025', recipient: 'Кузнецов А.И.', city: 'Екатеринбург', carrier: 'СДЭК', carrierLogo: '/logos/sdek.png', track: '#YT543287919CN', cost: 2800, status: 'partial' },
    { id: '#10827', date: '18.12.2025', recipient: 'Сидорова Т.М.', city: 'Нижний Новгород', carrier: 'ПЭК', carrierLogo: '/logos/pek.png', track: '#YT543287920CN', cost: 1750, status: 'paid' },
    { id: '#10828', date: '19.12.2025', recipient: 'Федоров И.С.', city: 'Новосибирск', carrier: 'Деловые Линии', carrierLogo: '/logos/dellin.png', track: '#YT543287921CN', cost: 2200, status: 'partial' },
    { id: '#10829', date: '20.12.2025', recipient: 'Семенова Л.В.', city: 'Тюмень', carrier: 'Деловые Линии', carrierLogo: '/logos/dellin.png', track: '#YT543287922CN', cost: 1900, status: 'pending' },
    { id: '#10830', date: '21.12.2025', recipient: 'Григорьев Н.К.', city: 'Владивосток', carrier: 'Энергия', carrierLogo: '/logos/energia.png', track: '#YT543287923CN', cost: 3100, status: 'pending' },
]

const DeliveryTable: React.FC = () => {
    const isMobile = isMobileDevice()

    return (
        <div className="w-full flex flex-col gap-[8px] lg:block lg:px-[24px] px-[16px] pt-[20px] lg:pt-0 shadow-sm border border-[#F3F3F3]">
            {
                !isMobile && (
                    <div className="grid grid-cols-12 gap-4 h-[48px] items-center mt-[24px] px-[16px] bg-[#F4F4F4] border-b border-[#F3F3F3] rounded-[8px]">
                        <div className="col-span-1 text-[16px] opacity-[60%] font-medium text-[#333333] flex items-center gap-[5px]">ID Доставки <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5298 3.47001C10.3892 3.32956 10.1986 3.25067 9.99985 3.25067C9.8011 3.25067 9.61047 3.32956 9.46985 3.47001L6.21985 6.72001C6.08737 6.86219 6.01524 7.05023 6.01867 7.24453C6.0221 7.43884 6.10081 7.62422 6.23822 7.76163C6.37564 7.89905 6.56102 7.97776 6.75532 7.98119C6.94963 7.98461 7.13767 7.91249 7.27985 7.78001L9.99985 5.06001L12.7198 7.78001C12.7885 7.8537 12.8713 7.9128 12.9633 7.95379C13.0553 7.99478 13.1546 8.01683 13.2553 8.0186C13.356 8.02038 13.4561 8.00186 13.5494 7.96413C13.6428 7.92641 13.7277 7.87027 13.7989 7.79905C13.8701 7.72783 13.9262 7.643 13.964 7.54961C14.0017 7.45622 14.0202 7.35619 14.0184 7.25549C14.0167 7.15479 13.9946 7.05547 13.9536 6.96347C13.9126 6.87147 13.8535 6.78867 13.7798 6.72001L10.5298 3.47001ZM6.21985 13.28L9.46985 16.53C9.61047 16.6705 9.8011 16.7494 9.99985 16.7494C10.1986 16.7494 10.3892 16.6705 10.5298 16.53L13.7798 13.28C13.8535 13.2113 13.9126 13.1285 13.9536 13.0365C13.9946 12.9446 14.0167 12.8452 14.0184 12.7445C14.0202 12.6438 14.0017 12.5438 13.964 12.4504C13.9262 12.357 13.8701 12.2722 13.7989 12.201C13.7277 12.1298 13.6428 12.0736 13.5494 12.0359C13.4561 11.9982 13.356 11.9796 13.2553 11.9814C13.1546 11.9832 13.0553 12.0052 12.9633 12.0462C12.8713 12.0872 12.7885 12.1463 12.7198 12.22L9.99985 14.94L7.27985 12.22C7.13767 12.0875 6.94963 12.0154 6.75532 12.0188C6.56102 12.0223 6.37564 12.101 6.23822 12.2384C6.10081 12.3758 6.0221 12.5612 6.01867 12.7555C6.01524 12.9498 6.08737 13.1378 6.21985 13.28Z" fill="black" fill-opacity="0.4" />
                        </svg></div>
                        <div className="col-span-2 text-[16px] opacity-[60%] font-medium text-[#333333]">Дата создания</div>
                        <div className="col-span-2 text-[16px] opacity-[60%] font-medium text-[#333333]">Получатель</div>
                        <div className="col-span-2 text-[16px] opacity-[60%] font-medium text-[#333333]">Город</div>
                        <div className="col-span-1 text-[16px] opacity-[60%] font-medium text-[#333333]">ТК</div>
                        <div className="col-span-2 text-[16px] opacity-[60%] font-medium text-[#333333]">Трек-номер</div>
                        <div className="col-span-2 text-[16px] opacity-[60%] font-medium text-[#333333]">Стоимость</div>
                    </div>
                )
            }

            {deliveries.map((delivery) => (
                <DeliveryCard key={delivery.id} delivery={delivery} />
            ))}
        </div>
    )
}

export default DeliveryTable