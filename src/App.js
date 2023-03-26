import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage, HomePage } from './Routes.js'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
import { useSelector } from "react-redux";


function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
