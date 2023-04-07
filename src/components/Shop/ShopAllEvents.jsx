import React from 'react'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import AllEvents from './AllEvents'

const ShopAllEvents = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={5} />
                </div>
                <div className='w-full flex justify-center'>
                    <AllEvents />
                </div>
            </div>


        </div>
    )
}

export default ShopAllEvents
