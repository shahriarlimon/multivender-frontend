import React from 'react'
import { AiOutlineFolderAdd, AiOutlineGift } from 'react-icons/ai'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx';
import { VscNewFile } from 'react-icons/vsc';
import { CiMoneyBill, CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom'
import { BiMessageSquareDetail } from 'react-icons/bi';
import { HiOutlineReceiptRefund } from 'react-icons/hi';

const DashboardSidebar = ({ active }) => {
  return (
    <div className='w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10'>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard">
          <RxDashboard size={30} color={`${active === 1 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 1 ? " text-[crimson]" : "text-[#555]"}`}>
            Dashboard
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-orders">
          <FiShoppingBag size={30} color={`${active === 2 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 2 ? " text-[crimson]" : "text-[#555]"}`}>
            All Orders
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-products">
          <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 3 ? " text-[crimson]" : "text-[#555]"}`}>
            All Products
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-create-product">
          <AiOutlineFolderAdd size={30} color={`${active === 4 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 4 ? " text-[crimson]" : "text-[#555]"}`}>
            Create Product
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-events">
          <MdOutlineLocalOffer size={30} color={`${active === 5 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 5 ? " text-[crimson]" : "text-[#555]"}`}>
            All Events
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-create-event">
          <VscNewFile size={30} color={`${active === 6 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 6 ? " text-[crimson]" : "text-[#555]"}`}>
            All Events
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-withdraw-money">
          <CiMoneyBill size={30} color={`${active === 7 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 7 ? " text-[crimson]" : "text-[#555]"}`}>
            Withdraw Money
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-messages">
          <BiMessageSquareDetail size={30} color={`${active === 8 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 8 ? " text-[crimson]" : "text-[#555]"}`}>
            Shop Inbox
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-coupons">
          <AiOutlineGift size={30} color={`${active === 9 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 9 ? " text-[crimson]" : "text-[#555]"}`}>
            Discounts Code
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-refunds">
          <HiOutlineReceiptRefund size={30} color={`${active === 10 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden pl-2 text-[18px] font-[400] ${active === 10 ? " text-[crimson]" : "text-[#555]"}`}>
            Refunds
          </h5>
        </Link>
      </div>
      <div className='w-full flex items-center p-4'>
        <Link className='w-full flex items-center' to="/dashboard-settings">
          <CiSettings size={30} color={`${active === 11 ? "crimson" : "#555"}`} />
          <h5 className={`800px:block hidden  pl-2 text-[18px] font-[400] ${active === 11 ? " text-[crimson]" : "text-[#555]"}`}>
            Settings
          </h5>
        </Link>
      </div>
    </div>
  )
}

export default DashboardSidebar
