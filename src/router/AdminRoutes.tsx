import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddScholarship from "../components/schorlaship/AddScholarship";
import AdminHome from "../pages/AdminHome";

const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminHome />} />
        <Route path='/scholarship/' element={<AddScholarship />} />
        <Route path='/scholarship/edit/:id' element={<AddScholarship />} />
        <Route path='*' element={<div> Not found </div>} />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
