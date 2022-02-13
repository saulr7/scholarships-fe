import { useNavigate } from "react-router-dom";
import { logOut } from "../../services/authService";
import BrandName from "./BrandName";

const NavBar = () => {
  const navigate = useNavigate();

  const logOutHanlder = () => {
    logOut();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <div className='bg-white p-2 px-4 flex justify-between items-center'>
        <BrandName />

        <div className='flex  place-items-center'>
          <button className='mx-2 text-violet-300'>
            <i className='fas fa-user-circle fa-2x'></i>
          </button>

          <button
            type='button'
            className='text-gray-400 text-sm mx-1'
            onClick={logOutHanlder}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
