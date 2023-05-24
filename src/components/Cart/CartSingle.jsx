import React, { useState } from 'react'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import { backend_url } from '../../server';
import { RxCross1 } from 'react-icons/rx';
import styles from '../../styles/styles';

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
    const [value, setValue] = useState(data && data?.qty);
    const totalPrice = data?.discountPrice * value;
    const increment = (data) => {
        setValue(value + 1);
        const updateCartData = { ...data, qty: value + 1 }
        quantityChangeHandler(updateCartData)

    }
    const decrement = (data) => {
        setValue(value === 1 ? 1 : value - 1);
        const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 }
        quantityChangeHandler(updateCartData)
    }
    return (
        <div className="border-b p-4">
            <div className="w-full flex items-center">
                <div>
                    <div
                        className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
                        onClick={() => increment(data)}
                    >
                        <HiPlus size={18} color="#fff" />
                    </div>
                    <span className="pl-[10px]">{data?.qty}</span>
                    <div
                        className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                        onClick={() => decrement(data)}
                    >
                        <HiOutlineMinus size={16} color="#7d879c" />
                    </div>
                </div>
                <img src={`${backend_url}${data?.images[0]}`} alt=""
                    className="w-[100px] h-min ml-2 mr-2 rounded-[5px]"
                />
                <div className="pl-[5px]">
                    <h1>{data?.name}</h1>
                    <h4 className="font-[400] text-[15px] text-[#00000082]">${data && data?.discountPrice} * {value}</h4>
                    <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
                        US${totalPrice}
                    </h4>
                </div>
                <RxCross1 onClick={() => removeFromCartHandler(data)} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default CartSingle
