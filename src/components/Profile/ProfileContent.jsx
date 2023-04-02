import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineCamera } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { backend_url } from '../../server'
import styles from '../../styles/styles';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';




const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("")
  const handleSubmit = () => {

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
                <AiOutlineCamera />
              </div>
            </div>

          </div>
          <br />
          <br />
          <div className='w-full px-5 '>
            <form onSubmit={handleSubmit} area-required={true}>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Full Name</label>
                  <input onChange={(e) => setName(e.target.value)} required value={name} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Email Address</label>
                  <input onChange={(e) => setEmail(e.target.value)} required value={email} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Phone No.</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} required value={phoneNumber} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Zip code</label>
                  <input onChange={(e) => setZipCode(e.target.value)} required value={zipCode} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Phone No.</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} required value={phoneNumber} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Zip code</label>
                  <input onChange={(e) => setZipCode(e.target.value)} required value={zipCode} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <div className='w-full flex pb-2'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Address 1</label>
                  <input onChange={(e) => setAddress1(e.target.value)} required value={address1} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Address 2</label>
                  <input onChange={(e) => setAddress2(e.target.value)} required value={address2} type={"text"} className={`${styles.input} !w-[95%]`} />
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

export default ProfileContent
