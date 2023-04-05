import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../components/layout/Loader';

const SellerProtectedRoute = ({ children }) => {
    const { loading, isAuthenticated } = useSelector((state) => state.seller)
    if (loading === true) {
        return <Loader />
    } else {
        if (!isAuthenticated) {
            return <Navigate to="/shop-login" replace />
        }
        return children;
    }
}

export default SellerProtectedRoute
