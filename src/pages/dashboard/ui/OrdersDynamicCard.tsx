import { ResponsiveBar } from '@nivo/bar'
import React, { useState } from 'react'
import type { OrdersDynamicObject } from '../../../types/OrdersDynamicObject'
import isMobileDevice from '../../../assets/isMobileDevice'

type OrdersDynamicCardProps = {
    data: OrdersDynamicObject[]
}

const OrdersDynamicCard: React.FC<OrdersDynamicCardProps> = ({ data }) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
    const [canScrollRight, setCanScrollRight] = useState<boolean>(true)
    const isMobile = isMobileDevice()

    const updateScrollButtons = () => {
        const el = scrollContainerRef.current
        if (!el) return

        const threshold = 150

        console.log(el.scrollLeft)
        console.log(threshold)

        setCanScrollLeft(el.scrollLeft > threshold)
        setCanScrollRight((el.scrollLeft + el.clientWidth + threshold) < el.scrollWidth)
    }

    React.useEffect(() => {
        const el = scrollContainerRef.current
        if (!el) return

        const handleScroll = () => updateScrollButtons()

        updateScrollButtons()

        el.addEventListener('scroll', handleScroll)

        window.addEventListener('resize', updateScrollButtons)

        return () => {
            el.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateScrollButtons)
        }
    }, [])

    const scrollLeft = () => {
        const el = scrollContainerRef.current
        if (!el) return

        el.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollRight = () => {
        const el = scrollContainerRef.current
        if (!el) return

        el.scrollBy({ left: 300, behavior: 'smooth' })
    }

    return (
        <div className="bg-white rounded-2xl p-[20px] shadow-sm border border-[#F3F3F3] overflow-hidden lg:h-[455px] h-[447px]">
            <span className='font-medium text-[16px] text-[#333333]'>
                Динамика заказов
            </span>

            <div className="flex items-center justify-start gap-[32px] mt-[16px]">
                <div className="flex flex-col gap-[8px]">
                    <span className='font-medium lg:text-[20px] text-[18px] text-[#B9B9B9] lg:h-[24px] h-[22px]'>
                        Активные
                    </span>
                    <div className='flex items-end gap-[8px]'>
                        <div className="lg:w-[20px] lg:h-[20px] w-[18px] h-[18px] lg:rounded-[6px] rounded-[4px] bg-[#1D7BFF]" />
                        <span className='font-semibold lg:text-[20px] text-[18px] text-[#333333] lg:h-[24px] h-[18px] lg:mb-[1px] mb-[4px]'>
                            347
                        </span>

                        <div className='flex items-center justify-center px-[6px] h-[24px] rounded-[12px] bg-[#F6F6F6] gap-[2px] relative lg:top-[2px] top-[3px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_351_2241)">
                                    <path d="M11.3334 4.66665L11.3334 11.3333M11.3334 11.3333L4.66671 11.3333M11.3334 11.3333L4.66671 4.66665" stroke="#ED0028" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_351_2241">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className='font-medium text-[13px] text-[#333333]'>
                                13.4%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                    <span className='font-medium lg:text-[20px] text-[18px] text-[#B9B9B9] lg:h-[24px] h-[22px]'>
                        Закрытые
                    </span>
                    <div className='flex items-end gap-[8px]'>
                        <div className="lg:w-[20px] lg:h-[20px] w-[18px] h-[18px] lg:rounded-[6px] rounded-[4px] bg-[#333333]" />
                        <span className='font-semibold lg:text-[20px] text-[18px] text-[#333333] lg:h-[24px] h-[18px] lg:mb-[1px] mb-[4px]'>
                            234
                        </span>

                        <div className='flex items-center justify-center px-[6px] h-[24px] rounded-[12px] bg-[#F6F6F6] gap-[2px] relative lg:top-[2px] top-[3px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_351_2249)">
                                    <path d="M11.3334 11.3333L11.3334 4.66666M11.3334 4.66666L4.66671 4.66666M11.3334 4.66666L4.66671 11.3333" stroke="#15DB15" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_351_2249">
                                        <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className='font-medium text-[13px] text-[#333333]'>
                                11.2%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative -mx-6">
                <div className="absolute pl-6 top-10 bottom-0 pb-24 z-10 flex flex-col justify-between pointer-events-none bg-white gap-[16px]">
                    {[500, 300, 200, 150, 100, 50, 0].map((value) => (
                        <div key={value} className="text-[13px] text-[#B9B9B9]">
                            {value}
                        </div>
                    ))}
                </div>

                <div
                    ref={scrollContainerRef}
                    className="scrollbar-hide scroll-smooth overflow-x-auto   px-6"
                >
                    <div className="min-w-max">
                        <div className="h-[316px] w-[800px]">
                            <ResponsiveBar
                                data={data}
                                keys={['normalActive', 'overdueActive', 'criticalActive', 'closed']}
                                indexBy="month"
                                groupMode="stacked"
                                layout="vertical"
                                margin={{ top: 0, right: 40, bottom: 30, left: 16 }}
                                padding={.4548}
                                innerPadding={5}
                                borderRadius={24}

                                colors={({ id }) => {
                                    switch (id) {
                                        case 'normalActive': return '#007BFF'
                                        case 'overdueActive': return '#94A3B8'
                                        case 'criticalActive': return '#ED0028'
                                        case 'closed': return '#1A1A1A'
                                        default: return '#000'
                                    }
                                }}

                                axisBottom={{
                                    tickSize: 0,
                                    tickPadding: 14,
                                    tickRotation: 0,
                                }}

                                axisLeft={null}
                                enableGridY={false}
                                enableLabel={true}
                                labelTextColor="#FFFFFF"
                                labelSkipWidth={30}
                                labelSkipHeight={20}
                                label={''}

                                tooltip={({ id, value, indexValue }) => (
                                    <div className="bg-white shadow-[0_0_25.8px_0_#0f0f2b26] rounded-[12px] p-[10px] min-w-[130px] relative flex flex-col h-[96px]">
                                        <span className="text-[13px] text-[#B9B9B9] h-[16px]">
                                            {id === 'normalActive' && 'Активных'}
                                            {id === 'overdueActive' && 'Активных'}
                                            {id === 'criticalActive' && 'Активных'}
                                            {id === 'closed' && 'Закрытых'}
                                        </span>

                                        <span className="mt-[4px] h-[24px] font-semibold text-[20px] text-[#333333]">
                                            {value}
                                        </span>

                                        <div className="absolute left-[10px] right-[10px] bottom-[34px] h-px bg-[#B9B9B9] opacity-40 z-10 pointer-events-none" />

                                        <div className="pt-[14px] flex font-medium text-[13px] text-[#333333]">
                                            {indexValue} 2025
                                        </div>

                                    </div>
                                )}

                                theme={{
                                    labels: { text: { fontSize: 13, fontWeight: 600 } },
                                    axis: { ticks: { text: { fontSize: 12, fill: '#333333', fontWeight: 500 } } },
                                    grid: { line: { stroke: '#E5E5E5' } },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-4 -bottom-1 flex justify-between items-center pointer-events-none z-20">
                    <button
                        onClick={scrollLeft}
                        className={`cursor-pointer pointer-events-auto bg-white rounded p-1 outline-none border-none cursor-pointer ${canScrollLeft ? '' : 'opacity-0'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='rotate-[-180deg]'>
                            <g clip-path="url(#clip0_351_2269)">
                                <path d="M8.33333 14.1667L12.5 10" stroke={isMobile ? '#B9B9B9' : '#333333'} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 10L8.33333 5.83333" stroke={isMobile ? '#B9B9B9' : '#333333'} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_2269">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <button
                        onClick={scrollRight}
                        className={`cursor-pointer pointer-events-auto bg-white rounded w-[20px] h-[20px] outline-none border-none cursor-pointer ${canScrollRight ? '' : 'opacity-0'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_351_2269)">
                                <path d="M8.33333 14.1667L12.5 10" stroke={isMobile ? '#B9B9B9' : '#333333'} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 10L8.33333 5.83333" stroke={isMobile ? '#B9B9B9' : '#333333'} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_351_2269">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrdersDynamicCard
