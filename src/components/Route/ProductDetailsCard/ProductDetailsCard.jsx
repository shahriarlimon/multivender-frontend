import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx'
import styles from '../../../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShopProducts } from '../../../redux/actions/product';
import { backend_url } from '../../../server';

const ProductDetailsCard = ({ setOpen, product }) => {
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(false);

    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllShopProducts(product && product.shop._id));
    }, [dispatch, product])

    const handleMessageSubmit = () => {

    }
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div className='bg-white '>
            {
                product ? (<div className='fixed w-full h-screen z-40 top-0 left-0 bg-[#00000030] flex items-center justify-center'>
                    <div className='w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4'>
                        <RxCross1 size={30} className="absolute right-3 top-3 z-50" onClick={() => setOpen(false)} />
                        <div className='block w-full 800px:flex'>
                            <div className='w-full 800px:w-[50%]'>
                                <img className="w-[80%]" src={`${backend_url}${product && product.images[0]}`} alt='' />
                                <div className='flex'>
                                    <img className='w-[50px] h-[50px] rounded-full mr-2' src={`${backend_url}${product?.shop?.avatar}`} alt='' />
                                    <div>
                                        <h3 className={`${styles.shop_name}`}>{product.shop.name}</h3>
                                        <h5 className="pb-3 text-[15px]">({product.shop.ratings}) Ratings</h5>
                                    </div>
                                </div>
                                <div onClick={handleMessageSubmit} className={`${styles.button} bg-black mt-4 rounded-[4px] h-11`}>
                                    <span className='text-white text-sm flex items-center'>Send Message <AiOutlineMessage className='ml-1' /></span>
                                </div>
                                <h5 className='text-[16px] text-[red] mt-4'>({product.total_sold}) Sold out</h5>

                            </div>
                            <div className='w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px] '>
                                <h1 className={`${styles.productTitle} text-[20px]`}>{product?.name}</h1>
                                <p className='text-sm mt-3 text-gray-600'>{product?.description}</p>
                                <div className='flex pt-3'>
                                    <h4 className={`${styles.productDiscountPrice}`}>{product?.discountPrice}$</h4>
                                    <h3 className={`${styles.price}`}>{product.originalPrice ? product.originalPrice + "$" : null}</h3>

                                </div>
                                <div className='flex items-center mt-12 justify-between pr-3'>
                                    <div>
                                        <button onClick={decrementCount} className='bg-gradient-to-r text-white from-teal-400 to-teal-500 text-whtie font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out'>
                                            -
                                        </button>
                                        <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                                            {count}
                                        </span>
                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={incrementCount}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        {click ? (
                                            <AiFillHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>

                                </div>
                                <div
                                    className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                                >
                                    <span className="text-[#fff] flex items-center text-sm">
                                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                            </div>





                        </div>

                    </div>
                </div>) : null
            }
        </div>
    )
}

export default ProductDetailsCard
