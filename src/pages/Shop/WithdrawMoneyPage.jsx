import React from 'react'
import DashboardHeader from '../../components/Shop/Dashboard/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Shop/Dashboard/Layout/DashboardSidebar'
import WithdrawMoney from '../../components/Shop/WithdrawMoney'

const WithdrawMoneyPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className='flex items-start justify-between w-full'>
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={7} />
                </div>
                <WithdrawMoney />

            </div>
        </div>
    )
}

export default WithdrawMoneyPage
