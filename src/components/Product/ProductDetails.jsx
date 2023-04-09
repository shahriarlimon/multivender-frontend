import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { backend_url } from '../../server';
import { useSelector } from 'react-redux';

const ProductDetails = ({ product }) => {
    const { products } = useSelector((state) => state.products);
    console.log(product)
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
                                <img className='w-[75%]' alt='' src={`${backend_url}${product && product.images[select]}`} />
                                <div className='w-full flex'>
                                    {
                                        product && product.images.map((i, index) => (
                                            <div
                                                className={`${select === 0 ? "border" : "null"
                                                    } cursor-pointer`}
                                            >
                                                <img
                                                    src={`${backend_url}${i}`}
                                                    alt=""
                                                    className="h-[200px] overflow-hidden mr-3 mt-3"
                                                    onClick={() => setSelect(index)}
                                                />
                                            </div>
                                        ))
                                    }
                                    <div
                                        className={`${select === 1 ? "border" : "null"
                                            } cursor-pointer`}
                                    >
                                    </div>
                                </div>

                            </div>
                            <div className='w-full 800px:w-[50%] pt-5'>
                                <h1 className={`${styles.productTitle}`}>{product.name}</h1>
                                <p>{product.description}</p>
                                <div className='flex pt-3'>
                                    <h4 className={`${styles.productDiscountPrice}`}>{product.discountPrice}$</h4>
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
                                    className={`${styles.button} !mt-6 !rounded-[4px] !h-11 flex items-center`}
                                >
                                    <span className="text-[#fff] flex items-center text-sm">
                                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                                <div className='flex items-center pt-3'>
                                    <img className='w-[50px] h-[50px] rounded-full mr-2' src={`${backend_url}${product?.shop?.avatar}`} alt="" />
                                    <div className='pr-8'>
                                        <h3 className={`${styles.shop_name} pb-1 pt-1`}>{product.shop.name}</h3>
                                        <h5 className='pb-3 text-[15px]'>{/* ({product?.shop?.ratings}) */} 4/5 Ratings</h5>
                                    </div>
                                    <div onClick={() => handleMessageSubmit()} className={`${styles.button} !bg-[#6443d1] mt-4 !rounded !h-11`}>
                                        <span className='text-white flex items-center'>Send Message <AiOutlineMessage className='ml-1' /></span>

                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>
                    <ProductDetailsInfo products={products} product={product} />
                    <br />
                    <br />

                </div>) : null
            }

        </div>
    )
}
const ProductDetailsInfo = ({ product, products }) => {
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
                    <p className='py-2 text-[18px] leading-8 whitespace-pre-line'>{product?.description}</p>

                </>) : null
            }
            {
                active === 2 ? (<div className='w-full justify-center min-h-[40vh] flex items-center'>
                    <p >No reviews yet</p>
                </div>) : null
            }
            {active === 3 && (
                <div className="w-full block 800px:flex p-5">
                    <div className="w-full 800px:w-[50%]">
                        <Link to={`/shop/preview/${product.shop._id}`}>
                            <div className="flex items-center">
                                <img
                                    src={`${backend_url}${product?.shop?.avatar}`}
                                    className="w-[50px] h-[50px] rounded-full"
                                    alt=""
                                />
                                <div className="pl-3">
                                    <h3 className={`${styles.shop_name}`}>{product.shop.name}</h3>
                                    <h5 className="pb-2 text-[15px]">
                                        (4/5) Ratings
                                    </h5>
                                </div>
                            </div>
                        </Link>
                        <p className="pt-2">
                            {product.shop.description}
                        </p>
                    </div>
                    <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
                        <div className="text-left">
                            <h5 className="font-[600]">
                                Joined on: <span className="font-[500]">{product.shop?.createdAt?.slice(0, 10)}</span>
                            </h5>
                            <h5 className="font-[600] pt-3">
                                Total Products: <span className="font-[500]">{products && products.length}</span>
                            </h5>
                            <h5 className="font-[600] pt-3">
                                Total Reviews: <span className="font-[500]">324</span>
                            </h5>
                            <Link to="/">
                                <div
                                    className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                                >
                                    <h4 className="text-white">Visit Shop</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )

}
export default ProductDetails
