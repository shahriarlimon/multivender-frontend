import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiMessageSquareDetail } from 'react-icons/bi';
import { backend_url } from '../../../../server';
import logo from '../../../../Assets/Logo/eshoplogo.png'

const DashboardHeader = () => {
    const { seller } = useSelector((state) => state.seller)

    return (
        <div className='w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex justify-between items-center px-4'>
            <div>
                <Link to="/">
                <img alt='' className='h-[83px] w-[90px] object-cover'
                                        src={logo}/>
                </Link>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center mr-4'>
                    <Link className='hidden 800px:block' to="/dashboard-coupons">
                        <AiOutlineGift color='#555' size={30} className="cursor-pointer mr-4" />
                    </Link>
                    <Link className='hidden 800px:block' to="/dashboard-events">
                        <MdOutlineLocalOffer color='#555' size={30} className="cursor-pointer mr-4" />
                    </Link>
                    <Link className='hidden 800px:block' to="/dashboard-products">
                        <FiShoppingBag color='#555' size={30} className="cursor-pointer mr-4" />
                    </Link>
                    <Link className='hidden 800px:block' to="/dashboard-orders">
                        <FiPackage color='#555' size={30} className="cursor-pointer mr-4" />
                    </Link>
                    <Link className='hidden 800px:block' to="/dashboard-messages">
                        <BiMessageSquareDetail color='#555' size={30} className="cursor-pointer mr-4" />
                    </Link>
                    <Link to={`/shop/${seller._id}`}>
                        <img className='w-[50px] h-[50px] rounded-full object-cover' src={`${backend_url}${seller.avatar}`} alt='' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default DashboardHeader
