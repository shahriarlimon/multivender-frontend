import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductPage, BestSellingPage, EventPage, FAQPage, ProductDetailsPage, ProfilePage, ShopCreatePage, SellerActivationPage, ShopLoginPage, ShopHomePage, CheckoutPage, PaymentPage, OrderSuccessPage, ShopAllOrders, ShopOrderDetailsPage, UserOrderDetailsPage, TrackOrderPage } from './Routes/Routes.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
import { loadSeller } from "./redux/actions/seller.js";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import SellerProtectedRoute from "./Routes/SellerProtectedRoute.jsx";
import { ShopAllCouponsPage, ShopAllEventsPage, ShopAllProductsPage, ShopAllRefundsPage, ShopCreateProductPage, ShopDashboardPage, ShopEventPage, ShopPreviewPage, } from "./Routes/ShopRoutes.jsx";
import { getAllProducts } from "./redux/actions/product.js";
import { getAllEvents } from "./redux/actions/event.js";
import { server } from "./server.js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



function App() {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }


  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(loadSeller())
    store.dispatch(getAllProducts())
    store.dispatch(getAllEvents())
    getStripeApikey();
  }, [])
  return (
    <> {stripeApikey && (
      <Elements stripe={loadStripe(stripeApikey)}>
        <Routes>
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Elements>
    )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/seller/activation/:activation_token" element={<SellerActivationPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route path="/order/success" element={<ProtectedRoute><OrderSuccessPage /></ProtectedRoute>} />
        <Route path="/user/order/:id" element={<ProtectedRoute><UserOrderDetailsPage /></ProtectedRoute>} />
        <Route path="/user/track/order/:id" element={<ProtectedRoute><TrackOrderPage /></ProtectedRoute>} />
        <Route path="/profile" element={
          <ProtectedRoute> <ProfilePage /> </ProtectedRoute>
        } />
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/shop/:id" element={
          <SellerProtectedRoute>
            <ShopHomePage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <SellerProtectedRoute>
            <ShopDashboardPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-orders" element={
          <SellerProtectedRoute>
            <ShopAllOrders />
          </SellerProtectedRoute>
        } />
        <Route path="/order/:id" element={
          <SellerProtectedRoute>
            <ShopOrderDetailsPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-create-product" element={
          <SellerProtectedRoute>
            <ShopCreateProductPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-products" element={
          <SellerProtectedRoute>
            <ShopAllProductsPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-create-event" element={
          <SellerProtectedRoute>
            <ShopEventPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-events" element={
          <SellerProtectedRoute>
            <ShopAllEventsPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-coupons" element={
          <SellerProtectedRoute>
            <ShopAllCouponsPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-refunds" element={
          <SellerProtectedRoute>
            <ShopAllRefundsPage />
          </SellerProtectedRoute>
        } />

      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
