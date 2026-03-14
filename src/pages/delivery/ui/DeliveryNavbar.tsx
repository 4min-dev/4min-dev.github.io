import React from 'react'

const DeliveryNavbar: React.FC = () => {
    return (
        <div className='hidden lg:flex items-start gap-[12px] pr-[24px]  pl-[24px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29303 2.293C9.48056 2.10553 9.73487 2.00021 10 2.00021C10.2652 2.00021 10.5195 2.10553 10.707 2.293L17.707 9.293C17.8468 9.43285 17.942 9.61102 17.9806 9.80497C18.0192 9.99892 17.9994 10.2 17.9237 10.3827C17.848 10.5654 17.7199 10.7215 17.5555 10.8314C17.3911 10.9413 17.1978 11 17 11H16V17C16 17.2652 15.8947 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18H13C12.7348 18 12.4805 17.8946 12.2929 17.7071C12.1054 17.5196 12 17.2652 12 17V14C12 13.7348 11.8947 13.4804 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13H9.00003C8.73481 13 8.48046 13.1054 8.29292 13.2929C8.10539 13.4804 8.00003 13.7348 8.00003 14V17C8.00003 17.2652 7.89467 17.5196 7.70714 17.7071C7.5196 17.8946 7.26525 18 7.00003 18H5.00003C4.73481 18 4.48046 17.8946 4.29292 17.7071C4.10539 17.5196 4.00003 17.2652 4.00003 17V11H3.00003C2.80228 11 2.60898 10.9413 2.44457 10.8314C2.28016 10.7215 2.15202 10.5654 2.07635 10.3827C2.00068 10.2 1.98088 9.99892 2.01945 9.80497C2.05802 9.61102 2.15322 9.43285 2.29303 9.293L9.29303 2.293Z" fill="#B9B9B9" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_351_752)">
                    <path d="M8.33333 14.1667L12.5 10" stroke="#B9B9B9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 10L8.33333 5.83333" stroke="#B9B9B9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_351_752">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <span className='font-medium text-[14px] text-[#B9B9B9] h-[17px]'>
                Доставка
            </span>
        </div>
    )
}

export default DeliveryNavbar
