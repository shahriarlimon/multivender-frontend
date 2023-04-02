import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';

const ProductDetails = ({ product }) => {

    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };
    const handleMessageSubmit = () => {

    }
    return (
        <div className='bg-white'>
            {
                product ? (<div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
                    <div className='w-full py-5'>
                        <div className='block w-full 800px:flex'>
                            <div className='w-full 800px:w-[50%]'>
                                <img className='w-[75%]' alt='' src={product.image_Url[select].url} />
                                <div className='w-full flex'>
                                    <div className={`${select === 0 ? "border" : null} cursor-pointer`}>
                                        <img onClick={() => setSelect(0)} className='h-[150px]  w-[150px]' src={product?.image_Url[0].url} alt="" />
                                    </div>
                                    <div className={`${select === 1 ? "border" : null} cursor-pointer`}>
                                        <img onClick={() => setSelect(1)} className='h-[150px] w-[150px]' src={product?.image_Url[1].url} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className='w-full 800px:w-[50%] pt-5'>
                                <h1 className={`${styles.productTitle}`}>{product.name}</h1>
                                <p>{product.description}</p>
                                <div className='flex pt-3'>
                                    <h4 className={`${styles.productDiscountPrice}`}>{product.discount_price}$</h4>
                                    <h3 className={`${styles.price}`}>{product.price ? product.price + "$" : null}</h3>
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
                                    className={`${styles.button} !mt-6 !rounded-[4px] !h-11 flex items-center`}
                                >
                                    <span className="text-[#fff] flex items-center text-sm">
                                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                                <div className='flex items-center pt-3'>
                                    <img className='w-[50px] h-[50px] rounded-full mr-2' src={product.shop.shop_avatar.url} alt="" />
                                    <div className='pr-8'>
                                        <h3 className={`${styles.shop_name} pb-1 pt-1`}>{product.shop.name}</h3>
                                        <h5 className='pb-3 text-[15px]'>({product.shop.ratings}) Ratings</h5>
                                    </div>
                                    <div onClick={() => handleMessageSubmit()} className={`${styles.button} !bg-[#6443d1] mt-4 !rounded !h-11`}>
                                        <span className='text-white flex items-center'>Send Message <AiOutlineMessage className='ml-1' /></span>

                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>
                    <ProductDetailsInfo product={product} />
                    <br />
                    <br />

                </div>) : null
            }

        </div>
    )
}
const ProductDetailsInfo = ({ product }) => {
    const [active, setActive] = useState(1);

    return (
        <div className='bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded '>
            <div className='w-full flex justify-between border-b pt-10 pb-2'>
                <div className='relative'>
                    <h5 onClick={() => setActive(1)} className={"text-[#000] text-[18px] px-1 leading-5 font-600 cursor-pointer 800px:text-[20px] "}>Product Details</h5>
                    {
                        active === 1 ? (<div className={`${styles.active_indicator}`} />) : null
                    }
                </div>
                <div className='relative'>
                    <h5 onClick={() => setActive(2)} className={"text-[#000] text-[18px] px-1 leading-5 font-600 cursor-pointer 800px:text-[20px] "}>Product Reviews</h5>
                    {
                        active === 2 ? (<div className={`${styles.active_indicator}`} />) : null
                    }
                </div>
                <div className='relative'>
                    <h5 onClick={() => setActive(3)} className={"text-[#000] text-[18px] px-1 leading-5 font-600 cursor-pointer 800px:text-[20px] "}>Seller Information</h5>
                    {
                        active === 3 ? (<div className={`${styles.active_indicator}`} />) : null
                    }
                </div>

            </div>
            {
                active === 1 ? (<>
                    <p className='py-2 text-[18px] leading-8 whitespace-pre-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id sit explicabo, sequi ipsa porro cupiditate blanditiis ratione quibusdam tempore enim iure voluptas possimus fuga autem quo expedita, laboriosam ex?</p>
                    <p className='py-2 text-[18px] leading-8 whitespace-pre-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id sit explicabo, sequi ipsa porro cupiditate blanditiis ratione quibusdam tempore enim iure voluptas possimus fuga autem quo expedita, laboriosam ex?</p>
                    <p className='py-2 text-[18px] leading-8 whitespace-pre-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id sit explicabo, sequi ipsa porro cupiditate blanditiis ratione quibusdam tempore enim iure voluptas possimus fuga autem quo expedita, laboriosam ex?</p>
                </>) : null
            }
            {
                active === 2 ? (<div className='w-full justify-center min-h-[40vh] flex items-center'>
                    <p >No reviews yet</p>
                </div>) : null
            }
            {
                active === 3 && (<div className='w-full block 800px:flex p-5'>
                    <div className='w-full 800px:w-[50%]'>
                        <div className='flex items-center'>
                            <img src={product.shop.shop_avatar.url} className='w-[50px] h-[50px] rounded-full' alt='' />
                            <div className='pl-3'>
                                <h3 className={`${styles.shop_name}`}>{product.shop_name}</h3>
                                <h5 className='pb-3 text-[15px]'>({product.shop.ratings}) Ratings</h5>
                            </div>

                        </div>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, enim! Commodi voluptates temporibus numquam fugiat quaerat nemo impedit sequi sint animi quod? Facilis labore iusto laboriosam officia sapiente excepturi ut!</p>

                    </div>
                    <div className='w-full 800px:w-[50%] mt-5 800px:flex flex-col items-end '>
                        <div className='text-left '>
                            <h5 className='font-[600]'>Joined on: <span className='font-[500]'>10 April 2023</span></h5>
                            <h5 className='font-[600] pt-2'>Total Products: <span className='font-[500]'>3,200</span></h5>
                            <h5 className='font-[600] pt-2'>Total Reviews: <span className='font-[500]'>232</span></h5>
                            <Link to='/'>
                                <div className={`${styles.button} !rounded-[4px] !h-[40px] mt-3`}>
                                    <h4 className='text-white'>Visit Shop</h4>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>)
            }

        </div>
    )

}
export default ProductDetails
