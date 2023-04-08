import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductPage, BestSellingPage, EventPage, FAQPage, ProductDetailsPage, ProfilePage, ShopCreatePage, SellerActivationPage, ShopLoginPage, ShopHomePage } from './Routes/Routes.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
import { loadSeller } from "./redux/actions/seller.js";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import SellerProtectedRoute from "./Routes/SellerProtectedRoute.jsx";
import { ShopAllCouponsPage, ShopAllEventsPage, ShopAllProductsPage, ShopCreateProductPage, ShopDashboardPage, ShopEventPage, } from "./Routes/ShopRoutes.jsx";



function App() {


  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(loadSeller())
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/seller/activation/:activation_token" element={<SellerActivationPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/profile" element={
          <ProtectedRoute> <ProfilePage /> </ProtectedRoute>
        } />
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
