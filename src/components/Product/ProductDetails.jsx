import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { backend_url, server } from '../../server';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { addToWishlist, removeFromWishlist } from '../../redux/actions/wishlist';
import { toast } from 'react-toastify';
import Ratings from '../Ratings/Ratings';
import { getAllShopProducts } from '../../redux/actions/product';
import axios from 'axios';

const ProductDetails = ({ product }) => {
    const { products } = useSelector((state) => state.products);
    const { user, isAuthenticated } = useSelector((state) => state.user);
    const { seller } = useSelector((state) => state.seller);
    const { cart } = useSelector((state) => state.cart)
    const { wishlist } = useSelector((state) => state.wishlist)
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };
    const addToCartHandler = (id) => {
        const itemExists = cart && cart.find((i) => i?._id === id);
        if (itemExists) {
            toast.error("Item already exists");
        } else {
            if (product.stock < count) {
                toast.error("Product stock is limited!")
            } else {
                const cartData = { ...product, qty: count }
                dispatch(addToCart(cartData));
                toast.success("Item added to the cart")
            }
        }

    };
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

    const removeFromWishlistHandler = (product) => {
        setClick(!click);
        dispatch(removeFromWishlist(product))
    }
    const addToWishlistHandler = (product) => {
        setClick(!click);
        dispatch(addToWishlist(product))
    }
    useEffect(() => {
        if (wishlist && wishlist.find((i) => i?._id === product?._id)) {
            setClick(true)
        } else {
            setClick(false)
        }
        dispatch(getAllShopProducts(product?.shopId))
    }, [wishlist, product, dispatch])

    const handleMessageSubmit = async () => {
        if (isAuthenticated) {
            const groupTitle = product?._id + user?._id;
            const userId = user._id;
            const sellerId = product.shop._id;
            await axios.post(`${server}/conversation/create-new-conversation`, { groupTitle, userId, sellerId }, { withCredentials: true }).then((res) => {
                navigate(`/conversation/${res?.data?.conversation?._id}`)
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        } else {
            toast.error("Please login to send message")
        }
    }

    return (
        <div className='bg-white'>
            {
                product ? (<div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
                    <div className='w-full py-5'>
                        <div className='block w-full 800px:flex'>
                            <div className='w-full 800px:w-[50%]'>
                                <img className='w-[60%]' alt='' src={`${backend_url}${product && product.images[select]}`} />
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
                                                onClick={() => removeFromWishlistHandler(product)}
                                                color={click ? "red" : "#333"}
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => addToWishlistHandler(product)}
                                                color={click ? "red" : "#333"}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>

                                </div>
                                <div onClick={() => addToCartHandler(product?._id)}
                                    className={`${styles.button} !mt-6 !rounded-[4px] !h-11 flex items-center`}
                                >
                                    <span className="text-[#fff] flex items-center text-sm">
                                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                                <div className='flex items-center pt-3'>
                                    <Link to={`/shop/preview/${product?.shop?._id}`}>
                                        <img className='w-[50px] h-[50px] rounded-full mr-2' src={`${backend_url}${product?.shop?.avatar}`} alt="" />
                                    </Link>
                                    <div className='pr-8'>
                                        <Link to={`/shop/preview/${product?.shop?._id}`}>
                                            <h3 className={`${styles.shop_name} pb-1 pt-1`}>{product.shop.name}</h3>
                                        </Link>
                                        <h5 className='pb-3 text-[15px]'> ({averageRating}/5) Ratings</h5>
                                    </div>
                                    <div onClick={() => handleMessageSubmit()} className={`${styles.button} !bg-[#6443d1] mt-4 !rounded !h-11`}>
                                        <span className='text-white flex items-center'>Send Message <AiOutlineMessage className='ml-1' /></span>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <ProductDetailsInfo averageRating={averageRating} totalReviewsLength={totalReviewsLength} products={products} product={product} />
                    <br />
                    <br />

                </div>) : null
            }

        </div>
    )
}
const ProductDetailsInfo = ({ product, products, totalReviewsLength, averageRating }) => {
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
                active === 2 ? (<div className='w-full justify-center min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll'>
                    {
                        product && product?.reviews?.map((review, index) => (<div className='w-full flex my-2 '>

                            <img className='w-[50px] h-[50px] rounded-full' src={`${backend_url}/${review?.user?.avatar}`} alt='' />
                            <div className='pl-2'>
                                <div className='w-full flex items-center'>
                                    <h5 className='pl-2 font-[500] mr-3'>{review?.user?.name}</h5>
                                    <Ratings ratings={product?.ratings} />
                                </div>
                                <p>{review?.comment}</p>
                            </div>

                        </div>))
                    }
                    {
                        product?.reviews?.length === 0 && (<h5>No Reviews </h5>)
                    }
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
                                        ({averageRating}/5) Ratings
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
                                Total Reviews: <span className="font-[500]">{totalReviewsLength}</span>
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
