import React from 'react'
import CreateProduct from './CreateProduct'
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'

const ShopCreateProduct = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex items-center justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={4} />
                </div>
                <div className='w-full flex justify-center'>
                    <CreateProduct />

                </div>
            </div>


        </div>
    )
}

export default ShopCreateProduct
