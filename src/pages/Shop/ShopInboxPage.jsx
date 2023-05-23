import React from 'react'
import DashboardHeader from '../../components/Shop/Dashboard/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Shop/Dashboard/Layout/DashboardSidebar'
import DashboardMessage from '../../components/Shop/DashboardMessage'

const ShopInboxPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className='flex items-start justify-between w-full'>
        <div className='w-[80px] 800px:w-[330px]'>
          <DashboardSidebar active={8} />
        </div>
        <DashboardMessage />

      </div>
    </div>
  )
}

export default ShopInboxPage
