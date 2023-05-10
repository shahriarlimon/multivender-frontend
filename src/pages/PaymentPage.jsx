import React from 'react'
import Payment from '../components/Payment/Payment'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={2} />
      <Payment />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default PaymentPage
