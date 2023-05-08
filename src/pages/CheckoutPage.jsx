import React from 'react'
import Header from '../components/layout/Header'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import Checkout from '../components/Checkout/Checkout'
import Footer from '../components/layout/Footer'

const CheckoutPage = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <CheckoutSteps />
            <Checkout />
            <br />
            <br />
            <Footer />

        </div>
    )
}

export default CheckoutPage
