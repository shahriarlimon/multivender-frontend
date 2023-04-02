import React from 'react'
import { AiOutlineCreditCard, AiOutlineLogin, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import { RxPerson } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
import { MdOutlineTrackChanges } from 'react-icons/md';
import { TbAddressBook } from 'react-icons/tb'


const ProfileSidebar = ({ active, setActive }) => {
    const navigate = useNavigate()
    return (
        <div className='bg-white w-full shadow-sm rounded-[10px] p-4 pt-8 '>
            <div onClick={() => setActive(1)} className='flex items-center cursor-pointer w-full mb-8'>
                <RxPerson color={active === 1 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 1 ? "text-[red]" : null}`} >Profile</span>
            </div>
            <div onClick={() => setActive(2)} className='flex items-center cursor-pointer w-full mb-8'>
                <HiOutlineShoppingBag color={active === 2 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 2 ? "text-[red]" : null}`} >Orders</span>
            </div>
            <div onClick={() => setActive(3)} className='flex items-center cursor-pointer w-full mb-8'>
                <HiOutlineReceiptRefund color={active === 3 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 3 ? "text-[red]" : null}`} >Refunds</span>
            </div>
            <div onClick={() => setActive(4) || navigate("/inbox")} className='flex items-center cursor-pointer w-full mb-8'>
                <AiOutlineMessage color={active === 4 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 4 ? "text-[red]" : null}`} >Inbox</span>
            </div>
            <div onClick={() => setActive(5)} className='flex items-center cursor-pointer w-full mb-8'>
                <MdOutlineTrackChanges color={active === 5 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 5 ? "text-[red]" : null}`} >Track Orders</span>
            </div>
            <div onClick={() => setActive(6)} className='flex items-center cursor-pointer w-full mb-8'>
                <AiOutlineCreditCard color={active === 6 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 6 ? "text-[red]" : null}`} >Payment Methods</span>
            </div>
            <div onClick={() => setActive(7)} className='flex items-center cursor-pointer w-full mb-8'>
                <TbAddressBook color={active === 7 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 7 ? "text-[red]" : null}`} >Address</span>
            </div>
            <div onClick={() => setActive(8)} className='flex items-center cursor-pointer w-full mb-8'>
                <AiOutlineLogin color={active === 8 ? "red" : null} size={20} />
                <span className={`pl-3 ${active === 8 ? "text-[red]" : null}`} >Logout</span>
            </div>

        </div>
    )
}

export default ProfileSidebar
