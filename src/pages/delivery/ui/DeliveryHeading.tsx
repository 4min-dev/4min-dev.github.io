import React from 'react'
import SearchInput from '../../../ui/SearchInput'

const DeliveryHeading: React.FC = () => {

    return (
        <div className='flex flex-col lg:mt-[20px] lg:pr-[24px] lg:pl-[24px] mt-[32px] pr-[16px] pl-[16px]'>
            <span className='hidden lg:block font-medium text-[24px] text-[#33331F]'>
                Доставка
            </span>

            <div className='flex justify-between mt-[16px] flex-wrap lg:flex-nowrap w-full'>
                <div className='flex lg:gap-x-[8px] lg:gap-y-[8px] gap-x-[8px] gap-y-[8px] flex-wrap lg:flex-nowrap w-full'>
                    <button type='button' className='h-[44px] w-[calc(50%-4px)] lg:w-[169px] items-center justify-center gap-[8px] flex font-medium text-[16px] text-[#333333] bg-white border border-[#F1F1F1] outline-none rounded-[10px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.7998 15.8995C7.7998 16.2974 7.64263 16.6798 7.36133 16.9611C7.08002 17.2424 6.69763 17.3995 6.2998 17.3995H4.5C4.10234 17.3995 3.72069 17.2422 3.43945 16.9611C3.15815 16.6798 3 16.2974 3 15.8995C3.0001 15.5019 3.15824 15.1202 3.43945 14.839C3.7207 14.5578 4.10229 14.3996 4.5 14.3995H6.2998C6.69763 14.3995 7.08002 14.5577 7.36133 14.839C7.64248 15.1202 7.7997 15.5019 7.7998 15.8995ZM7.7998 15.8995C7.79991 15.5019 7.95804 15.1202 8.23926 14.839C8.52047 14.5578 8.90212 14.3996 9.2998 14.3995H13.5C13.8977 14.3995 14.2793 14.5579 14.5605 14.839C14.8418 15.1202 14.9999 15.5019 15 15.8995C15 16.2974 14.8419 16.6798 14.5605 16.9611C14.2793 17.2421 13.8976 17.3995 13.5 17.3995H9.2998C8.90217 17.3994 8.52046 17.2422 8.23926 16.9611C7.95795 16.6798 7.7998 16.2974 7.7998 15.8995ZM22.2002 10.7999V17.3995C22.2002 17.7177 22.0736 18.0231 21.8486 18.2482C21.6236 18.4732 21.3183 18.5997 21 18.5997H3C2.68181 18.5997 2.37636 18.4732 2.15137 18.2482C1.92651 18.0232 1.7998 17.7177 1.7998 17.3995V10.7999H22.2002ZM3 5.39954H21C21.3182 5.39954 21.6236 5.52618 21.8486 5.7511C22.0736 5.9761 22.2001 6.28154 22.2002 6.59973H1.7998C1.79986 6.28154 1.92637 5.9761 2.15137 5.7511C2.37636 5.5261 2.68181 5.39959 3 5.39954Z" fill="#333333" stroke="#333333" stroke-width="1.2" />
                        </svg>

                        Оплатить все
                    </button>

                    <button type='button' className='h-[44px] w-[calc(50%-4px)] lg:w-[131px] items-center justify-center flex font-medium text-[16px] text-[#333333] bg-white border border-[#F1F1F1] outline-none rounded-[10px] cursor-pointer'>
                        Выбрать все
                    </button>

                    <SearchInput className='lg:w-[287px] w-full lg:order-none' />
                </div>

                <button type='button' className='h-[44px] lg:w-[168px] w-full mt-[8px] lg:mt-0 items-center justify-center gap-[8px] flex font-medium text-[16px] text-[#FCFDFF] bg-[#ED0028] border-none outline-none rounded-[10px] cursor-pointer lg:order-none'>
                    <svg className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4.92896 12H19.0711M12 19.0711V4.92893" stroke="#FCFDFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    Новый заказ
                </button>
            </div>
        </div>
    )
}

export default DeliveryHeading
