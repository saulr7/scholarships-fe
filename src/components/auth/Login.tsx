import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("second");
  const [userPassword, setUserPassword] = useState("second");

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!emailAddress || !userPassword) {
      return;
    }

    const resp = await login(emailAddress, userPassword);
    if (resp === true) {
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div>
      <div className='grid grid-cols-12 xl:grid-cols-10'>
        <div className='bg-white col-span-12 md:col-span-4 md:col-start-5 xl:col-span-2 xl:col-start-5 mt-20 p-4 shadow-sm'>
          <h2 className='text-xl font-medium'>Sign in to Bold.org</h2>

          <div className='mt-2'>
            <div className='form-group'>
              <label className='text-sm' htmlFor='txtEmail'>
                Email
              </label>
              <input
                type='text'
                className='form-control'
                id='txtEmail'
                placeholder='Email'
                onChange={({ target }) => setEmailAddress(target.value || "")}
              />
            </div>
            <div className='form-group mt-2'>
              <label className='text-sm' htmlFor='txtPassword'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='txtPassword'
                placeholder='Password'
                onChange={({ target }) => setUserPassword(target.value || "")}
              />
            </div>
            <button
              className=' bg-violet-500 min-w-full my-7 text-white h-8 rounded'
              type='button'
              onClick={onSubmit}>
              Sign in
            </button>

            <div className='text-center'>
              <Link to='/home' className='text-sm text-violet-500'>
                Forgot password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
