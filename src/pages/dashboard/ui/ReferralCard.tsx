import React from 'react'

const ReferralCard: React.FC = () => {

    return (
        <div>
            <div className='flex flex-col p-[20px] bg-white border border-[#F3F3F3] rounded-[20px]'>
                <span className='font-medum text-[16px] text-[#333333] h-[19px]'>
                    Реферальная система
                </span>

                <div className='flex lg:gap-[12px] lg:mt-[27px] justify-between'>
                    <div className='lg:w-[230px] lg:h-[230px] border border-[#F3F3F3] lg:rounded-[16px] flex items-center justify-center'>
                        <img src='images/QR.png' className='w-[200.99px] h-[200.99px]' alt='QR' />
                    </div>

                    <div className='flex flex-col lg:gap-[12px] w-[266px] justify-between'>
                        <div className='flex flex-col border border-[#F3F3F3] lg:rounded-[16px] pt-[20px] pl-[20px] pr-[20px] pb-[16px] w-full'>
                            <div className='flex flex-col '>
                                <span className='lg:h-[22px] h-[18px] w-fit lg:py-[3.5px] lg:px-[6px] rounded-[12px] lg:min-w-[63px] py-[3px] px-[4px] min-w-[55px] flex items-center justify-center bg-[#1D7BFF] text-[13px] text-white'>
                                    163 реферала
                                </span>

                                <div className='flex flex-col lg:gap-[6px] mt-[8px]'>
                                    <span className='lg:text-[24px] h-[29px] font-semibold text-[#333333]'>
                                        4 000 000 ₽
                                    </span>

                                    <span className='lg:text-[14px] text-[#B9B9B9] h-[17px]'>
                                        Заработано с рефералов
                                    </span>
                                </div>

                                <a href='#' className='h-[32px] flex justify-between align-end border-t border-dashed border-[#E7E7E7] mt-[20px] pt-[12px]'>
                                    <span className='lg:text-[16px] text-[#333333] font-medium'>
                                        О программе
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5667 9.55837C13.6837 9.67556 13.7495 9.83441 13.7495 10C13.7495 10.1657 13.6837 10.3245 13.5667 10.4417L7.3167 16.6917C7.19822 16.8021 7.04152 16.8622 6.8796 16.8593C6.71768 16.8565 6.56319 16.7909 6.44868 16.6764C6.33417 16.5619 6.26858 16.4074 6.26572 16.2455C6.26287 16.0836 6.32297 15.9268 6.43337 15.8084L12.2417 10L6.43337 4.1917C6.32297 4.07322 6.26287 3.91652 6.26572 3.7546C6.26858 3.59268 6.33417 3.43819 6.44868 3.32368C6.56319 3.20917 6.71768 3.14358 6.8796 3.14072C7.04152 3.13787 7.19822 3.19797 7.3167 3.30837L13.5667 9.55837Z" fill="#B9B9B9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <button type='button' className='lg:h-[48px] w-full lg:rounded-[12px] bg-[#ED0028] flex items-center justify-center lg:gap-[8px] cursor-pointer'>
                            <span className='lg:text-[16px] font-medium text-white'>
                                Скопировать ссылку
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="white" />
                                <path d="M12.5 4.37503C12.5015 3.32382 12.1229 2.3075 11.4342 1.51337C12.8286 1.88 14.1006 2.61043 15.1201 3.62994C16.1396 4.64945 16.87 5.92146 17.2367 7.31587C16.4425 6.6271 15.4262 6.24857 14.375 6.25003H12.8125C12.7296 6.25003 12.6501 6.21711 12.5915 6.1585C12.5329 6.0999 12.5 6.02041 12.5 5.93753V4.37503ZM4.0625 5.00003H5V13.4375C5 14.1835 5.29632 14.8988 5.82376 15.4263C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9994 2.5 17.6019 2.5 17.1875V6.56253C2.5 5.6992 3.2 5.00003 4.0625 5.00003Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferralCard
