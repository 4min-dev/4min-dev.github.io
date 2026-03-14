import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PaymentPopup from '../PaymentPopup'
import isMobileDevice from '../../assets/isMobileDevice'
import { useSidebar } from '../../context/SidebarContext'

const AsidePanel: React.FC = () => {
    const [isPaymentPopup, setIsPaymentPopup] = useState<boolean>(false)
    const location = useLocation()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const { isAsideActive, closeAside } = useSidebar()

    const asideLinks = [
        {
            title: 'Дашбоард',
            pathname: '/dashboard',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 13.5C2.25 11.312 3.11919 9.21354 4.66637 7.66637C6.21354 6.11919 8.31196 5.25 10.5 5.25C10.6989 5.25 10.8897 5.32902 11.0303 5.46967C11.171 5.61032 11.25 5.80109 11.25 6V12.75H18C18.1989 12.75 18.3897 12.829 18.5303 12.9697C18.671 13.1103 18.75 13.3011 18.75 13.5C18.75 15.688 17.8808 17.7865 16.3336 19.3336C14.7865 20.8808 12.688 21.75 10.5 21.75C8.31196 21.75 6.21354 20.8808 4.66637 19.3336C3.11919 17.7865 2.25 15.688 2.25 13.5Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.75 3C12.75 2.80109 12.829 2.61032 12.9697 2.46967C13.1103 2.32902 13.3011 2.25 13.5 2.25C15.688 2.25 17.7865 3.11919 19.3336 4.66637C20.8808 6.21354 21.75 8.31196 21.75 10.5C21.75 10.6989 21.671 10.8897 21.5303 11.0303C21.3897 11.171 21.1989 11.25 21 11.25H13.5C13.3011 11.25 13.1103 11.171 12.9697 11.0303C12.829 10.8897 12.75 10.6989 12.75 10.5V3Z" fill="currentColor" />
            </svg>
        },
        {
            title: 'Мои заказы',
            pathname: '/orders',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.125C1.5 6.089 2.34 5.25 3.375 5.25H9.375C10.411 5.25 11.25 6.09 11.25 7.125V10.875C11.25 11.911 10.41 12.75 9.375 12.75H3.375C2.87772 12.75 2.40081 12.5525 2.04917 12.2008C1.69754 11.8492 1.5 11.3723 1.5 10.875V7.125ZM13.5 8.625C13.5 7.589 14.34 6.75 15.375 6.75H20.625C21.66 6.75 22.5 7.59 22.5 8.625V16.875C22.5 17.91 21.66 18.75 20.625 18.75H15.375C14.8777 18.75 14.4008 18.5525 14.0492 18.2008C13.6975 17.8492 13.5 17.3723 13.5 16.875V8.625ZM3 16.125C3 15.089 3.84 14.25 4.875 14.25H10.125C11.161 14.25 12 15.09 12 16.125V18.375C12 19.41 11.16 20.25 10.125 20.25H4.875C4.37772 20.25 3.90081 20.0525 3.54917 19.7008C3.19754 19.3492 3 18.8723 3 18.375V16.125Z" fill="currentColor" />
            </svg>
        },
        {
            title: 'Доставка',
            pathname: '/delivery',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5H13.5V6.375C13.5 5.339 12.66 4.5 11.625 4.5H3.375ZM13.5 15H1.5V17.625C1.5 18.66 2.34 19.5 3.375 19.5H3.75C3.75 18.7044 4.06607 17.9413 4.62868 17.3787C5.19129 16.8161 5.95435 16.5 6.75 16.5C7.54565 16.5 8.30871 16.8161 8.87132 17.3787C9.43393 17.9413 9.75 18.7044 9.75 19.5H12.75C12.9489 19.5 13.1397 19.421 13.2803 19.2803C13.421 19.1397 13.5 18.9489 13.5 18.75V15Z" fill="currentColor" />
                <path d="M8.25 19.5C8.25 19.1022 8.09196 18.7207 7.81066 18.4394C7.52936 18.1581 7.14782 18 6.75 18C6.35218 18 5.97064 18.1581 5.68934 18.4394C5.40804 18.7207 5.25 19.1022 5.25 19.5C5.25 19.8978 5.40804 20.2794 5.68934 20.5607C5.97064 20.842 6.35218 21 6.75 21C7.14782 21 7.52936 20.842 7.81066 20.5607C8.09196 20.2794 8.25 19.8978 8.25 19.5ZM15.75 6.75002C15.5511 6.75002 15.3603 6.82903 15.2197 6.96969C15.079 7.11034 15 7.3011 15 7.50002V18.75C15 18.837 15.015 18.92 15.042 18.998C15.1666 18.2592 15.5632 17.5937 16.1538 17.1326C16.7444 16.6714 17.4861 16.4479 18.2331 16.5061C18.9802 16.5643 19.6784 16.8999 20.1904 17.4469C20.7024 17.9939 20.9913 18.7128 21 19.462C21.853 19.287 22.522 18.527 22.464 17.579C22.2403 13.9174 20.9422 10.4029 18.732 7.47502C18.5598 7.24862 18.3374 7.06529 18.0823 6.93948C17.8272 6.81367 17.5464 6.74881 17.262 6.75002H15.75Z" fill="currentColor" />
                <path d="M19.5 19.5C19.5 19.1022 19.342 18.7206 19.0607 18.4393C18.7794 18.158 18.3978 18 18 18C17.6022 18 17.2206 18.158 16.9393 18.4393C16.658 18.7206 16.5 19.1022 16.5 19.5C16.5 19.8978 16.658 20.2794 16.9393 20.5607C17.2206 20.842 17.6022 21 18 21C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5Z" fill="currentColor" />
            </svg>
        },
        {
            title: 'Задать вопрос',
            pathname: 'http://t.me/',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM13.628 8.083C12.738 7.306 11.262 7.306 10.373 8.083C10.2233 8.21402 10.0277 8.28019 9.82915 8.26697C9.63064 8.25375 9.44552 8.16221 9.3145 8.0125C9.18348 7.86279 9.11731 7.66716 9.13053 7.46865C9.14375 7.27014 9.23529 7.08502 9.385 6.954C10.839 5.682 13.161 5.682 14.615 6.954C16.128 8.278 16.128 10.472 14.615 11.796C14.362 12.0166 14.0805 12.2023 13.778 12.348C13.102 12.676 12.75 13.122 12.75 13.5V14.25C12.75 14.4489 12.671 14.6397 12.5303 14.7803C12.3897 14.921 12.1989 15 12 15C11.8011 15 11.6103 14.921 11.4697 14.7803C11.329 14.6397 11.25 14.4489 11.25 14.25V13.5C11.25 12.221 12.31 11.393 13.125 10.998C13.307 10.91 13.476 10.799 13.628 10.667C14.458 9.94 14.458 8.81 13.628 8.083ZM12 18C12.1989 18 12.3897 17.921 12.5303 17.7803C12.671 17.6397 12.75 17.4489 12.75 17.25C12.75 17.0511 12.671 16.8603 12.5303 16.7197C12.3897 16.579 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.579 11.4697 16.7197C11.329 16.8603 11.25 17.0511 11.25 17.25C11.25 17.4489 11.329 17.6397 11.4697 17.7803C11.6103 17.921 11.8011 18 12 18Z" fill="currentColor" />
            </svg>
        }
    ]

    const isMobile = isMobileDevice()

    return (
        <>
            {isPaymentPopup && <PaymentPopup onClose={() => setIsPaymentPopup(false)} />}

            {!isMobile ? <aside className='flex flex-col p-[24px] bg-white shadow-[0_0_25.8px_0_#0f0f2b26] h-[860px] rounded-bl-[16px] rounded-br-[16px]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className='flex items-center'>
                    <svg className='w-[61px] h-[32px]' xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="none">
                        <path d="M30.828 16C30.828 7.16344 23.9269 0 15.414 0H0C0 8.83656 6.90107 16 15.414 16H0C0 24.8366 6.90107 32 15.414 32C23.9269 32 30.828 24.8366 30.828 16Z" fill="#ED0028" />
                        <path d="M30.172 0H45.586C54.0989 0 61 7.16344 61 16V32H45.586C37.0731 32 30.172 24.8366 30.172 16V0Z" fill="#ED0028" />
                    </svg>

                    {
                        isHovered && <>
                            <div className='flex flex-col gap-[2px] ml-[12px]'>
                                <span className='font-semibold text-[18px] text-[#ED0028] h-[18px]'>
                                    Китайщина
                                </span>
                                <span className='text-[14px] text-[#949494] opacity-50 h-[14px]'>
                                    Оригинальная
                                </span>
                            </div>

                            <button type='button' className='w-[36px] h-[36px] rounded-[8px] flex items-center justify-center shadow-[0_0_25.8px_0_#0f0f2b26] ml-[32px] cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.875 7.5V4.375C6.875 3.87772 7.07254 3.40081 7.42417 3.04917C7.77581 2.69754 8.25272 2.5 8.75 2.5H13.75C14.2473 2.5 14.7242 2.69754 15.0758 3.04917C15.4275 3.40081 15.625 3.87772 15.625 4.375V15.625C15.625 16.1223 15.4275 16.5992 15.0758 16.9508C14.7242 17.3025 14.2473 17.5 13.75 17.5H8.75C8.25272 17.5 7.77581 17.3025 7.42417 16.9508C7.07254 16.5992 6.875 16.1223 6.875 15.625V12.5M4.375 12.5L1.875 10M1.875 10L4.375 7.5M1.875 10H12.5" stroke="#B9B9B9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </>
                    }
                </div>

                <nav className={`flex flex-col mt-[40px] gap-[16px] ${!isHovered && 'items-center !mt-[23px]'}`}>
                    {asideLinks.map((asideLink) => {
                        const isActive = location.pathname.includes(asideLink.pathname)

                        return (
                            <a
                                key={asideLink.pathname}
                                href={`${asideLink.pathname}`}
                                className={`
                                py-[10px] px-[8px] rounded-[12px] flex items-center gap-[12px]
                                ${isHovered ? 'w-[244px]' : 'w-fit'} h-[44px] transition-all
                                ${isActive
                                        ? 'bg-[#F9F9F9]'
                                        : 'bg-transparent hover:bg-[#F9F9F9]/50'
                                    }
                            `}
                            >
                                <div className={isActive ? 'text-[#333333]' : 'text-[#B9B9B9]'}>
                                    {asideLink.icon}
                                </div>

                                {
                                    isHovered && <span className={`font-medium text-[16px] ${isActive ? 'text-[#333333]' : 'text-[#B9B9B9]'}`}>
                                        {asideLink.title}
                                    </span>
                                }
                            </a>
                        )
                    })}
                </nav>

                {
                    isHovered && <div className='flex items-center justify-between bg-[linear-gradient(94.53deg,#FF7E7E_-23.56%,#ED0028_104.18%)] w-[244px] h-[65px] rounded-[12px] p-[12px] mt-[375px]'>
                        <div className='flex flex-col'>
                            <span className='text-[14px] text-[#FFFFFF] opacity-60 h-[17px]'>
                                Баланс
                            </span>

                            <span className='font-semibold text-[20px] text-[#FFFFFF] h-[24px] '>
                                32 000 ₽
                            </span>
                        </div>


                        <button type='button' className='w-[36px] h-[36px] flex items-center justify-center rounded-[8px] shadow-[0_0_25.8px_0_#0f0f2b26] bg-white outline-none border-none cursor-pointer' onClick={() => setIsPaymentPopup(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM12.75 9C12.75 8.80109 12.671 8.61032 12.5303 8.46967C12.3897 8.32902 12.1989 8.25 12 8.25C11.8011 8.25 11.6103 8.32902 11.4697 8.46967C11.329 8.61032 11.25 8.80109 11.25 9V11.25H9C8.80109 11.25 8.61032 11.329 8.46967 11.4697C8.32902 11.6103 8.25 11.8011 8.25 12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75H11.25V15C11.25 15.1989 11.329 15.3897 11.4697 15.5303C11.6103 15.671 11.8011 15.75 12 15.75C12.1989 15.75 12.3897 15.671 12.5303 15.5303C12.671 15.3897 12.75 15.1989 12.75 15V12.75H15C15.1989 12.75 15.3897 12.671 15.5303 12.5303C15.671 12.3897 15.75 12.1989 15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25H12.75V9Z" fill="#EA0129" />
                            </svg>
                        </button>
                    </div>
                }

                <div className={`mt-auto flex items-center p-[8px] rounded-[12px] bg-[#F6F6F6] ${isHovered ? 'w-[244px] h-[56px]' : 'w-fit flex-col'} mt-[8px]`}>
                    <img className='w-[40px] h-[40px] rounded-[8px]' src='/images/userAvatar.jpg' alt="Аватар" />

                    {
                        isHovered && <div className='flex flex-col gap-[2px] ml-[12px]'>
                            <span className='font-medium text-[16px] text-[#333333] whitespace-nowrap text-ellipsis max-w-[120px] overflow-hidden block h-[19px]'>
                                Фомин Максим
                            </span>
                            <span className='text-[14px] text-[#333333] opacity-60 whitespace-nowrap text-ellipsis max-w-[120px] overflow-hidden block h-[17px]'>
                                @fomin_dev
                            </span>
                        </div>
                    }

                    <button type='button' className={`bg-none outline-none border-none cursor-pointer  ml-auto flex items-center justify-center ${isHovered ? 'ml-[22px]' : '!ml-0'} mt-[12px]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="0.3">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0781 2.25C10.1611 2.25 9.37906 2.913 9.22806 3.817L9.05006 4.889C9.03006 5.009 8.93506 5.149 8.75306 5.237C8.41041 5.40171 8.08079 5.59226 7.76706 5.807C7.60106 5.922 7.43306 5.933 7.31706 5.89L6.30006 5.508C5.8843 5.35224 5.42675 5.34906 5.00887 5.49904C4.59099 5.64901 4.23989 5.94241 4.01806 6.327L3.09606 7.924C2.87415 8.30836 2.79577 8.75897 2.87487 9.19569C2.95398 9.6324 3.18543 10.0269 3.52806 10.309L4.36806 11.001C4.46306 11.079 4.53806 11.23 4.52206 11.431C4.49356 11.8101 4.49356 12.1909 4.52206 12.57C4.53706 12.77 4.46306 12.922 4.36906 13L3.52806 13.692C3.18543 13.9741 2.95398 14.3686 2.87487 14.8053C2.79577 15.242 2.87415 15.6926 3.09606 16.077L4.01806 17.674C4.24004 18.0584 4.59121 18.3516 5.00908 18.5014C5.42695 18.6512 5.88441 18.6478 6.30006 18.492L7.31906 18.11C7.43406 18.067 7.60206 18.079 7.76906 18.192C8.08106 18.406 8.41006 18.597 8.75406 18.762C8.93606 18.85 9.03106 18.99 9.05106 19.112L9.22906 20.183C9.38006 21.087 10.1621 21.75 11.0791 21.75H12.9231C13.8391 21.75 14.6221 21.087 14.7731 20.183L14.9511 19.111C14.9711 18.991 15.0651 18.851 15.2481 18.762C15.5921 18.597 15.9211 18.406 16.2331 18.192C16.4001 18.078 16.5681 18.067 16.6831 18.11L17.7031 18.492C18.1186 18.6472 18.5756 18.6501 18.9931 18.5002C19.4105 18.3502 19.7613 18.0571 19.9831 17.673L20.9061 16.076C21.128 15.6916 21.2063 15.241 21.1272 14.8043C21.0481 14.3676 20.8167 13.9731 20.4741 13.691L19.6341 12.999C19.5391 12.921 19.4641 12.77 19.4801 12.569C19.5085 12.1899 19.5085 11.8091 19.4801 11.43C19.4641 11.23 19.5391 11.078 19.6331 11L20.4731 10.308C21.1811 9.726 21.3641 8.718 20.9061 7.923L19.9841 6.326C19.7621 5.94159 19.4109 5.6484 18.993 5.49861C18.5752 5.34883 18.1177 5.35215 17.7021 5.508L16.6821 5.89C16.5681 5.933 16.4001 5.921 16.2331 5.807C15.9197 5.5923 15.5904 5.40175 15.2481 5.237C15.0651 5.15 14.9711 5.01 14.9511 4.889L14.7721 3.817C14.6991 3.37906 14.4732 2.98122 14.1344 2.69427C13.7956 2.40732 13.366 2.24989 12.9221 2.25H11.0791H11.0781ZM12.0001 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.355 13.9484 15.7501 12.9946 15.7501 12C15.7501 11.0054 15.355 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12.0001 8.25C11.0055 8.25 10.0517 8.64509 9.34841 9.34835C8.64514 10.0516 8.25006 11.0054 8.25006 12C8.25006 12.9946 8.64514 13.9484 9.34841 14.6517C10.0517 15.3549 11.0055 15.75 12.0001 15.75Z" fill="#333333" />
                            </g>
                        </svg>
                    </button>
                </div>
            </aside> : (isAsideActive) && <aside className='fixed bg-white left-0 right-0 top-0 bottom-0 z-500 pt-[32px] pl-[32px] pr-[32px] pb-[30px] flex flex-col'>
                <button type='button' className='outline-none w-[48px] h-[48px] bg-none border border-[#F3F3F3]  flex items-center justify-center rounded-[10px]' onClick={closeAside}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_696_10698)">
                            <path d="M11.667 11.6665L28.3337 28.3332M11.667 28.3332L28.3337 11.6665" stroke="#ED0028" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_696_10698">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <nav className="flex flex-col mt-[28px] gap-[16px]">
                    {asideLinks.map((asideLink, index) => {
                        const isActive = location.pathname.includes(asideLink.pathname)
                        const isLast = index === asideLinks.length - 1

                        return (
                            <a
                                key={asideLink.pathname}
                                href={`${asideLink.pathname}`}
                                className={`
                    py-[10px] px-[8px] rounded-[12px] flex items-center gap-[12px]
                    h-[44px] transition-all
                    ${isActive ? 'bg-[#F9F9F9]' : 'bg-transparent'}
                    ${isLast ? 'border-t border-[#B9B9B9] pt-[24px] rounded-none' : ''}
                `}
                            >
                                <div className={`${isActive ? 'text-[#333333]' : 'text-[#B9B9B9]'} w-[24px] h-[24px]`}>
                                    {asideLink.icon}
                                </div>

                                <span className={`font-medium text-[16px] ${isActive ? 'text-[#333333]' : 'text-[#B9B9B9]'}`}>
                                    {asideLink.title}
                                </span>
                            </a>
                        )
                    })}
                </nav>

                <div className='flex items-center justify-between bg-[linear-gradient(94.53deg,#FF7E7E_-23.56%,#ED0028_104.18%)] w-full h-[65px] rounded-[12px] p-[12px] mt-auto'>
                    <div className='flex flex-col'>
                        <span className='text-[14px] text-[#FFFFFF] opacity-60 h-[17px]'>
                            Баланс
                        </span>

                        <span className='font-semibold text-[20px] text-[#FFFFFF] h-[24px] '>
                            32 000 ₽
                        </span>
                    </div>

                    <button type='button' className='w-[36px] h-[36px] flex items-center justify-center rounded-[8px] shadow-[0_0_25.8px_0_#0f0f2b26] bg-white outline-none border-none cursor-pointer' onClick={() => {
                        closeAside()
                        setIsPaymentPopup(true)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM12.75 9C12.75 8.80109 12.671 8.61032 12.5303 8.46967C12.3897 8.32902 12.1989 8.25 12 8.25C11.8011 8.25 11.6103 8.32902 11.4697 8.46967C11.329 8.61032 11.25 8.80109 11.25 9V11.25H9C8.80109 11.25 8.61032 11.329 8.46967 11.4697C8.32902 11.6103 8.25 11.8011 8.25 12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75H11.25V15C11.25 15.1989 11.329 15.3897 11.4697 15.5303C11.6103 15.671 11.8011 15.75 12 15.75C12.1989 15.75 12.3897 15.671 12.5303 15.5303C12.671 15.3897 12.75 15.1989 12.75 15V12.75H15C15.1989 12.75 15.3897 12.671 15.5303 12.5303C15.671 12.3897 15.75 12.1989 15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25H12.75V9Z" fill="#EA0129" />
                        </svg>
                    </button>
                </div>

                <div className={`flex items-start p-[8px] rounded-[12px] bg-[#F6F6F6] mt-[8px]`}>
                    <img className='w-[40px] h-[40px] rounded-[8px]' src='/images/userAvatar.jpg' alt="Аватар" />

                    <div className='flex flex-col gap-[2px] ml-[12px]'>
                        <span className='font-medium text-[16px] text-[#333333] whitespace-nowrap text-ellipsis max-w-[120px] overflow-hidden block h-[19px]'>
                            Фомин Максим
                        </span>
                        <span className='text-[14px] text-[#333333] opacity-60 whitespace-nowrap text-ellipsis max-w-[120px] overflow-hidden block h-[17px]'>
                            @fomin_dev
                        </span>
                    </div>

                    <button type='button' className={`bg-none outline-none border-none cursor-pointer  ml-auto flex items-center justify-center mt-auto mb-auto`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="0.3">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0781 2.25C10.1611 2.25 9.37906 2.913 9.22806 3.817L9.05006 4.889C9.03006 5.009 8.93506 5.149 8.75306 5.237C8.41041 5.40171 8.08079 5.59226 7.76706 5.807C7.60106 5.922 7.43306 5.933 7.31706 5.89L6.30006 5.508C5.8843 5.35224 5.42675 5.34906 5.00887 5.49904C4.59099 5.64901 4.23989 5.94241 4.01806 6.327L3.09606 7.924C2.87415 8.30836 2.79577 8.75897 2.87487 9.19569C2.95398 9.6324 3.18543 10.0269 3.52806 10.309L4.36806 11.001C4.46306 11.079 4.53806 11.23 4.52206 11.431C4.49356 11.8101 4.49356 12.1909 4.52206 12.57C4.53706 12.77 4.46306 12.922 4.36906 13L3.52806 13.692C3.18543 13.9741 2.95398 14.3686 2.87487 14.8053C2.79577 15.242 2.87415 15.6926 3.09606 16.077L4.01806 17.674C4.24004 18.0584 4.59121 18.3516 5.00908 18.5014C5.42695 18.6512 5.88441 18.6478 6.30006 18.492L7.31906 18.11C7.43406 18.067 7.60206 18.079 7.76906 18.192C8.08106 18.406 8.41006 18.597 8.75406 18.762C8.93606 18.85 9.03106 18.99 9.05106 19.112L9.22906 20.183C9.38006 21.087 10.1621 21.75 11.0791 21.75H12.9231C13.8391 21.75 14.6221 21.087 14.7731 20.183L14.9511 19.111C14.9711 18.991 15.0651 18.851 15.2481 18.762C15.5921 18.597 15.9211 18.406 16.2331 18.192C16.4001 18.078 16.5681 18.067 16.6831 18.11L17.7031 18.492C18.1186 18.6472 18.5756 18.6501 18.9931 18.5002C19.4105 18.3502 19.7613 18.0571 19.9831 17.673L20.9061 16.076C21.128 15.6916 21.2063 15.241 21.1272 14.8043C21.0481 14.3676 20.8167 13.9731 20.4741 13.691L19.6341 12.999C19.5391 12.921 19.4641 12.77 19.4801 12.569C19.5085 12.1899 19.5085 11.8091 19.4801 11.43C19.4641 11.23 19.5391 11.078 19.6331 11L20.4731 10.308C21.1811 9.726 21.3641 8.718 20.9061 7.923L19.9841 6.326C19.7621 5.94159 19.4109 5.6484 18.993 5.49861C18.5752 5.34883 18.1177 5.35215 17.7021 5.508L16.6821 5.89C16.5681 5.933 16.4001 5.921 16.2331 5.807C15.9197 5.5923 15.5904 5.40175 15.2481 5.237C15.0651 5.15 14.9711 5.01 14.9511 4.889L14.7721 3.817C14.6991 3.37906 14.4732 2.98122 14.1344 2.69427C13.7956 2.40732 13.366 2.24989 12.9221 2.25H11.0791H11.0781ZM12.0001 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.355 13.9484 15.7501 12.9946 15.7501 12C15.7501 11.0054 15.355 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12.0001 8.25C11.0055 8.25 10.0517 8.64509 9.34841 9.34835C8.64514 10.0516 8.25006 11.0054 8.25006 12C8.25006 12.9946 8.64514 13.9484 9.34841 14.6517C10.0517 15.3549 11.0055 15.75 12.0001 15.75Z" fill="#333333" />
                            </g>
                        </svg>
                    </button>
                </div>
            </aside>}
        </>
    )
}

export default AsidePanel