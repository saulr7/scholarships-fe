import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { isAdmin, isLoggedIn } from "../services/authService";
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    const res = isLoggedIn();
    setLoggedIn(res);
    const admin = isAdmin();
    setIsUserAdmin(admin);
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (!loggedIn) {
    return <AuthRoutes />;
  }

  if (loggedIn && isUserAdmin) {
    return <AdminRoutes />;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<div>It works </div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
