import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, getAllShopProducts } from '../../redux/actions/product';
import { AiOutlineArrowRight, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Loader from '../layout/Loader';
import { toast } from 'react-toastify'
import { getAllShopOrders } from '../../redux/actions/order';

const AllRefundOrders = () => {
    const dispatch = useDispatch();
    const { orders, loading, message } = useSelector((state) => state.order);
    const { seller } = useSelector((state) => state.seller)

    useEffect(() => {
        dispatch(getAllShopOrders(seller?._id))
    }, [dispatch, seller, message])

    const refundOrders = orders && orders.filter((order) => order.status === "Processing refund")
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))


    }

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

    refundOrders &&
        refundOrders.forEach((item) => {
            row.push({
                id: item?._id,
                itemsQty: item?.cart?.length,
                total: "US$ " + item?.totalPrice,
                status: item?.status,
            });
        });
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white">
                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        autoHeight
                    />
                </div>
            )}
        </>
    )
}

export default AllRefundOrders
