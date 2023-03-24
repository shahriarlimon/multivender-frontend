import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage } from './Routes.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
