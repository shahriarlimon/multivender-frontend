import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from './Routes.js'


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
