import React from 'react'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import DashboardMain from './Dashboard/DashboardMain'

const ShopDashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex  justify-between'>
                <div className='800px:w-[330px] w-[80px] mt-3'>
                    <DashboardSidebar active={1} />
                </div>
                <DashboardMain />


            </div>

        </div>
    )
}

export default ShopDashboard
