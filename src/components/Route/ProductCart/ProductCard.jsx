import React, { useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import styles from '../../../styles/styles';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import { backend_url } from '../../../server';

const ProductCard = ({ product }) => {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const d = product.name;
    const product_name = d.replace(/\s+/g, "-")
    return (
        <>
            <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer '>
                <div className='flex justify-end'>
                </div>
                <Link to={`/product/${product_name}`}>
                    <img className='w-full h-[170px] object-contain' alt='' src={`${backend_url}${product.images && product.images[0]}`} />
                </Link>
                <Link className={`${styles.shop_name}`} to={"/"}>
                    {product.shop.name}
                </Link>
                <Link to={`/product/${product_name}`}>
                    <h4 className='pb-3 font-[500] text-sm '>
                        {product.name.length > 40 ? product.name.slice(0, 40) + "..." : product.name}
                    </h4>
                    <div className='flex'>
                        <AiFillStar size={20} color='#F6BA00' className='mr-2 cursor-pointer' />
                        <AiFillStar size={20} color='#F6BA00' className='mr-2 cursor-pointer' />
                        <AiFillStar size={20} color='#F6BA00' className='mr-2 cursor-pointer' />
                        <AiFillStar size={20} color='#F6BA00' className='mr-2 cursor-pointer' />
                        <AiOutlineStar size={20} color='#F6BA00' className='mr-2 cursor-pointer' />
                    </div>
                    <div className='flex py-2 items-center justify-between'>
                        <div className='flex'>
                            <h5 className={`${styles.productDiscountPrice}`}>{product.originalPrice === 0 ? product.originalPrice : product.discountPrice} $</h5>
                            <h4 className={`${styles.price}`}>
                                {
                                    product.originalPrice ? product.originalPrice + "$" : null
                                }
                            </h4>

                        </div>
                        <span className='font-[400] text-[17px] text-[#68d284]'>
                            {
                                product.sold_out
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
                            onClick={() => setClick(!click)}
                            color={click ? "red" : "#333"}
                            title="Remove from wishlist"
                        />
                    ) : (
                        <AiOutlineHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5"
                            onClick={() => setClick(!click)}
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
