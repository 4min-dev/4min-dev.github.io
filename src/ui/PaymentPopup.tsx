import React from 'react'

const PaymentPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 md:items-center" onClick={onClose}>
            <div className='lg:w-[408px] w-full p-[20px] mx-[16px] lg:mx-0 bg-white rounded-[20px] shadow-[0_0_25.8px_0_#0f0f2b26]' onClick={(e) => e.stopPropagation()}>
                <div className='flex w-full items-center justify-between'>
                    <span className='font-semibold text-[20px] ;g:text-[28px] text-[#33331F]'>
                        Пополнение баланса
                    </span>

                    <button type='button' className='outline-none border-none bg-none cursor-pointer' onClick={onClose}>
                        <svg className='w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 7L17 17M7 17L17 7" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className='mt-[16px] lg:mt-[24px] flex flex-col gap-[8px]'>
                    <input type='number' className='h-[44px] flex items-center px-[12px] outline-none border border-[#B9B9B966] rounded-[10px] bg-none text-[15px] lg:text-[16px] text-[#333333]' placeholder='Введите сумму' />

                    <div className='flex items-center justify-between'>
                        <span className='text-[13px] lg:text-[14px] text-[#B9B9B9]'>
                            Рекомендуемая сумма пополнения
                        </span>

                        <span className='font-medium text-[13px] lg:text-[14px] text-[#ED0028]'>
                            39 900 ₽
                        </span>
                    </div>
                </div>

                <div className='flex flex-wrap mt-[24px] gap-[8px]'>
                    <button type='button' className='outline-none border-2 border-[#ED0028] rounded-[16px] flex items-center justify-center cursor-pointer h-[90px] lg:h-[98px] w-[calc(50%-4px)]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M4.7998 10.448L10.6126 20.838V27.1756L4.8066 37.5452L4.7998 10.448Z" fill="#5B57A2" />
                            <path d="M27.1187 17.0574L32.5654 13.719L43.7126 13.7086L27.1187 23.8742V17.0574Z" fill="#D90751" />
                            <path d="M27.0881 10.3868L27.1189 24.1428L21.2925 20.5628V0L27.0885 10.3868H27.0881Z" fill="#FAB718" />
                            <path d="M43.7129 13.7084L32.5653 13.7188L27.0881 10.3868L21.2925 0L43.7125 13.7084H43.7129Z" fill="#ED6F26" />
                            <path d="M27.1189 37.6028V30.9288L21.2925 27.4168L21.2957 48L27.1189 37.6028Z" fill="#63B22F" />
                            <path d="M32.5518 34.2948L10.6122 20.838L4.7998 10.448L43.689 34.2812L32.5514 34.2948H32.5518Z" fill="#1487C9" />
                            <path d="M21.2959 48L27.1183 37.6028L32.5515 34.2948L43.6887 34.2812L21.2959 48Z" fill="#017F36" />
                            <path d="M4.80664 37.545L21.3398 27.417L15.7814 24.0066L10.6126 27.1754L4.80664 37.545Z" fill="#984995" />
                        </svg>
                    </button>

                    <button type='button' className='outline-none border-2 border-[#B9B9B966] rounded-[16px] flex items-center justify-center cursor-pointer h-[98px] w-[calc(50%-4px)]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="93" height="28" viewBox="0 0 93 28" fill="none">
                            <path d="M7.20752 3.02252H14.88C15.5775 3.02252 17.67 2.79002 18.6 6.04502C19.2975 8.13752 20.2275 11.3925 21.6225 16.275H22.0875C23.4825 11.16 24.645 7.67252 25.11 6.04502C26.04 2.79002 28.365 3.02252 29.295 3.02252H36.5025V25.3425H29.0625V12.09H28.5975L24.645 25.3425H19.065L15.1125 12.09H14.415V25.3425H7.20752M39.525 3.02252H46.965V16.275H47.6625L52.545 5.34752C53.475 3.25502 55.5675 3.02252 55.5675 3.02252H62.5425V25.3425H55.1025V12.09H54.6375L49.755 23.0175C48.825 25.11 46.5 25.3425 46.5 25.3425H39.525M72.54 18.6V25.3425H65.565V13.7175H88.35C87.42 16.5075 84.165 18.6 80.445 18.6" fill="#0F754E" />
                            <path d="M88.8151 12.3225C89.7451 8.13752 86.9551 3.02252 80.9101 3.02252H65.1001C65.5651 7.90502 69.7501 12.3225 74.1676 12.3225" fill="url(#paint0_linear_367_1985)" />
                            <defs>
                                <linearGradient id="paint0_linear_367_1985" x1="86.0251" y1="2.20215e-05" x2="67.4251" y2="2.20215e-05" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1F5CD7" />
                                    <stop offset="1" stop-color="#02AEFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className='mt-[20px] flex items-center justify-between'>
                    <div className='flex flex-col gap-[4px]'>
                        <span className='font-medium text-[13px] lg:text-[14px] text-[#B9B9B9]'>
                            К оплате
                        </span>

                        <span className='font-semibold text-[20px] lg:text-[22px] text-[#33331F]'>
                            1 500 ₽
                        </span>
                    </div>

                    <button type='button' className='outline-none border-none w-[148px] lg:w-[156px] h-[44px] text-[#FCFDFF] bg-[#ED0028] rounded-[10px] cursor-pointer font-medium text-[15px] lg:text-[16px]'>
                        Пополнить счёт
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentPopup
