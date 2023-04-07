import React from 'react'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import CreateEvent from './CreateEvent'

const ShopCreateEvent = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex items-center justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={6} />
                </div>
                <div className='w-full justify-center flex'>
                    <CreateEvent />
                </div>


            </div>

        </div>
    )
}

export default ShopCreateEvent
