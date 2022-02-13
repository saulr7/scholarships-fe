import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScholarshipModel from "../../models/scholarshipModel";
import { isAdmin } from "../../services/authService";
import { remove } from "../../services/scholarshipsService";

type IProps = {
  scholarship: ScholarshipModel;
  onRemove?: Function;
};

const Scholarships: React.FC<IProps> = ({ scholarship, onRemove }) => {
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    const admin = isAdmin();
    setIsUserAdmin(admin);
  }, []);

  const removeScholarship = (id: number) => {
    remove(id)
      .then(() => {
        if (onRemove) onRemove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='lg:mx-32 xl:mx-48 xl:px-20'>
      <div className=' w-full my-4 p-3 shadow-sm  bg-white grid grid-cols-12 '>
        <div className='col-span-6  sm:order-1 lg:-order-1 md:col-span-2 flex justify-center items-center'>
          <div className='w-28 h-24 bg-zinc-400 '></div>
        </div>
        <div className='col-span-12 order-1 sm:order-2 lg:order-2 md:col-span-7 overflow-hidden my-2'>
          <h3 className='font-medium text-lg'>{scholarship.title}</h3>
          <div>
            <span className='text-sm text-gray-500 font-light'>
              Founded by{" "}
            </span>
            <span className='text-sm text-black font-normal'>
              {scholarship.foundedBy}
            </span>
          </div>
          <p className='text-sm text-gray-500 font-light mt-2 overflow-hidden'>
            {scholarship.description}
          </p>
        </div>
        <div className='col-span-6 sm:order-2  md:col-span-3 border-l-2 border-stone-200 ml-4 pl-3 lg:px-8'>
          <div>
            <span className='text-sm text-gray-400 '>Deadline</span>
            <h4 className='text-sm font-semibold'>{scholarship.deadline}</h4>
          </div>
          <div>
            <span className='text-sm text-gray-400 '>Amount</span>
            <h4 className='text-sm font-semibold'>{scholarship.amount}</h4>
          </div>
          {!isUserAdmin && (
            <button className=' bg-violet-500 min-w-full text-white h-8 mt-1 rounded'>
              <span className='text-sm'>Apply to scholarship</span>
            </button>
          )}
          {isUserAdmin && (
            <div>
              <Link to={`/scholarship/edit/${scholarship.id}`}>
                <button className=' bg-cyan-600 min-w-full text-white h-8 mt-1 rounded'>
                  <i className='fas fa-edit'></i>
                  <span className='text-sm mx-2'>Update</span>
                </button>
              </Link>
              <button
                onClick={() => removeScholarship(scholarship.id)}
                className=' bg-red-600 min-w-full text-white h-8 mt-1 rounded'>
                <i className='fas fa-trash-alt'></i>
                <span className='text-sm mx-2'>Remove</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
