import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='register' element={<div> Register Page </div>} />
        <Route path='/*' element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AuthRoutes;
