import React from 'react'
import ShopSetting from '../../components/Shop/ShopSetting'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import DashboardHeader from '../../components/Shop/Dashboard/Layout/DashboardHeader'

const ShopSettingPage = () => {
    return (
        <div>
            <DashboardHeader />
            <ShopSetting />
            <Footer />
        </div>
    )
}

export default ShopSettingPage
