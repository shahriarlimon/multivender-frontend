import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from '../components/Shop/ShopLogin'

const ShopLoginPage = () => {
    const { isAuthenticated } = useSelector((state) => state.seller);
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated === true) {
            navigate(`/dashboard`)
        }
    }, [isAuthenticated, navigate])
    return (
        <div>
            <ShopLogin />
        </div>
    )
}

export default ShopLoginPage
