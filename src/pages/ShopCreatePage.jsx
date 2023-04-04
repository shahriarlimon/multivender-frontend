import React, { useEffect } from 'react'
import ShopCreate from '../components/Shop/ShopCreate';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShopCreatePage = () => {
    const { isAuthenticated, seller } = useSelector((state) => state.seller);
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated === true) {
            navigate(`/shop/${seller._id}`)
        }
    }, [isAuthenticated, navigate, seller])
    return (
        <div>
            <ShopCreate />

        </div>
    )
}

export default ShopCreatePage
