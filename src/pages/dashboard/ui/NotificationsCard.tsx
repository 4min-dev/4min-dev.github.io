import React from 'react'
import SearchInput from '../../../ui/SearchInput'
import isMobileDevice from '../../../assets/isMobileDevice'
import Checkbox from '../../../ui/Checkbox'

const NotificationsCard: React.FC = () => {

    const isMobile = isMobileDevice()

    return (
        <div className='flex flex-col p-[20px] bg-white  border border-[#F3F3F3] rounded-[20px]'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex items-center gap-[8px]'>
                    <span className='font-medum text-[16px] text-[#333333] h-[19px] mb-[5px]'>
                        Уведомления
                    </span>

                    <span className='flex items-center justify-center h-[24px] rounded-[8px] bg-[#B9B9B91A] font-medium text-[14px] text-[#B9B9B9] px-[6px] min-w-[28px]'>
                        13
                    </span>
                </div>
            </div>

            <div className='mt-[16px] flex flex-col lg:flex-row'>
                <SearchInput className='w-full lg:w-[209px]' placeholder='Ключевые слова' />
                <hr className='hidden lg:block w-[2px] h-full border-none bg-[#B9B9B9] opacity-[20%] ml-[16px] mr-[16px]' />

                <div className='flex mt-[8px] lg:mt-0 grow'>
                    <button type='button' className='flex items-center justify-center grow h-[44px] gap-[8px] border border-[#B9B9B980] rounded-[10px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.3291 1.94341C11.4429 1.90776 12.558 1.90776 13.6719 1.94341C15.0381 1.98693 16.0828 3.12679 16.083 4.47758V5.08501L16.4619 5.12016C17.7497 5.23793 19.0324 5.40748 20.3066 5.62798C20.3498 5.63545 20.3917 5.65047 20.4287 5.67387C20.4656 5.69723 20.4973 5.72805 20.5225 5.76372C20.5477 5.7995 20.5656 5.84016 20.5752 5.88286C20.5848 5.92554 20.5856 5.96963 20.5781 6.01274C20.5707 6.05584 20.5546 6.09687 20.5312 6.13383C20.5079 6.17076 20.4781 6.20337 20.4424 6.22856C20.4066 6.25376 20.3659 6.27169 20.3232 6.2813C20.2806 6.29088 20.2364 6.29166 20.1934 6.28423H20.1904L19.9814 6.24907L19.5322 6.17387L19.498 6.62798L18.4922 19.6983C18.4422 20.3471 18.1493 20.9534 17.6719 21.3956C17.1944 21.8376 16.5677 22.083 15.917 22.0831H8.08398C7.43327 22.083 6.80657 21.8376 6.3291 21.3956C5.85165 20.9534 5.55874 20.3471 5.50879 19.6983L4.50293 6.62798L4.46777 6.17387L4.01855 6.24907L3.80957 6.28423H3.80664C3.76358 6.29166 3.7194 6.29088 3.67676 6.2813C3.63408 6.27169 3.59337 6.25376 3.55762 6.22856C3.48546 6.17763 3.43695 6.09977 3.42188 6.01274C3.40682 5.92566 3.42663 5.83596 3.47754 5.76372C3.52847 5.69155 3.60632 5.64305 3.69336 5.62798C4.96755 5.40722 6.25026 5.23766 7.53809 5.12016L7.91699 5.08501V4.47758C7.9172 3.12699 8.96275 1.98696 10.3291 1.94341ZM9.21387 7.83403C9.06072 7.83996 8.90973 7.87542 8.77051 7.9395C8.63141 8.00357 8.50637 8.09468 8.40234 8.20708C8.29823 8.31957 8.21721 8.45197 8.16406 8.59575C8.11104 8.73936 8.08687 8.89199 8.09277 9.04497L8.43945 18.045C8.45142 18.3542 8.58638 18.6463 8.81348 18.8565C8.92585 18.9604 9.05761 19.0417 9.20117 19.0948C9.34474 19.1478 9.49745 19.1719 9.65039 19.1661C9.80349 19.1601 9.95457 19.1237 10.0938 19.0596C10.2328 18.9956 10.358 18.9044 10.4619 18.792C10.5658 18.6797 10.6471 18.5479 10.7002 18.4043C10.7532 18.2608 10.7774 18.1081 10.7715 17.9551L10.4258 8.95512C10.4199 8.80196 10.3834 8.65101 10.3193 8.51176C10.2553 8.37262 10.1642 8.24766 10.0518 8.1436C9.93936 8.03957 9.80769 7.95846 9.66406 7.90532C9.52029 7.85218 9.36704 7.82811 9.21387 7.83403ZM14.7861 7.80864C14.6297 7.80258 14.4735 7.82831 14.3271 7.88383C14.1808 7.93936 14.0466 8.02363 13.9336 8.13188C13.8207 8.2401 13.7307 8.37002 13.6689 8.51372C13.6225 8.62173 13.5933 8.73612 13.5811 8.85258L13.5742 8.95512L13.2275 17.9551C13.2156 18.2644 13.3269 18.5659 13.5371 18.793C13.7473 19.0201 14.0394 19.154 14.3486 19.1661C14.6579 19.178 14.9593 19.0667 15.1865 18.8565C15.3853 18.6725 15.513 18.4261 15.5498 18.1602L15.5605 18.045L15.9053 9.04497L15.9043 9.04399C15.9133 8.8929 15.8945 8.74107 15.8457 8.5977C15.7952 8.44961 15.7146 8.31297 15.6104 8.19633C15.5062 8.0799 15.3796 7.98559 15.2383 7.91899C15.0966 7.85231 14.9426 7.8147 14.7861 7.80864ZM13.6504 2.60942C12.5508 2.57425 11.4502 2.57425 10.3506 2.60942C9.36178 2.64095 8.58322 3.46816 8.58301 4.47758V5.03325L9.02539 5.00688C11.0066 4.88656 12.9934 4.88656 14.9746 5.00688L15.417 5.03325V4.47758C15.4168 3.46812 14.6372 2.64093 13.6504 2.60942Z" fill="#333333" stroke="#333333" stroke-width="0.833333" />
                        </svg>

                        <span className='order-[-1] lg:order-none font-medium text-[16px] text-[#333333]'>
                            Удалить все
                        </span>
                    </button>

                    <button type='button' className='flex items-center justify-center grow h-[44px] gap-[8px] font-medium text-[16px] text-[#333333] border border-[#B9B9B980] rounded-[10px] ml-[8px] cursor-pointer'>
                        {isMobile ? 'Выбрать' : 'Удалить'}
                    </button>
                </div>
            </div>

            <hr className='w-full h-[1px] bg-[#B9B9B9] opacity-[20%] border-none mt-[20px]' />

            <div className='flex gap-[8px] mt-[24px]'>
                <button type='button' className='h-[36px] py-[8px] px-[12px] rounded-[10px] bg-[#ED0028] font-medium text-[14px] text-white cursor-pointer outline-none border-none'>
                    Все
                </button>

                <button type='button' className='h-[36px] py-[8px] px-[12px] rounded-[10px] bg-none font-medium text-[14px] text-[#333333] cursor-pointer outline-none border border-[#F1F1F1]'>
                    Информационные
                </button>

                <button type='button' className='h-[36px] py-[8px] px-[12px] rounded-[10px] bg-none font-medium text-[14px] text-[#333333] cursor-pointer outline-none border border-[#F1F1F1]'>
                    Системные
                </button>
            </div>

            <div className='
  flex flex-col mt-[16px] gap-[16px] 
  overflow-auto max-h-[668px] pr-[16px]
  scrollbar-thin
  [&::-webkit-scrollbar]:w-[10px]
  [&::-webkit-scrollbar-track]:bg-[#F5F5F5]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#ED0028]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-button]:hidden
'>
                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <Checkbox />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full pt-[16px] pr-[16px] pb-[12px] pl-[16px] rounded-[16px] bg-[#F1F1F166] border border-[#F5F5F5]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='font-semibold text-[16px] text-[#333333]'>
                                    Заказ создан вручную
                                </span>

                                <span className='h-[20px] flex items-center justify-center rounded-[6px] px-[6px] bg-[#FFC31D1A] font-medium text-[12px] text-[#FFC31D]'>
                                    Информация
                                </span>
                            </div>

                            <input
                                type="checkbox"
                                className="
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain
                                "
                            />
                        </div>

                        <span className='text-[14px] text-[#A9A9A9] leading-[160%]'>
                            Lorem ipsum dolor sit amet consectetur. Gravida id sit velit cras. Sagittis morbi posuere faucibus pellentesque dis est lacus lobortis odio. Lorem convallis erat scelerisque laoreet nunc tellus non. Pellentesque sed sapien augue dignissim nec vitae turpis mi. Integer libero felis et id.
                        </span>
                    </div>

                    <div className='mt-[12px] pt-[16px] border-t border-[#E7E7E7] border-dashed'>
                        <div className='flex items-center gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#B9B9B9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='ls:text-[16px] text-[14px] text-[#B9B9B9]'>
                                15.12.2025, 10:00:00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationsCard
