import React from 'react'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import AllRefundOrders from './AllRefundOrders'


const ShopAllRefunds = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={10} />
                </div>
                <div className='w-full flex justify-center'>
                    <AllRefundOrders />
                </div>
            </div>


        </div>
    )
}

export default ShopAllRefunds
