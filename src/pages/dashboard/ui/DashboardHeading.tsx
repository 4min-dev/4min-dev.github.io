import React from 'react'
import isMobileDevice from '../../../assets/isMobileDevice'

const DashboardHeading: React.FC = () => {

    const isMobile = isMobileDevice()

    return (
        <div className='lg:ml-[26px] mt-[24px] lg:mt-none'>
            <div className='flex flex-wrap gap-[8px] lg:gap-[12px]'>
                <div className='grow bg-[white] min-h-[66px] lg:min-h-[85px] flex flex-col lg:p-[12px] lg:rounded-[16px] lg:gap-[8px] p-[8px] rounded-[12px] gap-[6px] shadow-[0_0_25.8px_0_#0f0f2b26]'>
                    <div className='flex items-center lg:gap-[10px] gap-[8px]'>
                        <div className='flex items-center justify-center lg:w-[36px] lg:h-[36px] lg:rounded-[10px] w-[28px] h-[28px] rounded-[8px] bg-[#F6F6F6]'>
                            <svg className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 10.125L8.875 12L12 7.625M17 9.5C17 10.5567 16.475 11.4917 15.6725 12.0567C15.759 12.5506 15.7251 13.0582 15.5738 13.5363C15.4225 14.0144 15.1582 14.449 14.8033 14.8033C14.449 15.1582 14.0144 15.4225 13.5363 15.5738C13.0582 15.7251 12.5506 15.759 12.0567 15.6725C11.7685 16.0829 11.3857 16.4178 10.9407 16.6489C10.4956 16.88 10.0015 17.0004 9.5 17C8.44333 17 7.50833 16.475 6.94333 15.6725C6.44936 15.7589 5.94184 15.725 5.46374 15.5737C4.98564 15.4224 4.55102 15.1582 4.19667 14.8033C3.84177 14.449 3.57748 14.0144 3.42619 13.5363C3.27489 13.0582 3.24104 12.5506 3.3275 12.0567C2.9171 11.7685 2.58218 11.3857 2.35111 10.9407C2.12003 10.4956 1.99959 10.0015 2 9.5C2 8.44333 2.525 7.50833 3.3275 6.94333C3.24104 6.44936 3.27489 5.94182 3.42619 5.46371C3.57748 4.98559 3.84177 4.55098 4.19667 4.19667C4.55102 3.84183 4.98564 3.57758 5.46374 3.42629C5.94184 3.27499 6.44936 3.24111 6.94333 3.3275C7.23154 2.91715 7.61435 2.58227 8.05938 2.3512C8.50441 2.12013 8.99856 1.99966 9.5 2C10.5567 2 11.4917 2.525 12.0567 3.3275C12.5506 3.24111 13.0582 3.27499 13.5363 3.42629C14.0144 3.57758 14.449 3.84183 14.8033 4.19667C15.1582 4.55102 15.4224 4.98564 15.5737 5.46374C15.725 5.94184 15.7589 6.44936 15.6725 6.94333C16.0829 7.23149 16.4178 7.61429 16.6489 8.05933C16.88 8.50437 17.0004 8.99854 17 9.5Z" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <span className='font-semibold lg:text-[24px] text-[18px] text-[#33331F]'>
                            5 555
                        </span>
                    </div>

                    <span className='font-medium text-[14px] text-[13px] text-[#B9B9B9] h-[17px]'>
                        Новые
                    </span>
                </div>

                <div className='grow order-[-1] lg:order-none bg-[white] min-h-[66px] lg:min-h-[85px] flex flex-col lg:p-[12px] lg:rounded-[16px] lg:gap-[8px] p-[8px] rounded-[12px] gap-[6px] shadow-[0_0_25.8px_0_#0f0f2b26]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center justify-center w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6]'>
                            <svg className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.6967 10.2683C1.63919 10.0955 1.63919 9.90867 1.6967 9.73583C2.85253 6.25833 6.13336 3.75 10 3.75C13.865 3.75 17.1442 6.25583 18.3025 9.73167C18.3609 9.90417 18.3609 10.0908 18.3025 10.2642C17.1475 13.7417 13.8667 16.25 10 16.25C6.13503 16.25 2.85503 13.7442 1.6967 10.2683Z" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <span className='font-semibold lg:text-[24px] text-[18px] text-[#33331F]'>
                            5 555
                        </span>
                    </div>

                    <span className='font-medium text-[14px] text-[13px] text-[#B9B9B9] h-[17px]'>
                        На проверке
                    </span>
                </div>

                <div className='grow order-[-1] lg:-order-none bg-[white] min-h-[66px] lg:min-h-[85px] flex flex-col lg:p-[12px] lg:rounded-[16px] lg:gap-[8px] p-[8px] rounded-[12px] gap-[6px] shadow-[0_0_25.8px_0_#0f0f2b26]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center justify-center w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6]'>
                            <svg className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 17V12.9375C7 12.42 7.42 12 7.9375 12H9.8125C10.33 12 10.75 12.42 10.75 12.9375V17M10.75 17H14.5V2.45417M10.75 17H17V8.45833M14.5 2.45417L15.75 2M14.5 2.45417L5.75 5.63667M17 8.45833L14.5 7.625M17 8.45833L18.25 8.875M2 17H3.25M3.25 17H18.25M3.25 17V2H5.75V5.63667M2 7L5.75 5.63667" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <span className='font-semibold lg:text-[24px] text-[18px] text-[#33331F]'>
                            5 555
                        </span>
                    </div>

                    <span className='font-medium text-[14px] text-[13px] text-[#B9B9B9] h-[17px]'>
                        На складе
                    </span>
                </div>

                <div className='grow order-[-1] lg:order-none bg-[white] min-h-[66px] lg:min-h-[85px] flex flex-col lg:p-[12px] lg:rounded-[16px] lg:gap-[8px] p-[8px] rounded-[12px] gap-[6px] shadow-[0_0_25.8px_0_#0f0f2b26]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center justify-center w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6]'>
                            <svg className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.87502 15.625C6.87502 15.9565 6.74332 16.2745 6.5089 16.5089C6.27448 16.7433 5.95654 16.875 5.62502 16.875C5.2935 16.875 4.97555 16.7433 4.74113 16.5089C4.50671 16.2745 4.37502 15.9565 4.37502 15.625M6.87502 15.625C6.87502 15.2935 6.74332 14.9755 6.5089 14.7411C6.27448 14.5067 5.95654 14.375 5.62502 14.375C5.2935 14.375 4.97555 14.5067 4.74113 14.7411C4.50671 14.9755 4.37502 15.2935 4.37502 15.625M6.87502 15.625H11.875M4.37502 15.625H2.81252C2.56388 15.625 2.32542 15.5262 2.1496 15.3504C1.97379 15.1746 1.87502 14.9361 1.87502 14.6875V11.875M11.875 15.625H13.75M11.875 15.625V11.875M1.87502 11.875V5.5125C1.87369 5.28431 1.95707 5.06374 2.10901 4.89348C2.26095 4.72322 2.47064 4.61538 2.69752 4.59084C5.47505 4.30253 8.27498 4.30253 11.0525 4.59084C11.5233 4.63917 11.875 5.03917 11.875 5.5125V6.31084M1.87502 11.875H11.875M16.25 15.625C16.25 15.9565 16.1183 16.2745 15.8839 16.5089C15.6495 16.7433 15.3315 16.875 15 16.875C14.6685 16.875 14.3506 16.7433 14.1161 16.5089C13.8817 16.2745 13.75 15.9565 13.75 15.625M16.25 15.625C16.25 15.2935 16.1183 14.9755 15.8839 14.7411C15.6495 14.5067 15.3315 14.375 15 14.375C14.6685 14.375 14.3506 14.5067 14.1161 14.7411C13.8817 14.9755 13.75 15.2935 13.75 15.625M16.25 15.625H17.1875C17.705 15.625 18.1284 15.205 18.0959 14.6883C17.9284 11.9364 17.0016 9.28464 15.4184 7.0275C15.2675 6.81607 15.0707 6.64168 14.8426 6.51753C14.6145 6.39337 14.3611 6.32269 14.1017 6.31084H11.875M11.875 6.31084V11.875" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <span className='font-semibold lg:text-[24px] text-[18px] text-[#33331F]'>
                            5 555
                        </span>
                    </div>

                    <span className='font-medium text-[14px] text-[13px] text-[#B9B9B9] h-[17px]'>
                        В пути
                    </span>
                </div>

                <div className='grow bg-[white] min-h-[66px] lg:min-h-[85px] flex flex-col lg:p-[12px] lg:rounded-[16px] lg:gap-[8px] p-[8px] rounded-[12px] gap-[6px] shadow-[0_0_25.8px_0_#0f0f2b26]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center justify-center w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6]'>
                            <svg className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M11.3731 17V10.75C11.3731 10.5842 11.4389 10.4253 11.5561 10.3081C11.6733 10.1908 11.8323 10.125 11.9981 10.125H14.4981C14.6638 10.125 14.8228 10.1908 14.94 10.3081C15.0572 10.4253 15.1231 10.5842 15.1231 10.75V17M11.3731 17H2.08973M11.3731 17H15.1231M15.1231 17H18.1564M16.9981 17V7.29083M16.9981 7.29083C16.4981 7.57925 15.9138 7.68587 15.3443 7.59261C14.7747 7.49935 14.2549 7.21196 13.8731 6.77917C13.4147 7.2975 12.7447 7.625 11.9981 7.625C11.6433 7.62534 11.2925 7.55 10.9692 7.40399C10.6459 7.25799 10.3574 7.04469 10.1231 6.77833C9.66473 7.2975 8.99473 7.625 8.24806 7.625C7.89329 7.62534 7.54253 7.55 7.2192 7.40399C6.89586 7.25799 6.6074 7.04469 6.37306 6.77833C5.99133 7.21126 5.47159 7.49881 4.90201 7.59223C4.33243 7.68564 3.74808 7.57915 3.24806 7.29083M16.9981 7.29083C17.3302 7.09909 17.6138 6.83349 17.8269 6.51459C18.04 6.1957 18.1768 5.83205 18.2268 5.45179C18.2769 5.07154 18.2387 4.68487 18.1154 4.32171C17.9921 3.95855 17.7868 3.62864 17.5156 3.3575L16.5239 2.36667C16.2897 2.13218 15.972 2.00029 15.6406 2H4.60473C4.27344 2.00007 3.95572 2.13165 3.72139 2.36583L2.73056 3.3575C2.45992 3.62895 2.25524 3.95892 2.13228 4.32198C2.00933 4.68503 1.97139 5.07148 2.02139 5.45151C2.07139 5.83155 2.208 6.19503 2.42067 6.51393C2.63335 6.83283 2.91642 7.09862 3.24806 7.29083M3.24806 17V7.29083M5.74806 14.5H8.87306C9.03882 14.5 9.19779 14.4342 9.315 14.3169C9.43221 14.1997 9.49806 14.0408 9.49806 13.875V10.75C9.49806 10.5842 9.43221 10.4253 9.315 10.3081C9.19779 10.1908 9.03882 10.125 8.87306 10.125H5.74806C5.5823 10.125 5.42333 10.1908 5.30612 10.3081C5.18891 10.4253 5.12306 10.5842 5.12306 10.75V13.875C5.12306 14.22 5.40306 14.5 5.74806 14.5Z" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <span className='font-semibold lg:text-[24px] text-[18px] text-[#33331F]'>
                            5 555
                        </span>
                    </div>

                    <span className='font-medium text-[14px] text-[13px] text-[#B9B9B9] h-[17px]'>
                        {
                            isMobile ? 'В ПВЗ' : 'В пункте выдачи'
                        }
                    </span>
                </div>

                <div className='grow bg-[white] min-h-[66px] lg:min-h-[85px] flex flex-col lg:p-[12px] lg:rounded-[16px] lg:gap-[8px] p-[8px] rounded-[12px] gap-[6px] shadow-[0_0_25.8px_0_#0f0f2b26]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center justify-center w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6]'>
                            <svg className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17 6.125L16.4792 14.985C16.4511 15.4625 16.2416 15.9113 15.8935 16.2394C15.5454 16.5675 15.085 16.7502 14.6067 16.75H5.64333C5.16497 16.7502 4.70462 16.5675 4.35652 16.2394C4.00842 15.9113 3.7989 15.4625 3.77083 14.985L3.25 6.125M8.45833 9.25H11.7917M2.9375 6.125H17.3125C17.83 6.125 18.25 5.705 18.25 5.1875V3.9375C18.25 3.42 17.83 3 17.3125 3H2.9375C2.42 3 2 3.42 2 3.9375V5.1875C2 5.705 2.42 6.125 2.9375 6.125Z" stroke="#ED0028" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <span className='font-semibold lg:text-[24px] text-[18px] text-[#33331F]'>
                            5 555
                        </span>
                    </div>

                    <span className='font-medium text-[14px] text-[13px] text-[#B9B9B9] h-[17px]'>
                        В доставке
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeading
