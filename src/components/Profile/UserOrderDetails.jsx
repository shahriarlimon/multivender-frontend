import React, { useEffect, useState } from 'react'
import { BsFillBackspaceFill } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { backend_url, server } from '../../server';
import { getAllUserOrders } from '../../redux/actions/order';
import styles from '../../styles/styles';

const UserOrderDetails = () => {
    const { orders, loading } = useSelector((state) => state.order);
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [status, setStatus] = useState("");
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllUserOrders(user?._id))
    }, [dispatch, user])
    const data = orders && orders?.find((item) => item?._id === id);

    const orderUpdateHandler = async (e) => {
        await axios
            .put(
                `${server}/order/update-order-status/${id}`,
                {
                    status,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success("Order updated!");
                navigate("/dashboard-orders");
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };


    const refundOrderUpdateHandler = async (e) => {
        await axios
            .put(
                `${server}/order/order-refund-success/${id}`,
                {
                    status,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success("Order updated!");
/*                 dispatch(getAllShopOrders(seller._id));
 */            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }

    return (
        <div className={`py-4 min-h-screen ${styles.section}`}>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center'>
                    <BsFillBackspaceFill size={30} color='crimson' />
                    <h1 className='pl-2 text-[25px]'>Order Details</h1>
                </div>
            </div>
            <div className='w-full flex items-center justify-between pt-6 '>
                <h5 className='text-[#00000084]' >Order ID : <span>#{data?._id?.slice(0, 8)}</span></h5>
                <h5 className='text-[#00000084]'>Placed on : <span>{data?.createdAt?.slice(0, 10)}</span></h5>
            </div>
            {/* order items */}
            <br />
            <br />
            {data &&
                data?.cart.map((item, index) => (
                    <div className="w-full flex items-start mb-5">
                        <img
                            src={`${backend_url}/${item.images[0]}`}
                            alt=""
                            className="w-[80x] h-[80px]"
                        />
                        <div className="w-full">
                            <h5 className="pl-3 text-[20px]">{item.name}</h5>
                            <h5 className="pl-3 text-[20px] text-[#00000091]">
                                US${item.discountPrice} x {item.qty}
                            </h5>
                        </div>
                        {
                            data?.status === "Delivered" && (<div className={`${styles.button} text-[#fff]`}>
                                Write a review
                            </div>)
                        }
                    </div>
                ))}
            <div className="border-t w-full text-right">
                <h5 className="pt-3 text-[18px]">
                    Total Price: <strong>US${data?.totalPrice}</strong>
                </h5>
            </div>
            <br />
            <br />
            <div className="w-full 800px:flex items-center">
                <div className="w-full 800px:w-[60%]">
                    <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
                    <h4 className="pt-3 text-[20px]">
                        {data?.shippingAddress.address1 +
                            " " +
                            data?.shippingAddress.address2}
                    </h4>
                    <h4 className=" text-[20px]">{data?.shippingAddress.country}</h4>
                    <h4 className=" text-[20px]">{data?.shippingAddress.city}</h4>
                    <h4 className=" text-[20px]">{data?.user?.phoneNumber}</h4>
                </div>
                <div className="w-full 800px:w-[40%]">
                    <h4 className="pt-3 text-[20px]">Payment Info:</h4>
                    <h4>
                        Status:{" "}
                        {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
                    </h4>
                </div>
            </div>
            <br />
            <Link to={"/"}>
                <div className={`${styles.button} text-white`}>
                    Send Message
                </div>
            </Link>
            <br />
            <br />

        </div>
    )
}

export default UserOrderDetails
