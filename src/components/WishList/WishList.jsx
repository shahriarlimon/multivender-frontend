import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { backend_url } from "../../server";
import { addToCart } from "../../redux/actions/cart";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 }
    dispatch(addToCart(newData))
    setOpenWishlist(false)
  }
  const removeFromWishListHandler = (data) => {
    dispatch(removeFromWishlist(data))
  }
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col justify-between shadow-sm">
        {
          wishlist && wishlist.length === 0 ? ((<div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 fixed top-3 right-3">
              <RxCross1 onClick={() => setOpenWishlist(false)} className="cursor-pointer" size={25} />


            </div>
            <h5>Wishlist Item is empty!</h5>

          </div>)) : (<div>
            <div className="flex w-full justify-end pt-5 pr-5">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            {/* Item length */}
            <div className={`${styles.normalFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">{wishlist?.length} items</h5>
            </div>

            {/* cart Single Items */}
            <br />
            <div className="w-full border-t">
              {wishlist &&
                wishlist.map((i, index) => <CartSingle addToCartHandler={addToCartHandler} removeFromWishListHandler={removeFromWishListHandler} key={index} data={i} />)}
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishListHandler, addToCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data?.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 onClick={() => removeFromWishListHandler(data)} className="cursor-pointer" />
        <img src={`${backend_url}${data.images[0]}`} alt=""
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data?.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div onClick={() => addToCartHandler(data)}>
          <BsCartPlus size={20} className="cursor-pointer" title="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;