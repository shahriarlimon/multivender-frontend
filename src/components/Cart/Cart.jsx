import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import CartSingle from "./CartSingle";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data))
  }
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data))
  }




  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-[100%]  w-[25%] bg-white flex flex-col justify-between shadow-sm">
        {
          cart && cart.length === 0 ? (<div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 fixed top-3 right-3">
              <RxCross1 onClick={() => setOpenCart(false)} className="cursor-pointer" size={25} />


            </div>
            <h5>Cart Item is empty!</h5>

          </div>) : (<>
            <div>
              <div className="flex w-full justify-end pt-3 pr-5">
                <RxCross1
                  size={23}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.normalFlex} p-2`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">{cart?.length} items</h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cart &&
                  cart.map((i, index) => <CartSingle key={index} data={i} quantityChangeHandler={quantityChangeHandler} removeFromCartHandler={removeFromCartHandler} />)}
              </div>
            </div>

            <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}

                >
                  <h1
                    className="text-[#fff] text-[18px] font-[600]"
                  >Checkout Now (USD${`${totalPrice}`})</h1>
                </div>
              </Link>
            </div>
          </>)
        }

      </div >
    </div >
  );
};


export default Cart;