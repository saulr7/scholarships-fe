import React from "react";
import Login from "../components/auth/Login";
import BrandName from "../components/common/BrandName";

const LandingPage = () => {
  return (
    <div className='p-2 px-3'>
      <BrandName />
      <Login />
    </div>
  );
};

export default LandingPage;
