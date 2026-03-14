import React from 'react'
import Checkbox from '../../../ui/Checkbox'

const OrderList: React.FC = () => {
    return (
        <div className='lg:pt-[32px] pt-[20px] lg:pl-[24px] pl-[16px] lg:pr-[24px] pr-[16px] pb-[50px] lg:pb-[20px] flex gap-[12px] overflow-x-scroll'>
            <div className='flex flex-col p-[20px] rounded-[16px] bg-white shadow-[0_0_25.8px_0_#0f0f2b26] min-w-[359px] max-w-[359px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px]'>
                        <div className='h-[20px] w-[4px] rounded bg-[#1D7BFF]' />
                        <span className='h-[19px] font-medium text-[16px] text-[#333333]'>
                            Новые
                        </span>

                        <span className='px-[6px] h-[24px] bg-[#B9B9B91A] rounded-[8px] flex items-center justify-center font-medium text-[14px] text-[#B9B9B9] min-w[28px]'>
                            13
                        </span>
                    </div>

                    <button type='button' className='bg-none outline-none border-none cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_351_1425)">
                                <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#B9B9B9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_1425">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className='mt-[24px] flex flex-col gap-[16px]'>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col p-[20px] rounded-[16px] bg-white shadow-[0_0_25.8px_0_#0f0f2b26] min-w-[359px] max-w-[359px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px]'>
                        <div className='h-[20px] w-[4px] rounded bg-[#FFC31D]' />
                        <span className='h-[19px] font-medium text-[16px] text-[#333333]'>
                            Проверка
                        </span>

                        <span className='px-[6px] h-[24px] bg-[#B9B9B91A] rounded-[8px] flex items-center justify-center font-medium text-[14px] text-[#B9B9B9] min-w[28px]'>
                            13
                        </span>
                    </div>

                    <button type='button' className='bg-none outline-none border-none cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_351_1425)">
                                <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#B9B9B9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_1425">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className='mt-[24px] flex flex-col gap-[16px]'>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col p-[20px] rounded-[16px] bg-white shadow-[0_0_25.8px_0_#0f0f2b26] min-w-[359px] max-w-[359px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px]'>
                        <div className='h-[20px] w-[4px] rounded bg-[#47D40A]' />
                        <span className='h-[19px] font-medium text-[16px] text-[#333333]'>
                            Склад в Китае
                        </span>

                        <span className='px-[6px] h-[24px] bg-[#B9B9B91A] rounded-[8px] flex items-center justify-center font-medium text-[14px] text-[#B9B9B9] min-w[28px]'>
                            13
                        </span>
                    </div>

                    <button type='button' className='bg-none outline-none border-none cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_351_1425)">
                                <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#B9B9B9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_1425">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className='mt-[24px] flex flex-col gap-[16px]'>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col p-[20px] rounded-[16px] bg-white shadow-[0_0_25.8px_0_#0f0f2b26] min-w-[359px] max-w-[359px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px]'>
                        <div className='h-[20px] w-[4px] rounded bg-[#ED0028]' />
                        <span className='h-[19px] font-medium text-[16px] text-[#333333]'>
                            В пути
                        </span>

                        <span className='px-[6px] h-[24px] bg-[#B9B9B91A] rounded-[8px] flex items-center justify-center font-medium text-[14px] text-[#B9B9B9] min-w[28px]'>
                            13
                        </span>
                    </div>

                    <button type='button' className='bg-none outline-none border-none cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_351_1425)">
                                <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#B9B9B9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_1425">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className='mt-[24px] flex flex-col gap-[16px]'>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col p-[20px] rounded-[16px] bg-white shadow-[0_0_25.8px_0_#0f0f2b26] min-w-[359px] max-w-[359px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px]'>
                        <div className='h-[20px] w-[4px] rounded bg-[#A200ED]' />
                        <span className='h-[19px] font-medium text-[16px] text-[#333333]'>
                            Пункт выдачи
                        </span>

                        <span className='px-[6px] h-[24px] bg-[#B9B9B91A] rounded-[8px] flex items-center justify-center font-medium text-[14px] text-[#B9B9B9] min-w[28px]'>
                            13
                        </span>
                    </div>

                    <button type='button' className='bg-none outline-none border-none cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_351_1425)">
                                <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#B9B9B9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_1425">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className='mt-[24px] flex flex-col gap-[16px]'>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                    <div className='relative rounded-[16px] border border-[#F1F1F1] bg-[#FDFDFD] grow overflow-hidden'>
                        <div className='w-full overflow-hidden h-[48px] px-[16px] items-center justify-between bg-[#B9B9B91A] flex'>
                            <div className='flex items-center'>
                                <span className='text-[14px] h-[17px] text-[#B9B9B9]'>
                                    Таможня:&nbsp;
                                </span>
                                <span className='text-[14px] h-[17px] text-[#9B9B9B]'>
                                    Иванов Иван Иванович
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='mt-[20px] mx-[16px] font-medium text-[16px] leading-[140%] text-[#333333] block'>
                            Рюкзак Camel Красный Жосткий Мощний Крутой будильник 52.
                        </span>

                        <div className='flex flex-col mt-[20px] mx-[16px] gap-[8px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Трек-номер
                            </span>

                            <div className='relative h-[40px] grow flex items-center justify-between border border-[#B9B9B933] rounded-[10px] px-[12px] bg-[#F9F9F9]'>
                                <span className='font-medium text-[16px] text-[#B9B9B9] h-[22px]'>
                                    #YT543287916CN
                                </span>

                                <button type='button' className='outline-none border-none bg-none cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.25 2.8125C6.25 1.94917 6.95 1.25 7.8125 1.25H8.125C8.9538 1.25 9.74866 1.57924 10.3347 2.16529C10.9208 2.75134 11.25 3.5462 11.25 4.375V5.9375C11.25 6.80083 11.95 7.5 12.8125 7.5H14.375C15.2038 7.5 15.9987 7.82924 16.5847 8.41529C17.1708 9.00134 17.5 9.7962 17.5 10.625V13.4375C17.5 14.3 16.8 15 15.9375 15H7.8125C7.3981 15 7.00067 14.8354 6.70765 14.5424C6.41462 14.2493 6.25 13.8519 6.25 13.4375V2.8125Z" fill="#B9B9B9" />
                                        <path d="M12.5 4.375C12.5015 3.32379 12.1229 2.30747 11.4342 1.51334C12.8286 1.87997 14.1006 2.6104 15.1201 3.62991C16.1396 4.64942 16.87 5.92143 17.2367 7.31584C16.4425 6.62707 15.4262 6.24854 14.375 6.25H12.8125C12.7296 6.25 12.6501 6.21708 12.5915 6.15847C12.5329 6.09987 12.5 6.02038 12.5 5.9375V4.375ZM4.0625 5H5V13.4375C5 14.1834 5.29632 14.8988 5.82376 15.4262C6.35121 15.9537 7.06658 16.25 7.8125 16.25H13.75V17.1875C13.75 18.05 13.05 18.75 12.1875 18.75H4.0625C3.6481 18.75 3.25067 18.5854 2.95765 18.2924C2.66462 17.9993 2.5 17.6019 2.5 17.1875V6.5625C2.5 5.69917 3.2 5 4.0625 5Z" fill="#B9B9B9" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-[20px] py-[12px] border-t border-dashed border-[#E7E7E7] flex justify-between px-[16px]'>
                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                Стоимость
                            </span>

                            <span className='text-[13px] text-[#B9B9B9] h-[16px]'>
                                74 900 ¥
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderList
