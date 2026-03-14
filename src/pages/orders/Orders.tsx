import React, { useState } from 'react'
import OrdersNavbar from './ui/OrdersNavbar'
import OrdersHeading from './ui/OrdersHeading'
import OrderList from './ui/OrderList'
import MobileHeader from './ui/MobileHeader'
import NewOrderPopup from './ui/NewOrderPopup'

const Orders: React.FC = () => {

    const [newOrderPopup, setNewOrderPopup] = useState<boolean>(false)

    function handleSetActiveNewOrderPopup() {
        setNewOrderPopup(!newOrderPopup)
    }

    return (
        <div className='flex overflow-x-hidden'>
            {
                newOrderPopup && <NewOrderPopup onClose={handleSetActiveNewOrderPopup} />
            }
            <div className='flex flex-col lg:pt-[24px] lg:pb-[71px] pt-[50px] grow overflow-x-hidden'>
                <MobileHeader className='pl-[16px] pr-[16px] lg:pl-0 lg:pr-0' />
                <OrdersNavbar />
                <OrdersHeading handleSetActiveNewOrderPopup={handleSetActiveNewOrderPopup} />
                <OrderList />
            </div>
        </div>
    )
}

export default Orders
