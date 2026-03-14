import React, { useState } from 'react'

type UploadedFile = {
    name: string,
    size: string,
    status: 'success' | 'uploading' | 'error'
}

const NewOrderPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {

    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
        { name: 'Tablitca134.xls', size: '20 MB / 23 MB', status: 'success' },
        { name: 'vnjivjinedj.xls', size: '20 MB / 23 MB', status: 'uploading' },
        { name: 'vnjivjinedj.xls', size: 'Не загружено', status: 'error' }
    ])

    function getStatusIcon(status: 'success' | 'uploading' | 'error') {
        switch (status) {
            case 'success': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5H5.625C4.589 1.5 3.75 2.34 3.75 3.375V20.625C3.75 21.66 4.59 22.5 5.625 22.5H18.375C19.41 22.5 20.25 21.66 20.25 20.625V12.75C20.25 11.7554 19.8549 10.8016 19.1517 10.0983C18.4484 9.39509 17.4946 9 16.5 9H14.625C14.1277 9 13.6508 8.80246 13.2992 8.45083C12.9475 8.0992 12.75 7.62228 12.75 7.125V5.25C12.75 4.25544 12.3549 3.30161 11.6517 2.59835C10.9484 1.89509 9.99456 1.5 9 1.5ZM15.61 12.436C15.67 12.3561 15.7134 12.2649 15.7377 12.1679C15.762 12.071 15.7666 11.9701 15.7514 11.8714C15.7361 11.7726 15.7012 11.6778 15.6489 11.5927C15.5965 11.5076 15.5276 11.4338 15.4463 11.3757C15.3649 11.3175 15.2728 11.2762 15.1753 11.2542C15.0778 11.2322 14.9769 11.2299 14.8785 11.2475C14.7801 11.265 14.6862 11.3021 14.6023 11.3564C14.5184 11.4108 14.4462 11.4813 14.39 11.564L11.154 16.094L9.53 14.47C9.38783 14.3375 9.19978 14.2654 9.00548 14.2688C8.81118 14.2723 8.62579 14.351 8.48838 14.4884C8.35097 14.6258 8.27225 14.8112 8.26882 15.0055C8.2654 15.1998 8.33752 15.3878 8.47 15.53L10.72 17.78C10.797 17.8569 10.8898 17.9162 10.992 17.9536C11.0942 17.9911 11.2033 18.0059 11.3118 17.9969C11.4202 17.988 11.5255 17.9555 11.6201 17.9019C11.7148 17.8482 11.7967 17.7745 11.86 17.686L15.61 12.436Z" fill="#47D40A" />
                <path d="M12.9709 1.81592C13.7975 2.76888 14.2517 3.98846 14.2499 5.24992V7.12492C14.2499 7.33192 14.4179 7.49992 14.6249 7.49992H16.4999C17.7614 7.49817 18.981 7.9524 19.9339 8.77892C19.494 7.10563 18.6175 5.57922 17.3941 4.3558C16.1706 3.13239 14.6442 2.25588 12.9709 1.81592Z" fill="#47D40A" />
            </svg>
            case 'uploading': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5H9C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V7.125C12.75 8.161 13.59 9 14.625 9H16.5C17.4946 9 18.4484 9.39509 19.1517 10.0983C19.8549 10.8016 20.25 11.7554 20.25 12.75V20.625C20.25 21.66 19.41 22.5 18.375 22.5H5.625C5.12772 22.5 4.65081 22.3025 4.29917 21.9508C3.94754 21.5992 3.75 21.1223 3.75 20.625V3.375C3.75 2.339 4.59 1.5 5.625 1.5ZM12.53 11.47C12.3894 11.3295 12.1988 11.2507 12 11.2507C11.8012 11.2507 11.6106 11.3295 11.47 11.47L8.47 14.47C8.39631 14.5387 8.33721 14.6215 8.29622 14.7135C8.25523 14.8055 8.23318 14.9048 8.23141 15.0055C8.22963 15.1062 8.24816 15.2062 8.28588 15.2996C8.3236 15.393 8.37974 15.4778 8.45096 15.549C8.52218 15.6203 8.60701 15.6764 8.7004 15.7141C8.79379 15.7518 8.89382 15.7704 8.99452 15.7686C9.09522 15.7668 9.19454 15.7448 9.28654 15.7038C9.37854 15.6628 9.46134 15.6037 9.53 15.53L11.25 13.81V18C11.25 18.1989 11.329 18.3897 11.4697 18.5303C11.6103 18.671 11.8011 18.75 12 18.75C12.1989 18.75 12.3897 18.671 12.5303 18.5303C12.671 18.3897 12.75 18.1989 12.75 18V13.81L14.47 15.53C14.5387 15.6037 14.6215 15.6628 14.7135 15.7038C14.8055 15.7448 14.9048 15.7668 15.0055 15.7686C15.1062 15.7704 15.2062 15.7518 15.2996 15.7141C15.393 15.6764 15.4778 15.6203 15.549 15.549C15.6203 15.4778 15.6764 15.393 15.7141 15.2996C15.7518 15.2062 15.7704 15.1062 15.7686 15.0055C15.7668 14.9048 15.7448 14.8055 15.7038 14.7135C15.6628 14.6215 15.6037 14.5387 15.53 14.47L12.53 11.47Z" fill="#FFC31D" />
                <path d="M14.2499 5.24992C14.2517 3.98846 13.7975 2.76888 12.9709 1.81592C14.6442 2.25588 16.1706 3.13239 17.3941 4.3558C18.6175 5.57922 19.494 7.10563 19.9339 8.77892C18.981 7.9524 17.7614 7.49817 16.4999 7.49992H14.6249C14.5255 7.49992 14.4301 7.46041 14.3598 7.39008C14.2895 7.31976 14.2499 7.22437 14.2499 7.12492V5.24992Z" fill="#FFC31D" />
            </svg>

            case 'error': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5H9C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V7.125C12.75 8.161 13.59 9 14.625 9H16.5C17.4946 9 18.4484 9.39509 19.1517 10.0983C19.8549 10.8016 20.25 11.7554 20.25 12.75V20.625C20.25 21.66 19.41 22.5 18.375 22.5H5.625C5.12772 22.5 4.65081 22.3025 4.29917 21.9508C3.94754 21.5992 3.75 21.1223 3.75 20.625V3.375C3.75 2.339 4.59 1.5 5.625 1.5ZM9.75 14.25C9.55109 14.25 9.36032 14.329 9.21967 14.4697C9.07902 14.6103 9 14.8011 9 15C9 15.1989 9.07902 15.3897 9.21967 15.5303C9.36032 15.671 9.55109 15.75 9.75 15.75H15C15.1989 15.75 15.3897 15.671 15.5303 15.5303C15.671 15.3897 15.75 15.1989 15.75 15C15.75 14.8011 15.671 14.6103 15.5303 14.4697C15.3897 14.329 15.1989 14.25 15 14.25H9.75Z" fill="#ED0028" />
                <path d="M14.2499 5.24992C14.2517 3.98846 13.7975 2.76888 12.9709 1.81592C14.6442 2.25588 16.1706 3.13239 17.3941 4.3558C18.6175 5.57922 19.494 7.10563 19.9339 8.77892C18.981 7.9524 17.7614 7.49817 16.4999 7.49992H14.6249C14.5255 7.49992 14.4301 7.46041 14.3598 7.39008C14.2895 7.31976 14.2499 7.22437 14.2499 7.12492V5.24992Z" fill="#ED0028" />
            </svg>
        }

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 md:items-center" onClick={onClose}>
            <div className="lg:w-[507px] w-full mx-[12px] lg:mx-0 bg-white rounded-[20px] md:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between px-[20px] pt-[20px]">
                    <h2 className="lg:text-[28px] text-[20px] font-semibold text-[#33331F]">Новый заказ</h2>
                    <button onClick={onClose} className="cursor-pointer">
                        <svg className='w-[28px] h-[28px] lg:w-[24px] lg:h-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_376_1878)">
                                <path d="M7 7L17 17M7 17L17 7" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_376_1878">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <div className="px-[20px] mt-[24px] ">
                    <div className='flex flex-col gap-[8px]'>
                        <label className="flex items-center gap-[4px] font-medium text-[13px] lg:text-[14px] text-[#B9B9B9] ">
                            Трек-номер
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8ZM9.08533 5.38867C8.492 4.87067 7.508 4.87067 6.91533 5.38867C6.81552 5.47601 6.6851 5.52013 6.55277 5.51132C6.42043 5.5025 6.29701 5.44148 6.20967 5.34167C6.12232 5.24186 6.0782 5.11144 6.08702 4.9791C6.09583 4.84676 6.15686 4.72334 6.25667 4.636C7.226 3.788 8.774 3.788 9.74333 4.636C10.752 5.51867 10.752 6.98133 9.74333 7.864C9.57464 8.01109 9.38697 8.13486 9.18533 8.232C8.73467 8.45067 8.5 8.748 8.5 9V9.5C8.5 9.63261 8.44732 9.75979 8.35355 9.85355C8.25979 9.94732 8.13261 10 8 10C7.86739 10 7.74022 9.94732 7.64645 9.85355C7.55268 9.75979 7.5 9.63261 7.5 9.5V9C7.5 8.14733 8.20667 7.59533 8.75 7.332C8.87133 7.27333 8.984 7.19933 9.08533 7.11133C9.63867 6.62667 9.63867 5.87333 9.08533 5.38867ZM8 12C8.13261 12 8.25979 11.9473 8.35355 11.8536C8.44732 11.7598 8.5 11.6326 8.5 11.5C8.5 11.3674 8.44732 11.2402 8.35355 11.1464C8.25979 11.0527 8.13261 11 8 11C7.86739 11 7.74022 11.0527 7.64645 11.1464C7.55268 11.2402 7.5 11.3674 7.5 11.5C7.5 11.6326 7.55268 11.7598 7.64645 11.8536C7.74022 11.9473 7.86739 12 8 12Z" fill="#B9B9B9" />
                            </svg>
                        </label>
                        <input
                            type="text"
                            placeholder="#XM123456789JP"
                            className="w-full h-[44px] flex items-center px-[12px] border border-[#B9B9B966] rounded-[10px] font-medium text-[#333333] text-[15px] lg:text-[16px] outline-none"
                        />
                    </div>

                    <div className='mt-[20px] lg:mt-[24px] flex flex-col gap-[8px]'>
                        <label className="font-medium text-[13px] lg:text-[14px] text-[#333333] ">Описание товара</label>
                        <textarea
                            placeholder="Коротко опиши товар — что это и какой вариант"
                            rows={3}
                            className="w-full px-[12px] py-[15px] text-[15px] lg:text-[16px] text-[#333333] border border-[#B9B9B966] rounded-[10px] resize-none focus:outline-none"
                        />
                    </div>

                    <div className='mt-[18px] flex flex-col gap-[8px]'>
                        <label className="font-medium text-[13px] lg:text-[14px] text-[#333333] ">Ссылка на товар</label>
                        <input
                            type="url"
                            placeholder="https://"
                            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#ED0028]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-[12px] lg:gap-[16px] mt-[18px] lg:mt-[24px]">
                        <div>
                            <label className="font-medium text-[13px] lg:text-[14px] text-[#333333] ">Цена за единицу</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="₽"
                                    className="w-full h-[44px] px-[12px] text-[#333333] text-[15px] lg:text-[16px] border border-[#B9B9B966] rounded-[10px] outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-[13px] lg:text-[14px] text-[#333333] ">Количество</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="шт"
                                    className="w-full h-[44px] px-[12px] text-[#333333] text-[15px] lg:text-[16px] border border-[#B9B9B966] rounded-[10px] outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='thumbnailInput' className="border-1 border-[#B9B9B966] rounded-[16px] w-full h-[200px] text-center mt-[20px] lg:mt-[24px] flex flex-col items-center justify-center cursor-pointer">
                            <div className="w-[48px] h-[40px] bg-[#B9B9B926] border border-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75H20.25C20.8467 3.75 21.419 3.98705 21.841 4.40901C22.2629 4.83097 22.5 5.40326 22.5 6V18C22.5 18.5967 22.2629 19.169 21.841 19.591C21.419 20.0129 20.8467 20.25 20.25 20.25H3.75C3.15326 20.25 2.58097 20.0129 2.15901 19.591C1.73705 19.169 1.5 18.5967 1.5 18V6ZM3 16.06V18C3 18.414 3.336 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18V16.06L18.31 13.371C18.0287 13.0901 17.6475 12.9323 17.25 12.9323C16.8525 12.9323 16.4713 13.0901 16.19 13.371L15.31 14.25L16.28 15.22C16.3537 15.2887 16.4128 15.3715 16.4538 15.4635C16.4948 15.5555 16.5168 15.6548 16.5186 15.7555C16.5204 15.8562 16.5018 15.9562 16.4641 16.0496C16.4264 16.143 16.3703 16.2278 16.299 16.299C16.2278 16.3703 16.143 16.4264 16.0496 16.4641C15.9562 16.5018 15.8562 16.5204 15.7555 16.5186C15.6548 16.5168 15.5555 16.4948 15.4635 16.4538C15.3715 16.4128 15.2887 16.3537 15.22 16.28L10.06 11.121C9.77875 10.8401 9.3975 10.6823 9 10.6823C8.6025 10.6823 8.22125 10.8401 7.94 11.121L3 16.061V16.06ZM13.125 8.25C13.125 7.95163 13.2435 7.66548 13.4545 7.4545C13.6655 7.24353 13.9516 7.125 14.25 7.125C14.5484 7.125 14.8345 7.24353 15.0455 7.4545C15.2565 7.66548 15.375 7.95163 15.375 8.25C15.375 8.54837 15.2565 8.83452 15.0455 9.0455C14.8345 9.25647 14.5484 9.375 14.25 9.375C13.9516 9.375 13.6655 9.25647 13.4545 9.0455C13.2435 8.83452 13.125 8.54837 13.125 8.25Z" fill="#33331F" />
                                </svg>
                            </div>
                            <p className="text-[15px] lg:text-[16px] text-[#333333] font-medium">Фото</p>
                            <p className="text-[13px] lg:text-[14px] text-[#B9B9B9]">До 5 МБ</p>
                        </label>
                        <input type='file' id='thumbnailInput' className='hidden' />
                    </div>

                    <div className='mt-[32px] flex flex-col gap-[16px] lg:gap-[20px] '>
                        <p className="font-semibold text-[18px] lg:text-[22px] text-[#33331F]">Загрузить таблицу</p>
                        <div className="border-1 border-dashed border-[#B9B9B966] rounded-[16px] w-full h-[192px] flex flex-col items-center justify-center text-center bg-[#F9F9F980]">
                            <label htmlFor='tableInput' className="w-[113px] h-[40px] flex items-center justify-center gap-[4px] outline-none border border-[#B9B9B94D] rounded-[10px] shadow-[0_0_25.8px_0_#0f0f2b26] bg-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6.64667 0.646715C6.74042 0.553081 6.8675 0.500488 7 0.500488C7.1325 0.500488 7.25958 0.553081 7.35333 0.646715L9.35333 2.64672C9.44165 2.7415 9.48974 2.86686 9.48745 2.9964C9.48517 3.12593 9.43269 3.24952 9.34108 3.34113C9.24947 3.43274 9.12588 3.48521 8.99635 3.4875C8.86681 3.48978 8.74145 3.4417 8.64667 3.35338L7.5 2.20671V4.50005H6.5V2.20671L5.35333 3.35338C5.25855 3.4417 5.13319 3.48978 5.00365 3.4875C4.87412 3.48521 4.75053 3.43274 4.65892 3.34113C4.56731 3.24952 4.51484 3.12593 4.51255 2.9964C4.51026 2.86686 4.55835 2.7415 4.64667 2.64672L6.64667 0.646715ZM6.5 4.50005V8.50005C6.5 8.63266 6.55268 8.75983 6.64645 8.8536C6.74022 8.94737 6.86739 9.00005 7 9.00005C7.13261 9.00005 7.25979 8.94737 7.35355 8.8536C7.44732 8.75983 7.5 8.63266 7.5 8.50005V4.50005H9.5C10.0304 4.50005 10.5391 4.71076 10.9142 5.08583C11.2893 5.46091 11.5 5.96962 11.5 6.50005V11.5C11.5 12.0305 11.2893 12.5392 10.9142 12.9143C10.5391 13.2893 10.0304 13.5 9.5 13.5H4.5C3.96957 13.5 3.46086 13.2893 3.08579 12.9143C2.71071 12.5392 2.5 12.0305 2.5 11.5V6.50005C2.5 5.96962 2.71071 5.46091 3.08579 5.08583C3.46086 4.71076 3.96957 4.50005 4.5 4.50005H6.5Z" fill="#ED0028" />
                                    <path d="M4.76709 14.4998C4.94263 14.8039 5.19519 15.0565 5.49936 15.2321C5.80352 15.4076 6.14857 15.4999 6.49976 15.4998H11.4998C12.0302 15.4998 12.5389 15.289 12.914 14.914C13.289 14.5389 13.4998 14.0302 13.4998 13.4998V8.49976C13.4998 7.75976 13.0978 7.11309 12.4998 6.76709V11.4998C12.4998 12.2954 12.1837 13.0585 11.6211 13.6211C11.0585 14.1837 10.2954 14.4998 9.49976 14.4998H4.76709Z" fill="#ED0028" />
                                </svg>

                                <span className='font-medium text-[14px] text-[#ED0028]'>
                                    Загрузить
                                </span>
                            </label>
                            <p className="text-[15px] lg:text-[16px] font-medium text-[#333333] mt-[12px]">Выберите или перетащите файл</p>
                            <p className="text-[14px] text-[#B9B9B9] mt-[4px]">Максимум 500 МБ</p>
                        </div>
                        <input type='file' id='tableInput' className='hidden' />

                        <div className="mt-[16px] flex flex-col gap-[12px]">
                            {uploadedFiles.map((file, i) => (
                                <div key={`${file.name}-${i}`} className="p-[12px] border border-[#B9B9B94D] rounded-[16px] flex flex-col gap-[16px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[12px] w-full">
                                            <div className={`w-[40px] h-[40px] rounded-[11px] flex items-center justify-center flex-shrink-0 ${file.status === 'success' ? 'bg-[#47D40A1A]' :
                                                file.status === 'uploading' ? 'bg-[#FFC31D1A]' :
                                                    'bg-[#ED00281A]'
                                                }`}>
                                                {getStatusIcon(file.status)}
                                            </div>

                                            <div className="flex flex-col w-full">
                                                <div className='flex items-center justify-between w-full'>
                                                    <span className={`text-[14px] font-semibold leading-none ${file.status === 'error' ? 'text-[#ED0028]' : 'text-[#333333]'
                                                        }`}>
                                                        {file.name}
                                                    </span>
                                                    <button className="cursor-pointer">
                                                        {
                                                            file.status === 'success' ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 3.73162V3.92079C14.8325 4.01978 15.9106 4.16212 16.9817 4.34746C17.0625 4.36146 17.1399 4.39126 17.2092 4.43515C17.2786 4.47904 17.3386 4.53616 17.3859 4.60326C17.4332 4.67035 17.4668 4.74609 17.4848 4.82617C17.5028 4.90624 17.5048 4.98908 17.4908 5.06996C17.4768 5.15083 17.447 5.22815 17.4031 5.29751C17.3593 5.36686 17.3021 5.42689 17.235 5.47417C17.1679 5.52146 17.0922 5.55506 17.0121 5.57307C16.932 5.59107 16.8492 5.59313 16.7683 5.57912L16.5942 5.54996L15.7567 16.4416C15.7084 17.0696 15.4248 17.6562 14.9627 18.0842C14.5006 18.5122 13.894 18.7499 13.2642 18.75H6.73667C6.10683 18.7499 5.50022 18.5122 5.03811 18.0842C4.576 17.6562 4.29246 17.0696 4.24417 16.4416L3.40584 5.54996L3.23167 5.57912C3.1508 5.59313 3.06796 5.59107 2.98788 5.57307C2.90781 5.55506 2.83206 5.52146 2.76497 5.47417C2.62948 5.37869 2.53746 5.23329 2.50917 5.06996C2.48088 4.90663 2.51863 4.73875 2.61412 4.60326C2.70961 4.46776 2.85501 4.37575 3.01834 4.34746C4.08939 4.16189 5.16749 4.01956 6.25001 3.92079V3.73162C6.25001 2.42829 7.26084 1.31496 8.59667 1.27246C9.53227 1.24251 10.4686 1.24251 11.4042 1.27246C12.74 1.31496 13.75 2.42829 13.75 3.73162ZM8.63667 2.52162C9.54561 2.49255 10.4552 2.49255 11.3642 2.52162C11.9917 2.54162 12.5 3.06996 12.5 3.73162V3.82579C10.8349 3.72466 9.16514 3.72466 7.50001 3.82579V3.73162C7.50001 3.06996 8.00751 2.54162 8.63667 2.52162ZM8.34084 7.47579C8.33767 7.39371 8.31836 7.31307 8.28402 7.23845C8.24967 7.16384 8.20097 7.09672 8.14069 7.04093C8.08041 6.98513 8.00973 6.94176 7.93269 6.91328C7.85565 6.88481 7.77375 6.87178 7.69167 6.87496C7.6096 6.87813 7.52895 6.89744 7.45433 6.93178C7.37972 6.96612 7.3126 7.01482 7.25681 7.0751C7.20102 7.13538 7.15764 7.20606 7.12917 7.28311C7.10069 7.36015 7.08767 7.44205 7.09084 7.52412L7.38001 15.0241C7.38642 15.1898 7.45837 15.3461 7.58003 15.4587C7.64027 15.5144 7.71091 15.5578 7.7879 15.5862C7.86489 15.6147 7.94673 15.6277 8.02876 15.6245C8.11078 15.6214 8.19137 15.6021 8.26593 15.5677C8.3405 15.5334 8.40757 15.4848 8.46332 15.4245C8.51908 15.3643 8.56242 15.2936 8.59088 15.2166C8.61933 15.1397 8.63235 15.0578 8.62917 14.9758L8.34084 7.47579ZM12.9075 7.52412C12.9136 7.44047 12.9028 7.35644 12.8758 7.27705C12.8487 7.19765 12.806 7.12452 12.7501 7.06199C12.6942 6.99947 12.6262 6.94884 12.5504 6.91311C12.4745 6.87739 12.3922 6.85731 12.3083 6.85406C12.2245 6.85082 12.1409 6.86448 12.0625 6.89423C11.9841 6.92397 11.9124 6.9692 11.8519 7.02722C11.7913 7.08523 11.743 7.15484 11.7099 7.23191C11.6768 7.30898 11.6595 7.39192 11.6592 7.47579L11.37 14.9758C11.3636 15.1416 11.4233 15.3031 11.536 15.4248C11.6487 15.5466 11.8051 15.6185 11.9708 15.625C12.1366 15.6314 12.2981 15.5717 12.4199 15.459C12.5416 15.3463 12.6136 15.1899 12.62 15.0241L12.9075 7.52412Z" fill="#B3B3B3" />
                                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <g clip-path="url(#clip0_807_7216)">
                                                                    <path d="M7 7L17 17M7 17L17 7" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_807_7216">
                                                                        <rect width="24" height="24" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        }
                                                    </button>
                                                </div>

                                                {file.size && (
                                                    <div className="flex items-center gap-[12px] mt-[6px]">
                                                        <span className={`text-[12px] leading-none ${file.status === 'error' ? 'text-[#ED0028]' : 'text-[#B3B3B3]'
                                                            }`}>
                                                            {file.size}
                                                        </span>

                                                        <div className={`w-[4px] h-[4px] rounded-full flex-shrink-0 ${file.status === 'error' ? 'bg-[#ED0028]' : 'bg-[#B3B3B3]'
                                                            }`} />

                                                        <div className="flex items-center gap-[4px]">
                                                            {file.status === 'success' ? (
                                                                <>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.3125 7C1.3125 3.85875 3.85875 1.3125 7 1.3125C10.1412 1.3125 12.6875 3.85875 12.6875 7C12.6875 10.1412 10.1412 12.6875 7 12.6875C3.85875 12.6875 1.3125 10.1412 1.3125 7ZM9.10583 5.94183C9.14083 5.8952 9.16616 5.84203 9.18032 5.78547C9.19448 5.72891 9.19719 5.67008 9.18829 5.61246C9.17939 5.55483 9.15906 5.49956 9.1285 5.44991C9.09793 5.40025 9.05775 5.3572 9.01032 5.3233C8.96288 5.28939 8.90914 5.26531 8.85226 5.25247C8.79539 5.23963 8.73652 5.23828 8.67911 5.24852C8.62171 5.25876 8.56693 5.28036 8.518 5.31207C8.46906 5.34378 8.42696 5.38495 8.39417 5.43317L6.5065 8.07567L5.55917 7.12833C5.47623 7.05105 5.36654 7.00898 5.2532 7.01098C5.13985 7.01298 5.03171 7.0589 4.95155 7.13905C4.8714 7.21921 4.82548 7.32735 4.82348 7.4407C4.82148 7.55404 4.86355 7.66373 4.94083 7.74667L6.25333 9.05917C6.29824 9.10404 6.35238 9.13861 6.41199 9.16046C6.4716 9.18231 6.53525 9.19093 6.59853 9.18571C6.6618 9.18049 6.72318 9.16157 6.77841 9.13025C6.83363 9.09893 6.88138 9.05596 6.91833 9.00433L9.10583 5.94183Z" fill="#47D40A" />
                                                                    </svg>
                                                                    <span className="text-[12px] leading-none text-[#47D40A]">
                                                                        Успешно
                                                                    </span>
                                                                </>
                                                            ) : file.status === 'uploading' ? (
                                                                <>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                        <circle cx="6.32812" cy="1.54688" r="1.54688" fill="#B3B3B3" />
                                                                        <circle opacity="0.9" cx="2.85938" cy="2.8125" r="1.45312" fill="#B3B3B3" />
                                                                        <circle opacity="0.8" cx="1.35938" cy="5.95312" r="1.35938" fill="#B3B3B3" />
                                                                        <circle opacity="0.7" cx="2.34375" cy="9.14062" r="1.3125" fill="#B3B3B3" />
                                                                        <circle opacity="0.6" cx="5.29688" cy="10.7344" r="1.26562" fill="#B3B3B3" />
                                                                        <circle opacity="0.5" cx="8.4375" cy="10.4062" r="1.21875" fill="#B3B3B3" />
                                                                        <circle opacity="0.4" cx="10.6406" cy="8.20312" r="1.17188" fill="#B3B3B3" />
                                                                        <circle opacity="0.3" cx="10.9219" cy="5.29688" r="1.07812" fill="#B3B3B3" />
                                                                        <circle opacity="0.2" cx="9.60938" cy="2.71875" r="0.984375" fill="#B3B3B3" />
                                                                    </svg>
                                                                    <span className="text-[12px] leading-none text-[#B3B3B3]">
                                                                        Загрузка...
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.48398 1.75171C6.15773 0.585042 7.8424 0.585042 8.51556 1.75171L12.806 9.18804C13.4791 10.3547 12.6368 11.813 11.2899 11.813H2.70965C1.36273 11.813 0.52098 10.3547 1.19415 9.18804L5.4834 1.75171H5.48398ZM7.00006 4.81246C7.1161 4.81246 7.22738 4.85855 7.30942 4.9406C7.39147 5.02265 7.43756 5.13393 7.43756 5.24996V7.43746C7.43756 7.55349 7.39147 7.66477 7.30942 7.74682C7.22738 7.82886 7.1161 7.87496 7.00006 7.87496C6.88403 7.87496 6.77275 7.82886 6.6907 7.74682C6.60866 7.66477 6.56256 7.55349 6.56256 7.43746V5.24996C6.56256 5.13393 6.60866 5.02265 6.6907 4.9406C6.77275 4.85855 6.88403 4.81246 7.00006 4.81246ZM7.00006 9.62496C7.1161 9.62496 7.22738 9.57887 7.30942 9.49682C7.39147 9.41477 7.43756 9.30349 7.43756 9.18746C7.43756 9.07143 7.39147 8.96015 7.30942 8.8781C7.22738 8.79605 7.1161 8.74996 7.00006 8.74996C6.88403 8.74996 6.77275 8.79605 6.6907 8.8781C6.60866 8.96015 6.56256 9.07143 6.56256 9.18746C6.56256 9.30349 6.60866 9.41477 6.6907 9.49682C6.77275 9.57887 6.88403 9.62496 7.00006 9.62496Z" fill="#ED0028" />
                                                                    </svg>
                                                                    <span className="text-[12px] leading-none text-[#ED0028]">
                                                                        Error
                                                                    </span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {file.status === 'uploading' && (
                                        <div className="relative w-full h-[8px] rounded bg-[#F5F5F5] overflow-hidden">
                                            <div className="
            absolute left-0 top-0 bottom-0
            w-[290px]
            bg-gradient-to-r from-[#FFC31D] to-[rgba(255,195,29,0)]
            rounded-inherit
        " />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-[17px] lg:gap-[20px] mt-[32px]'>
                        <p className="font-semibold text-[18px] lg:text-[22px] text-[#33331F]">На кого таможим</p>
                        <div className="flex flex-col gap-[20px] lg:gap-[24px]">
                            <div className='flex flex-col gap-[8px]'>
                                <span className="font-medium text-[13px] lg:text-[14px] text-[#B9B9B9]">ФИО</span>
                                <div className="w-full px-[12px] lg:py-[11px] h-[44px] border border-[#B9B9B966] rounded-[10px] appearance-none bg-white outline-none flex items-center justify-between cursor-pointer">
                                    <span>Иванов Иван Иванович</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g clip-path="url(#clip0_807_1834)">
                                            <path d="M5 8L10 13" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 13L15 8" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_807_1834">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 lg:gap-[16px] gap-[12px]">
                                <div className='flex flex-col gap-[8px]'>
                                    <span className="font-medium text-[13px] lg:text-[14px] text-[#B9B9B9]">Серия паспорта</span>
                                    <input type="text" placeholder="45 01" className="px-[12px] lg:py-[11px] h-[44px] border border-[#B9B9B966] rounded-[10px] appearance-none bg-white outline-none flex items-center justify-between" />
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <span className="font-medium text-[13px] lg:text-[14px] text-[#B9B9B9]">Номер паспорта</span>
                                    <input type="text" placeholder="123456" className="px-[12px] lg:py-[11px] h-[44px] border border-[#B9B9B966] rounded-[10px] appearance-none bg-white outline-none flex items-center justify-between" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <span className="font-medium text-[13px] lg:text-[14px] text-[#B9B9B9]">Адрес</span>
                                <input
                                    type="text"
                                    value="г. Москва, ул. Тверская, д. 12, кв. 34"
                                    className="px-[12px] lg:py-[11px] h-[44px] border border-[#B9B9B966] rounded-[10px] appearance-none bg-white outline-none flex items-center justify-between"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="lg:mt-[24px] mt-[16px] w-full h-[44px] outline-none border-none bg-[#ED0028] rounded-[10px] text-[15px] lg:text-[16px] text-white font-medium mb-[20px] cursor-pointer">
                        Продолжить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewOrderPopup