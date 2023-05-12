import React from 'react'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import AllOrders from './AllOrders'

const ShopAllOrders = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={2} />
                </div>
                <div className='w-full flex justify-center'>

                    <AllOrders />
                </div>
            </div>


        </div>
    )
}

export default ShopAllOrders
