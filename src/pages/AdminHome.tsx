import { Link } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Scholarships from "../components/schorlaship/Scholarships";

const AdminHome = () => {
  return (
    <div>
      <NavBar />

      <div className='grid grid-cols-12 mt-6'>
        <div className='col-span-4 col-start-8 md:col-span-2 md:col-start-10 xl:col-span-1 xl:col-start-10 '>
          <Link to='/scholarship/'>
            <button className=' bg-violet-500  text-white h-8 mt-1 px-4 rounded'>
              <span className='text-sm'>Add Scholarship</span>
            </button>
          </Link>
        </div>
      </div>

      <Scholarships />
    </div>
  );
};

export default AdminHome;
