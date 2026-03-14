import React from 'react'
import SearchInput from '../../../ui/SearchInput'
import isMobileDevice from '../../../assets/isMobileDevice'

type OrdersHeadingProps = {
    handleSetActiveNewOrderPopup: () => void
}

const OrdersHeading: React.FC<OrdersHeadingProps> = ({ handleSetActiveNewOrderPopup }) => {
    const isMobile = isMobileDevice()

    return (
        <div className='flex flex-col lg:mt-[20px] lg:pr-[24px] lg:pl-[24px] mt-[32px] pr-[16px] pl-[16px]'>
            <span className='font-medium text-[24px] text-[#33331F]'>
                Мои заказы
            </span>

            <div className='flex justify-between mt-[16px] flex-wrap lg:flex-nowrap'>
                <div className='flex lg:gap-x-[9px] lg:gap-y-[9px] gap-x-[9px] gap-y-[12px] flex-wrap lg:flex-nowrap'>
                    <button type='button' className='h-[44px] lg:w-[164px] w-[46.37%] items-center justify-center gap-[8px] flex font-medium text-[16px] text-[#FCFDFF] bg-[#ED0028] border-none outline-none rounded-[10px] cursor-pointer order-[-1] lg:order-none' onClick={handleSetActiveNewOrderPopup}>
                        <svg className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#FCFDFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Новый заказ
                    </button>

                    <button type='button' className='h-[44px] w-full lg:w-[209px] items-center justify-center gap-[8px] flex font-medium text-[16px] text-[#333333] bg-white border border-[#F1F1F1] outline-none rounded-[10px] cursor-pointer'>
                        <svg className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_708_372)">
                                <path d="M2 3V2.25C1.58579 2.25 1.25 2.58579 1.25 3H2ZM13 3H13.75C13.75 2.58579 13.4142 2.25 13 2.25V3ZM13 9V8.25C12.8011 8.25 12.6103 8.32902 12.4697 8.46967C12.329 8.61032 12.25 8.80109 12.25 9H13ZM2 3V3.75H13V3V2.25H2V3ZM13 3H12.25V19H13H13.75V3H13ZM2 17H2.75V3H2H1.25V17H2ZM13 9V9.75H18V9V8.25H13V9ZM22 13H21.25V17H22H22.75V13H22ZM13 19H13.75L13.75 9H13H12.25L12.25 19H13ZM19.4142 20.4142L18.8839 19.8839C18.3957 20.372 17.6043 20.372 17.1161 19.8839L16.5858 20.4142L16.0555 20.9445C17.1294 22.0185 18.8706 22.0185 19.9445 20.9445L19.4142 20.4142ZM16.5858 17.5858L17.1161 18.1161C17.6043 17.628 18.3957 17.628 18.8839 18.1161L19.4142 17.5858L19.9445 17.0555C18.8706 15.9815 17.1294 15.9815 16.0555 17.0555L16.5858 17.5858ZM7.41421 20.4142L6.88388 19.8839C6.39573 20.372 5.60427 20.372 5.11612 19.8839L4.58579 20.4142L4.05546 20.9445C5.1294 22.0185 6.8706 22.0185 7.94454 20.9445L7.41421 20.4142ZM4.58579 17.5858L5.11612 18.1161C5.60427 17.628 6.39573 17.628 6.88388 18.1161L7.41421 17.5858L7.94454 17.0555C6.8706 15.9815 5.1294 15.9815 4.05546 17.0555L4.58579 17.5858ZM19.4142 17.5858L18.8839 18.1161C19.1281 18.3603 19.25 18.6789 19.25 19H20H20.75C20.75 18.2974 20.4814 17.5923 19.9445 17.0555L19.4142 17.5858ZM20 19H19.25C19.25 19.3211 19.1281 19.6397 18.8839 19.8839L19.4142 20.4142L19.9445 20.9445C20.4814 20.4077 20.75 19.7026 20.75 19H20ZM16 19V18.25H13V19V19.75H16V19ZM16.5858 20.4142L17.1161 19.8839C16.8719 19.6397 16.75 19.3211 16.75 19H16H15.25C15.25 19.7026 15.5186 20.4077 16.0555 20.9445L16.5858 20.4142ZM16 19H16.75C16.75 18.6789 16.8719 18.3603 17.1161 18.1161L16.5858 17.5858L16.0555 17.0555C15.5186 17.5923 15.25 18.2974 15.25 19H16ZM4.58579 20.4142L5.11612 19.8839C4.87189 19.6397 4.75 19.3211 4.75 19H4H3.25C3.25 19.7026 3.51863 20.4077 4.05546 20.9445L4.58579 20.4142ZM4 19H4.75C4.75 18.6789 4.87189 18.3603 5.11612 18.1161L4.58579 17.5858L4.05546 17.0555C3.51863 17.5923 3.25 18.2974 3.25 19H4ZM13 19V18.25H8V19V19.75H13V19ZM7.41421 17.5858L6.88388 18.1161C7.12811 18.3603 7.25 18.6789 7.25 19H8H8.75C8.75 18.2974 8.48137 17.5923 7.94454 17.0555L7.41421 17.5858ZM8 19H7.25C7.25 19.3211 7.12811 19.6397 6.88388 19.8839L7.41421 20.4142L7.94454 20.9445C8.48137 20.4077 8.75 19.7026 8.75 19H8ZM22 17H21.25C21.25 17.6904 20.6904 18.25 20 18.25V19V19.75C21.5188 19.75 22.75 18.5188 22.75 17H22ZM18 9V9.75C19.7949 9.75 21.25 11.2051 21.25 13H22H22.75C22.75 10.3766 20.6234 8.25 18 8.25V9ZM2 17H1.25C1.25 18.5188 2.48122 19.75 4 19.75V19V18.25C3.30964 18.25 2.75 17.6904 2.75 17H2Z" fill={isMobile ? '#ED0028' : '#333333'} />
                            </g>
                            <defs>
                                <clipPath id="clip0_708_372">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        Заказать доставку
                    </button>

                    <button type='button' className='h-[44px] w-full lg:w-[137px] items-center justify-center gap-[8px] flex font-medium text-[16px] text-[#333333] bg-white border border-[#F1F1F1] outline-none rounded-[10px] cursor-pointer'>
                        Оплатить все
                    </button>

                    <button type='button' className='h-[44px] lg:w-[195px] w-[51.12%] items-center justify-center gap-[8px] flex font-medium text-[16px] text-[#333333] bg-white border border-[#F1F1F1] outline-none rounded-[10px] cursor-pointer order-[-1] lg:order-none'>
                        <svg className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.375 19.5H20.625M3.375 19.5C3.07663 19.5 2.79048 19.3815 2.5795 19.1705C2.36853 18.9595 2.25 18.6734 2.25 18.375M3.375 19.5H10.875C11.496 19.5 12 18.996 12 18.375M20.625 19.5C21.246 19.5 21.75 18.996 21.75 18.375M20.625 19.5H13.125C12.8266 19.5 12.5405 19.3815 12.3295 19.1705C12.1185 18.9595 12 18.6734 12 18.375M2.25 18.375V5.625M2.25 18.375V16.875C2.25 16.254 2.754 15.75 3.375 15.75M12 18.375V16.875M2.25 5.625C2.25 5.004 2.754 4.5 3.375 4.5H20.625C21.246 4.5 21.75 5.004 21.75 5.625M2.25 5.625V7.125C2.25 7.746 2.754 8.25 3.375 8.25M3.375 15.75C2.754 15.75 2.25 15.246 2.25 14.625V13.125C2.25 12.504 2.754 12 3.375 12M3.375 15.75H10.875M21.75 18.375V5.625M21.75 18.375V16.875C21.75 16.254 21.246 15.75 20.625 15.75M21.75 5.625V7.125C21.75 7.746 21.246 8.25 20.625 8.25M20.625 15.75C21.246 15.75 21.75 15.246 21.75 14.625V13.125C21.75 12.504 21.246 12 20.625 12M20.625 15.75H13.125M20.625 8.25H3.375M20.625 8.25H13.125C12.504 8.25 12 8.754 12 9.375M20.625 8.25C21.246 8.25 21.75 8.754 21.75 9.375V10.875C21.75 11.496 21.246 12 20.625 12M3.375 8.25H10.875C11.496 8.25 12 8.754 12 9.375M3.375 8.25C2.754 8.25 2.25 8.754 2.25 9.375V10.875C2.25 11.496 2.754 12 3.375 12M12 9.375V10.875M3.375 12H10.875M20.625 12H13.125M10.875 12C11.496 12 12 11.496 12 10.875M10.875 12C11.496 12 12 12.504 12 13.125M12 10.875C12 11.496 12.504 12 13.125 12M13.125 12C12.504 12 12 12.504 12 13.125M12 13.125V14.625M10.875 15.75C11.496 15.75 12 15.246 12 14.625M10.875 15.75C11.496 15.75 12 16.254 12 16.875M12 14.625C12 15.246 12.504 15.75 13.125 15.75M13.125 15.75C12.504 15.75 12 16.254 12 16.875" stroke={isMobile ? '#47D40A' : '#333333'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Скачать таблицу
                    </button>
                </div>

                <SearchInput className='lg:w-[287px] w-full mt-[12px] lg:mt-0 order-[4] lg:order-none' />
            </div>
        </div>
    )
}

export default OrdersHeading
