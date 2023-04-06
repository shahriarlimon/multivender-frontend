import React from 'react'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import AllProducts from './AllProducts'

const ShopAllProducts = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={3} />
                </div>
                <div className='w-full flex justify-center'>

                    <AllProducts />
                </div>
            </div>


        </div>
    )
}

export default ShopAllProducts
