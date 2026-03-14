import React from 'react'
import DashboardHeading from './ui/DashboardHeading'
import SubscriptionCard from './ui/SubscriptionCard'
// import type { OrdersDynamicObject } from '../../types/OrdersDynamicObject'
import BalanceCard from './ui/BalanceCard'
import type { BalanceAnalyticsObject } from '../../types/BalanceAnalyticsObject'
import NotificationsCard from './ui/NotificationsCard'
import ActivityCard from './ui/ActivityCard'
import BannerCard from './ui/BannerCard'
import MobileHeader from '../orders/ui/MobileHeader'
import ReferralCard from './ui/ReferralCard'
import { useGetReferralsQuery } from '../../redux/services/referralService'

// const ordersDynamicsData: OrdersDynamicObject[] = [
//     { month: 'Янв', normalActive: 150, overdueActive: 130, criticalActive: 0, closed: 320 },
//     { month: 'Фев', normalActive: 180, overdueActive: 140, criticalActive: 0, closed: 400 },
//     { month: 'Мар', normalActive: 120, overdueActive: 130, criticalActive: 0, closed: 280 },
//     { month: 'Апр', normalActive: 100, overdueActive: 180, criticalActive: 0, closed: 220 },
//     { month: 'Май', normalActive: 200, overdueActive: 160, criticalActive: 100, closed: 350 },
//     { month: 'Июн', normalActive: 300, overdueActive: 180, criticalActive: 0, closed: 180 },
//     { month: 'Июл', normalActive: 0, overdueActive: 150, criticalActive: 100, closed: 200 },
//     { month: 'Авг', normalActive: 240, overdueActive: 135, criticalActive: 0, closed: 310 },
//     { month: 'Сен', normalActive: 290, overdueActive: 145, criticalActive: 70, closed: 360 },
//     { month: 'Окт', normalActive: 310, overdueActive: 130, criticalActive: 0, closed: 390 },
//     { month: 'Ноя', normalActive: 270, overdueActive: 155, criticalActive: 70, closed: 340 },
//     { month: 'Дек', normalActive: 200, overdueActive: 140, criticalActive: 60, closed: 280 },
// ] as const

const balanceData: BalanceAnalyticsObject[] = [
    { month: 'Янв', replenishment: 20000, spending: 10000 },
    { month: 'Фев', replenishment: 10000, spending: 30000 },
    { month: 'Мар', replenishment: 5000, spending: 2000 },
    { month: 'Апр', replenishment: 25000, spending: 10000 },
    { month: 'Май', replenishment: 50000, spending: 60000 },
    { month: 'Июн', replenishment: 70000, spending: 60000 },
    { month: 'Июл', replenishment: 80000, spending: 80000 },
    { month: 'Авг', replenishment: 12000, spending: 1500 },
    { month: 'Сен', replenishment: 40360, spending: 10000 },
    { month: 'Окт', replenishment: 10350, spending: 10130 },
    { month: 'Ноя', replenishment: 70340, spending: 10356 },
    { month: 'Дек', replenishment: 50330, spending: 10234 },
]

const Dashboard: React.FC = () => {

    const { data: referrals } = useGetReferralsQuery()
    console.log(referrals)
    return (
        <div className="flex min-h-screen overflow-hidden">
            <div className='flex flex-col pt-[50px] pl-[14px] pr-[16px] lg:pt-[23px] lg:pr-[24px] w-full overflow-hidden'>
                <MobileHeader />
                <DashboardHeading />

                <div className='flex flex-col lg:flex-row lg:mt-[25px] lg:ml-[24px] lg:gap-[12px] mt-[16px] gap-[16px] '>
                    <div className='flex flex-col lg:max-w-[49.455%] lg:gap-[12px] lg:pb-[71px] gap-[16px]'>
                        <SubscriptionCard />
                        <ReferralCard />
                        <BalanceCard data={balanceData} />
                        <BannerCard className='hidden lg:flex' />
                    </div>

                    <div className='flex flex-col grow gap-[12px]'>
                        <NotificationsCard />
                        <ActivityCard />
                        <BannerCard className='lg:hidden pb-[4px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard