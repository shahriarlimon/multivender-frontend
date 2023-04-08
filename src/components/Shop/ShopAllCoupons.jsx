import React from 'react';
import DashboardHeader from './Dashboard/Layout/DashboardHeader'
import DashboardSidebar from './Dashboard/Layout/DashboardSidebar'
import AllCoupons from './AllCoupons';

const ShopAllCoupons = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='w-full flex justify-between'>
                <div className='800px:w-[330px] w-[80px]'>
                    <DashboardSidebar active={9} />
                </div>
                <div className='w-full flex justify-center'>
                    <AllCoupons />

                </div>
            </div>


        </div>
    )
}

export default ShopAllCoupons
