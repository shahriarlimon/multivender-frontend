import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { backend_url, server } from '../../server'
import styles from '../../styles/styles';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { MdOutlineTrackChanges } from 'react-icons/md'
import { updateUserInfo } from '../../redux/actions/user'
import axios from 'axios'
import { toast } from 'react-toastify'




const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = { name, email, phoneNumber, password };
    dispatch(updateUserInfo(userInfo))
  }
  const handleImage = async (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await axios.put(`${server}/user/update-avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      withCredentials: true
    }).then((res) => {
      window.location.reload()
    }).catch((err) => {
      toast.error(err)
    })
  }
  return (
    <div className='w-full '>
      {/* profile page */}
      {

        active === 1 && <>
          <div className='flex justify-center w-full'>
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className='w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px] '>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>

          </div>
          <br />
          <br />
          <div className='w-full px-5 '>
            <form onSubmit={handleSubmit}>
              <div className='w-full 800px:flex block pb-3'>
                <div className='800px:w-[50%] w-[100%] mb-2 800px:mb-0'>
                  <label className="block pb-2">Full Name</label>
                  <input onChange={(e) => setName(e.target.value)} required value={name} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='800px:w-[50%] w-[100%] '>
                  <label className="block pb-2">Email Address</label>
                  <input onChange={(e) => setEmail(e.target.value)} required value={email} type={"text"} className={`${styles.input} !w-[95%] `} />
                </div>

              </div>
              <div className='w-full flex pb-3'>
                <div className='800px:w-[50%] w-[100%]'>
                  <label className="block pb-2">Phone No.</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} required value={phoneNumber} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='800px:w-[50%] w-[100%]'>
                  <label className="block pb-2">Enter Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} required value={password} type={"password"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <input className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`} type="submit" value="update" />
            </form>

          </div>
        </>
      }
      {/* orders list */}
      {
        active === 2 && (<div>
          <AllOrders />
        </div>)
      }
      {/* All refund orders */}
      {
        active === 3 && (<div>
          <AllRefundOrders />
        </div>)
      }
      {/* Track orders section */}
      {
        active === 5 && (<div>
          <TrackOrder />

        </div>)
      }

      {/* Payment methods */}
      {
        active === 6 && (<div>
          <PaymentMethod />
        </div>)
      }
      {/* user address */}
      {
        active === 7 && (<div>
          <UserAddress />
        </div>)
      }
    </div>
  )
}

const AllOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (<div className='pl-8 pt-1'>
    <DataGrid
      rows={row}
      columns={columns}
      pageSize={10}
      disableRowSelectionOnClick
      autoHeight
    />

  </div>)
}
const AllRefundOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (<div className='pl-8 pt-1'>
    <DataGrid
      rows={row}
      columns={columns}
      pageSize={10}
      disableRowSelectionOnClick
      autoHeight
    />

  </div>)
}
const TrackOrder = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (<div className='pl-8 pt-1'>
    <DataGrid
      rows={row}
      columns={columns}
      pageSize={10}
      disableRowSelectionOnClick
      autoHeight
    />

  </div>)
}
const PaymentMethod = () => {
  return (<div className='w-full px-5'>
    <div className="flex items-center w-full justify-between">
      <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>Payment Methods</h1>
      <div className={`${styles.button} !rounded-md`}>
        <span className='text-[#fff]'>Add New</span>
      </div>
    </div>
    <br />
    <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10'>
      <div className='flex items-center'>
        <img
          src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
          alt=""
        />
        <h5 className="pl-5 font-[600] text-[12px] 800px:text-[unset]">
          Shahriar Limon
        </h5>
      </div>
      <div className="pl-8 flex items-center">
        <h6 className="text-[12px] 800px:text-[unset]">1234 **** *** ****</h6>
        <h5 className="pl-6 text-[12px] 800px:text-[unset]">08/2022</h5>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
        <AiOutlineDelete size={25} className="cursor-pointer" />
      </div>

    </div>


  </div>)
}

const UserAddress = () => {

  return (<div className='w-full px-5'>
    <div className="flex items-center w-full justify-between">
      <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>My Address</h1>
      <div className={`${styles.button} !rounded-md`}>
        <span className='text-[#fff]'>Add New</span>
      </div>
    </div>
    <br />
    <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10'>
      <div className='flex items-center'>
        <h5 className="pl-5 font-[600] text-[12px] 800px:text-[unset]">
          Default
        </h5>
      </div>
      <div className="pl-8 flex items-center">
        <h6 className="text-[12px] 800px:text-[unset]">1234 Rdemon Passaet, Orizina, Japan</h6>
      </div>
      <div className="pl-8 flex items-center">
        <h6 className="text-[12px] 800px:text-[unset]">(389) 288-23</h6>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
        <AiOutlineDelete size={25} className="cursor-pointer" />
      </div>

    </div>


  </div>)
}
export default ProfileContent
