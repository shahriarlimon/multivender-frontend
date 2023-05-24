import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx'
import styles from '../../../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShopProducts } from '../../../redux/actions/product';
import { backend_url, server } from '../../../server';
import { addToCart } from '../../../redux/actions/cart';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';

const ProductDetailsCard = ({ setOpen, product }) => {
    const { cart } = useSelector((state) => state.cart)
    const { wishlist } = useSelector((state) => state.wishlist);
    const { products } = useSelector((state) => state.products);
    const { user, isAuthenticated } = useSelector((state) => state.user)
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (wishlist && wishlist.find((i) => i._id === product._id)) {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [wishlist, product])

    const handleMessageSubmit = async () => {
        if (isAuthenticated) {
            const groupTitle = product?._id + user?._id;
            const userId = user?._id;
            const sellerId = product?.shop?._id;
            await axios.post(`${server}/conversation/create-new-conversation`, { groupTitle, userId, sellerId }, { withCredentials: true }).then((res) => {
                navigate(`/inbox?${res?.data?.conversation._id}`);
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        } else {
            toast.error("Please login to send message")
        }

    }
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

    }
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
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
                                        <h3 className={`${styles.shop_name}`}>{product?.shop.name}</h3>
                                        <h5 className="pb-3 text-[15px]">({averageRating}/5) Ratings</h5>
                                    </div>
                                </div>
                                <div onClick={handleMessageSubmit} className={`${styles.button} bg-black mt-4 rounded-[4px] h-11`}>
                                    <span className='text-white text-sm flex items-center'>Send Message <AiOutlineMessage className='ml-1' /></span>
                                </div>
                                <h5 className='text-[16px] text-[red] mt-4'>({product?.sold_out}) Sold out</h5>

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
                                <div onClick={() => addToCartHandler(product._id)}
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
