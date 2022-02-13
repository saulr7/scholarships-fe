import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScholarshipModel from "../../models/scholarshipModel";
import { create, getById, update } from "../../services/scholarshipsService";
import NavBar from "../common/NavBar";

type UrlParams = {
  id: string;
};

const AddScholarship = () => {
  const [scholarship, setScholarship] = useState<ScholarshipModel>({
    foundedBy: "me",
  } as ScholarshipModel);

  const [isUpdate, setIsUpdate] = useState(false);

  const navigate = useNavigate();
  const params = useParams<UrlParams>();

  useEffect(() => {
    const { id = "" } = params;

    const idInt = +id || 0;
    if (idInt <= 0) {
      return;
    }

    setIsUpdate(true);

    getById(idInt)
      .then((res) => {
        if (!res.data) {
          setIsUpdate(false);
          return;
        }
        setScholarship(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [params]);

  const onSubmitHandler = async () => {
    if (isUpdate) {
      return update(scholarship)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    create(scholarship)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />

      <div className='m-2'>
        <Link to='/'>
          <i className='fas fa-arrow-circle-left fa-2x'></i>
        </Link>
      </div>

      <div className='grid grid-cols-12 mt-10'>
        <div className='col-span-8 col-start-3 lg:col-span-4 lg:col-start-5 bg-white p-4 px-6 shadow-sm rounded-lg'>
          <div className='flex justify-center my-1'>
            <h4 className='text-2xl font-semibold'>
              {isUpdate ? "Update" : "Create"} Scholarship
            </h4>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='txtTitle'>Title</label>
            <input
              type='text'
              className='form-control'
              id='txtTitle'
              placeholder='Title'
              value={scholarship?.title || ""}
              onChange={({ target }) =>
                setScholarship({ ...scholarship, title: target.value })
              }
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='txtDescription'>Description</label>
            <textarea
              className='form-control'
              id='txtDescription'
              placeholder='Description'
              value={scholarship?.description || ""}
              onChange={({ target }) =>
                setScholarship({ ...scholarship, description: target.value })
              }
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='txtDeadline'>Deadline</label>
            <input
              type='text'
              className='form-control'
              id='txtDeadline'
              placeholder='Deadline'
              value={scholarship?.deadline || ""}
              onChange={({ target }) =>
                setScholarship({ ...scholarship, deadline: target.value })
              }
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='txtAmount'>Amount</label>
            <input
              type='number'
              className='form-control'
              id='txtAmount'
              placeholder='Amount'
              value={scholarship?.amount || ""}
              onChange={({ target }) =>
                setScholarship({
                  ...scholarship,
                  amount: parseFloat(target.value || ""),
                })
              }
            />
          </div>
          <div className='flex justify-center my-6'>
            <button
              className='bg-violet-500 text-white h-8 mt-1 rounded px-3 disabled:bg-violet-300'
              disabled={!scholarship.title || !scholarship.description}
              onClick={onSubmitHandler}>
              <span className='text-sm'>
                {isUpdate ? "Update" : "Create"} Scholarship
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScholarship;
