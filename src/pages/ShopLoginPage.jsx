import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from '../components/Shop/ShopLogin'

const ShopLoginPage = () => {
    const { isAuthenticated, seller } = useSelector((state) => state.seller);
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated === true) {
            navigate(`/shop/${seller._id}`)
        }
    }, [isAuthenticated, navigate, seller])
    return (
        <div>
            <ShopLogin />
        </div>
    )
}

export default ShopLoginPage
