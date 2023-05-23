import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backend_url, server } from '../../server';
import styles from '../../styles/styles';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { getAllShopProducts } from '../../redux/actions/product';
import Loader from '../layout/Loader';

const ShopInfo = ({ isOwner }) => {
    const { seller } = useSelector((state) => state.seller);
    const [isLoading, setIsLoading] = useState(false)
    const { products } = useSelector((state) => state.products);
    const { id } = useParams();
    const [data, setData] = useState(null);
    const dispatch = useDispatch();


    const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

    const totalRatings =
    products &&
    products.reduce(
        (acc, product) =>
            acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
        0
    );

const avg = totalRatings / totalReviewsLength || 0;

const averageRating = avg.toFixed(2);


    useEffect(() => {
        dispatch(getAllShopProducts(seller?._id))
        setIsLoading(true);
        axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
            setIsLoading(false)
            setData(res.data.shop)

        }).catch((error) => {
            setIsLoading(false)
        })
    }, [id])

    const logoutHandler = async () => {
        await axios.get(`${server}/shop/logout`, { withCredentials: true });
        window.location.reload(true);

    }
    return (
        <>
            {
                isLoading ? <Loader /> : (<div>
                    <div className={`w-full py-5`}>
                        <div className="w-full flex items-center justify-center">
                            <img className='w-[150px] h-[150px] object-cover rounded-full' src={`${backend_url}${data?.avatar}`} alt='' />
                        </div>
                        <h5 className='text-center py-2 text-[20px]'>{data?.name}</h5>
                        <p className='text-[16px] text-[#000000a6] p-[10px] flex items-center'>{data?.description ? data.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus in dolore autem quidem atque, natus animi nesciunt nam aliquam consequatur provident temporibus, doloremque cupiditate qui ex nihil nisi amet illum."}</p>
                    </div>
                    <div className='p-3'>
                        <h5 className='font-[600] '>Address</h5>
                        <h4 className=' text-[#000000a6]'> {data?.address}</h4>
                    </div>
                    <div className='p-3'>
                        <h5 className='font-[600] '>Phone</h5>
                        <h4 className=' text-[#000000a6]'> {data?.phoneNumber}</h4>
                    </div>
                    <div className='p-3'>
                        <h5 className='font-[600] '>Total Products</h5>
                        <h4 className=' text-[#000000a6]'> {products?.length} </h4>
                    </div>
                    <div className='p-3'>
                        <h5 className='font-[600] '>Shop Ratings</h5>
                        <h4 className=' text-[#000000a6]'> {averageRating}/5</h4>
                    </div>
                    <div className='p-3'>
                        <h5 className='font-[600] '>Joined On</h5>
                        <h4 className=' text-[#000000a6]'> {data?.createdAt?.slice(0, 10)}</h4>
                    </div>
                    {
                        isOwner && (<>
                            <Link to="/settings"><div className={`${styles.button} !w-full !h-[42px] !rounded-[5px] `}>
                                <span className='text-white'>Edit Shop</span>
                            </div></Link>
                            <div onClick={() => logoutHandler()} className={`${styles.button} !w-full !h-[42px] !rounded-[5px] `}>
                                <span className='text-white'>Logout</span>
                            </div>
                        </>)
                    }
                </div>)
            }
        </>
    )
}

export default ShopInfo
