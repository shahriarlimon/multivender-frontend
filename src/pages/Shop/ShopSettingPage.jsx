import React from 'react'
import ShopSetting from '../../components/Shop/ShopSetting'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import DashboardHeader from '../../components/Shop/Dashboard/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Shop/Dashboard/Layout/DashboardSidebar'

const ShopSettingPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='flex items-start justify-between w-full'>
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={11} />
                </div>
                <ShopSetting />

            </div>
        </div>
    )
}

export default ShopSettingPage
