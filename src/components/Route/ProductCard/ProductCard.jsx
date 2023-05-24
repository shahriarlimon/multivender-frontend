import React, { isValidElement, useEffect, useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import styles from '../../../styles/styles';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import { backend_url } from '../../../server';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';
import { toast } from 'react-toastify';
import { addToCart } from '../../../redux/actions/cart';
import Ratings from '../../Ratings/Ratings';

const ProductCard = ({ product, isEvent }) => {
    const dispatch = useDispatch();
    const { wishlist } = useSelector((state) => state.wishlist)
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);

   /*  const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }; */


    const removeFromWishlistHandler = (product) => {
        setClick(!click);
        dispatch(removeFromWishlist(product))
    }
    const addToWishlistHandler = (product) => {
        setClick(!click);
        dispatch(addToWishlist(product))
    }
 /*    const addToCartHandler = (id) => {
        const isItemExists = cart && cart.find((i) => i._id === id);
        if (isItemExists) {
            toast.error("Item already in cart!");
        } else {
            if (product.stock < 1) {
                toast.error("Product stock limited!");
            } else {
                const cartData = { ...product, qty: count };
                dispatch(addToCart(cartData));
                toast.success("Item added to cart successfully!");
            }
        }
    }; */
    useEffect(() => {
        if (wishlist && wishlist.find((i) => i._id === product._id)) {
            setClick(true)
        } else {
            setClick(false)
        }
    }, [wishlist, product])

    return (
        <>
            <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer '>
                <div className='flex justify-end'>
                </div>
                <Link to={`${isEvent === true ? `/product/${product?._id}?isEvent=true` : `/product/${product._id}`}`}>
                    <img className='w-full h-[170px] object-contain' alt='' src={`${backend_url}${product?.images && product.images[0]}`} />
                </Link>
                <Link className={`${styles.shop_name}`} to={`/shop/preview/${product?.shop?._id}`}>
                    {product?.shop.name}
                </Link>
                <Link to={`/product/${product?._id}`}>
                    <h4 className='pb-3 font-[500] text-sm '>
                        {product.name.length > 40 ? product.name.slice(0, 40) + "..." : product.name}
                    </h4>
                    <div className='flex'>
                        <Ratings ratings={product?.ratings} />
                    </div>
                    <div className='flex py-2 items-center justify-between'>
                        <div className='flex'>
                            <h5 className={`${styles.productDiscountPrice}`}>{product?.originalPrice === 0 ? product?.originalPrice : product?.discountPrice} $</h5>
                            <h4 className={`${styles.price}`}>
                                {
                                    product?.originalPrice ? product.originalPrice + "$" : null
                                }
                            </h4>

                        </div>
                        <span className='font-[400] text-[17px] text-[#68d284]'>
                            {
                                product?.sold_out
                            } sold
                        </span>

                    </div>
                </Link>
                {/* side options */}
                <div>
                    {click ? (
                        <AiFillHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5"
                            onClick={() => removeFromWishlistHandler(product)}
                            color={click ? "red" : "#333"}
                            title="Remove from wishlist"
                        />
                    ) : (
                        <AiOutlineHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5"
                            onClick={() => addToWishlistHandler(product)}
                            color={click ? "red" : "#333"}
                            title="Add to wishlist"
                        />
                    )}
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        onClick={() => setOpen(!open)}
                        color="#333"
                        title="Quick view"
                    />
                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={() => setOpen(!open)}
                        color="#444"
                        title="Add to cart"
                    />
                    {
                        open ? (<ProductDetailsCard product={product} setOpen={setOpen} open={open} />) : null
                    }
                </div>
            </div>
        </>
    )
}

export default ProductCard
