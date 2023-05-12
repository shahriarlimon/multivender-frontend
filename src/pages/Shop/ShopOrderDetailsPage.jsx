import React from 'react'
import DashboardHeader from '../../components/Shop/Dashboard/Layout/DashboardHeader'
import Footer from '../../components/layout/Footer'
import OrderDetails from '../../components/Shop/OrderDetails'

const ShopOrderDetailsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  )
}

export default ShopOrderDetailsPage
