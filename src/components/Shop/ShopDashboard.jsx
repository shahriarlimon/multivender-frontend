import React from 'react'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'

const ShopDashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex items-center justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={1} />


                </div>


            </div>

        </div>
    )
}

export default ShopDashboard
