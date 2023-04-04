import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SellerProtectedRoute = ({ children }) => {
    const { loading, isAuthenticated } = useSelector((state) => state.seller)
    if (loading === false) {
        if (!isAuthenticated) {
            return <Navigate to="/shop-login" replace />
        }
        return children;
    }
}

export default SellerProtectedRoute
