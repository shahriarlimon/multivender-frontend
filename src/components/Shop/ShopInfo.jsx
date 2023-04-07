import React from 'react'
import { useSelector } from 'react-redux'
import { backend_url, server } from '../../server';
import styles from '../../styles/styles';
import axios from 'axios';

const ShopInfo = ({ isOwner }) => {
    const { loading, seller } = useSelector((state) => state.seller);
    const logoutHandler = async () => {
        await axios.get(`${server}/shop/logout`, { withCredentials: true });
        window.location.reload(true);

    }
    return (
        <div>
            <div className={`w-full py-5`}>
                <div className="w-full flex items-center justify-center">
                    <img className='w-[150px] h-[150px] object-cover rounded-full' src={`${backend_url}${seller.avatar}`} alt='' />
                </div>
                <h5 className='text-center py-2 text-[20px]'>{seller?.name}</h5>
                <p className='text-[16px] text-[#000000a6] p-[10px] flex items-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus in dolore autem quidem atque, natus animi nesciunt nam aliquam consequatur provident temporibus, doloremque cupiditate qui ex nihil nisi amet illum.</p>
            </div>
            <div className='p-3'>
                <h5 className='font-[600] '>Address</h5>
                <h4 className=' text-[#000000a6]'> {seller.address}</h4>
            </div>
            <div className='p-3'>
                <h5 className='font-[600] '>Phone</h5>
                <h4 className=' text-[#000000a6]'> {seller.phoneNumber}</h4>
            </div>
            <div className='p-3'>
                <h5 className='font-[600] '>Total Products</h5>
                <h4 className=' text-[#000000a6]'> 20</h4>
            </div>
            <div className='p-3'>
                <h5 className='font-[600] '>Shop Ratings</h5>
                <h4 className=' text-[#000000a6]'> 4/5</h4>
            </div>
            <div className='p-3'>
                <h5 className='font-[600] '>Joined On</h5>
                <h4 className=' text-[#000000a6]'> {seller.createdAt.slice(0, 10)}</h4>
            </div>
            {
                isOwner && (<>
                    <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px] `}>
                        <span className='text-white'>Edit Shop</span>
                    </div>
                    <div onClick={() => logoutHandler()} className={`${styles.button} !w-full !h-[42px] !rounded-[5px] `}>
                        <span className='text-white'>Logout</span>
                    </div>
                </>)
            }
        </div>
    )
}

export default ShopInfo
