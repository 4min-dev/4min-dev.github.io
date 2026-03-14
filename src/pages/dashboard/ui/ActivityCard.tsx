import React from 'react'

const ActivityCard: React.FC = () => {
    return (
        <div className='flex flex-col p-[20px] bg-white  border border-[#F3F3F3] rounded-[20px]'>
            <div className='flex w-full items-center justify-between'>
                <span className='font-medum text-[16px] text-[#333333] h-[19px] mb-[5px]'>
                    Журнал активности
                </span>

                <button className="flex items-center justify-center gap-[4px] w-[119px] h-[32px] rounded-[10px] bg-[#F6F6F6] font-medium text-[13px] text-[#333333] cursor-pointer whitespace-nowrap ">
                    За этот день
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_351_2315)">
                            <path d="M5.83337 8.33333L10 12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 12.5L14.1667 8.33333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_351_2315">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className='flex flex-col gap-[8px] pr-[12px] overflow-auto mt-[16px] scrollbar-thin
  [&::-webkit-scrollbar]:w-[10px]
  [&::-webkit-scrollbar-track]:bg-[#F5F5F5]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#ED0028]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-button]:hidden max-h-[517px]'>
                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px]  p-[12px] border border-[#F3F3F3] rounded-[12px]'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-[16px] text-[#333333] h-[19px]'>
                            Оплачен заказ #448849
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z" stroke="#B9B9B9" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='text-[13px] text-[#B9B9B9]'>
                            14.12.2025, 23:30:11
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard
