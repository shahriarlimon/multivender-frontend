import React from 'react'
import styles from '../../../styles/styles'
import CountDown from './CountDown';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from '../../../redux/actions/cart';

const EventCard = ({ active, data }) => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addToCartHandler = (data) => {
        const isItemExists = cart && cart.find((i) => i._id === data._id);
        if (isItemExists) {
            toast.error("Item already in cart!");
        } else {
            if (data.stock < 1) {
                toast.error("Product stock limited!");
            } else {
                const cartData = { ...data, qty: 1 };
                dispatch(addToCart(cartData));
                toast.success("Item added to cart successfully!");
            }
        }
    }
    return (
        <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
            <div className='w-full lg:w-[50%]  m-auto'>
                <img alt='' src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" className='' />
            </div>
            <div className='w-full lg:w-[50%] flex flex-col justify-center'>
                <h2 className={`${styles.productTitle}`}>
                    Iphone 14pro max 8/256gb

                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia, vel repellendus architecto assumenda eveniet molestias vitae ipsa expedita in laboriosam labore consequuntur voluptatibus explicabo! Ipsum laboriosam temporibus reprehenderit consequuntur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia, vel repellendus architecto assumenda eveniet molestias vitae ipsa expedita in laboriosam labore consequuntur voluptatibus explicabo! Ipsum laboriosam temporibus reprehenderit consequuntur
                </p>
                <div className='flex py-2 justify-between'>
                    <div className='flex'>
                        <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through '>
                            1099$
                        </h5>
                        <h5 className='font-bold text-[20px] text-[#333] font-Roboto'>
                            999$
                        </h5>
                    </div>
                    <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>120 sold out</span>

                </div>
                <CountDown />
                <br />
                <div className="flex items-center">
                    <Link to={`/product/${data?._id}?isEvent=true`}>
                        <div className={`${styles.button} text-[#fff]`}>See Details</div>
                    </Link>
                    <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
                </div>

            </div>
        </div>
    )
}

export default EventCard
