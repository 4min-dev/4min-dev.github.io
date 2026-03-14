import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import isMobileDevice from '../../../assets/isMobileDevice'

type BalanceAnalyticsObject = {
    month: string
    replenishment: number
    spending: number
}

type BalanceCardProps = {
    data: BalanceAnalyticsObject[]
}

type CustomLayerProps = {
    yScale: (value: number) => number
    innerWidth: number
    innerHeight: number
}

const ZeroLineLayer = ({ yScale, innerWidth }: CustomLayerProps) => {
    const yZero = yScale(0)

    if (yZero < 0) return null

    return (
        <line
            x1={0}
            x2={innerWidth}
            y1={yZero}
            y2={yZero}
            stroke="#D6D6D666"
            strokeWidth={1}
        />
    )
}

const BalanceCard: React.FC<BalanceCardProps> = ({ data }) => {
    const isMobile = isMobileDevice()

    const chartData = [
        {
            id: 'Пополнения',
            data: data.map(d => ({ x: d.month, y: d.replenishment }))
        },
        {
            id: 'Траты',
            data: data.map(d => ({ x: d.month, y: d.spending }))
        }
    ]

    const scrollContainerRef = React.useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = React.useState<boolean>(false)
    const [canScrollRight, setCanScrollRight] = React.useState<boolean>(true)

    const updateScrollButtons = () => {
        const el = scrollContainerRef.current
        if (!el) return
        const threshold = 10
        setCanScrollLeft(el.scrollLeft > threshold)
        setCanScrollRight(el.scrollLeft + el.clientWidth + threshold < el.scrollWidth)
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

    const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
    const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })

    const totalReplenishment = data.reduce((sum, d) => sum + d.replenishment, 0)
    const totalSpending = data.reduce((sum, d) => sum + d.spending, 0)

    const replenishmentChange = 13.4
    const spendingChange = 11.2

    return (
        <div className="bg-white rounded-2xl p-[20px] shadow-sm border border-[#F3F3F3] overflow-hidden">
            <div className="flex items-center justify-between">
                <span className="font-medium text-[16px] text-[#333333]">Баланс ₽</span>
                <button className="flex items-center justify-center gap-[4px] w-[89px] h-[32px] rounded-[10px] bg-[#F6F6F6] font-medium text-[13px] text-[#333333] cursor-pointer">
                    Период
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_351_2315)">
                            <path d="M5.83337 8.33333L10 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 12.5L14.1667 8.33333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_351_2315">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className="flex items-center justify-start gap-[40px] lg:gap-[32px] mt-[16px]">
                <div className="flex flex-col lg:gap-[8px] gap-[10px]">
                    <span className="font-medium lg:text-[20px] text-[18px] text-[#B9B9B9]">Пополнения</span>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[12px] gap-[6px]">
                        <div className='flex items-center lg:gap-[8px] gap-[6px]'>
                            <div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] lg:rounded-[6px] rounded-[4px] bg-[#1D7BFF]" />
                            <span className="font-semibold lg:text-[24px] text-[16px] text-[#333333]">
                                {totalReplenishment.toLocaleString()} ₽
                            </span>
                        </div>
                        <div className="flex items-center px-[8px] h-[26px] rounded-[13px] bg-[#F6F6F6] gap-[4px] w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_351_2241)">
                                    <path d="M11.3334 4.66665L11.3334 11.3333M11.3334 11.3333L4.66671 11.3333M11.3334 11.3333L4.66671 4.66665" stroke="#ED0028" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_351_2241">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-medium text-[13px] text-[#333333]">{replenishmentChange}%</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:gap-[8px] gap-[10px]">
                    <span className="font-medium lg:text-[20px] text-[18px] text-[#B9B9B9]">Траты</span>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[12px] gap-[6px]">
                        <div className='flex items-center lg:gap-[8px] gap-[6px]'>
                            <div className="lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] lg:rounded-[6px] rounded-[4px] bg-[#ED0028]" />
                            <span className="font-semibold lg:text-[24px] text-[16px] text-[#333333]">
                                {totalSpending.toLocaleString()} ₽
                            </span>
                        </div>
                        <div className="flex items-center px-[8px] h-[26px] rounded-[13px] bg-[#F6F6F6] gap-[4px] w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_403_2215)">
                                    <path d="M11.3333 11.3337L11.3333 4.66699M11.3333 4.66699L4.66665 4.66699M11.3333 4.66699L4.66665 11.3337" stroke="#15DB15" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_403_2215">
                                        <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-medium text-[13px] text-[#333333]">{spendingChange}%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative -mx-6 mt-8">
                <div
                    ref={scrollContainerRef}
                    className="scrollbar-hide scroll-smooth overflow-x-auto px-6"
                >
                    <div className="min-w-max">
                        <div className="h-[320px] w-[900px]">
                            <ResponsiveLine
                                data={chartData}
                                margin={{ top: 20, right: isMobile ? 14 : 40, bottom: 50, left: isMobile ? 10 : 60 }}
                                xScale={{ type: 'point' }}
                                yScale={{ type: 'linear', min: 0, max: 'auto' }}
                                curve="monotoneX"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 0,
                                    tickPadding: 12,
                                    tickRotation: 0,
                                    legendOffset: 36
                                }}
                                axisLeft={null}
                                enableGridX={true}
                                enableGridY={false}
                                enablePoints={false}
                                enableArea={true}
                                areaBaselineValue={0}
                                lineWidth={0}
                                areaOpacity={1}
                                areaBlendMode="multiply"
                                colors={d => (d.id === 'Пополнения' ? '#1D7BFFCC' : '#ED0028CC')}
                                defs={[
                                    linearGradientDef('gradientBlue', [
                                        { offset: 0, color: '#1D7BFFCC', opacity: 1 },
                                        { offset: 5, color: '#1D7BFFCC', opacity: 0.8 },
                                        { offset: 100, color: '#1D7BFFCC', opacity: 0 }
                                    ]),
                                    linearGradientDef('gradientRed', [
                                        { offset: 0, color: '#ED0028CC', opacity: 1 },
                                        { offset: 5, color: '#ED0028CC', opacity: 0.8 },
                                        { offset: 100, color: '#ED0028CC', opacity: 0 }
                                    ])
                                ]}
                                fill={[
                                    { match: { id: 'Пополнения' }, id: 'gradientBlue' },
                                    { match: { id: 'Траты' }, id: 'gradientRed' }
                                ]}
                                layers={[
                                    'grid',
                                    'markers',
                                    'axes',
                                    'areas',
                                    'crosshair',
                                    'lines',
                                    'points',
                                    'slices',
                                    'mesh',
                                    'legends',
                                    ZeroLineLayer
                                ]}
                                enableSlices="x"
                                sliceTooltip={({ slice }) => {
                                    const replenishmentPoint = slice.points.find(p => p.seriesId === 'Пополнения')
                                    const spendingPoint = slice.points.find(p => p.seriesId === 'Траты')

                                    const replenishment = replenishmentPoint?.data.y ?? 0
                                    const spending = spendingPoint?.data.y ?? 0

                                    return (
                                        <div className="bg-white shadow-lg rounded-[12px] p-[12px] min-w-[140px]">
                                            <div className="text-[13px] text-[#B9B9B9] mb-1">{slice.points[0].data.x}</div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-3 h-3 rounded bg-[#1D7BFF]" />
                                                <span className="text-[14px] font-medium">+{replenishment.toLocaleString()} ₽</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded bg-[#ED0028]" />
                                                <span className="text-[14px] font-medium">-{spending.toLocaleString()} ₽</span>
                                            </div>
                                        </div>
                                    )
                                }}
                                theme={{
                                    grid: {
                                        line: {
                                            stroke: '#D6D6D6',
                                            strokeWidth: 1,
                                            strokeDasharray: '6 6'
                                        }
                                    },
                                    axis: {
                                        ticks: {
                                            text: { fontSize: 13, fill: '#B9B9B9', fontWeight: 500 }
                                        }
                                    },
                                    tooltip: { container: { background: '#ffffff' } }
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-6 bottom-6 flex justify-between items-center pointer-events-none z-20">
                    <button
                        onClick={scrollLeft}
                        className={`cursor-pointer pointer-events-auto bg-white rounded p-1 shadow-md ${canScrollLeft ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                    >
                        <svg className="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333" stroke="#333333" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollRight}
                        className={`cursor-pointer pointer-events-auto bg-white rounded shadow-md p-1 ${canScrollRight ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333" stroke="#333333" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard