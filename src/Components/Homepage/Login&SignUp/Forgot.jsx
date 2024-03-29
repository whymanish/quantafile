import React from 'react';
import { Link } from 'react-router-dom';
const Forgot = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="w-full max-w-md p-6 m-auto  dark:bg-gray-800">
        <h2 className='text-center text-2xl mt-10 font-bold'>Reset Password</h2>
        <form className="mt-10">
          <div>
            <input
              type="email"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
            />
          </div>

          
         

          <div className="mt-6">
            <button
              className="w-full px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Send Reset Link
            </button>
          </div>
          
        </form>

        {/* Social Media Login */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <Link to="/Login"><div className="flex justify-center lg:w-1/2  items-center  mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center  justify-center w-full px-6 py-4 mx-2 text-md font-medium text-white transition-colors duration-300 transform bg-gray-400 rounded-xl hover:bg-gray-800  focus:outline-none"
          >
            <span className=" mx-2 sm:inline">Back to Log in</span>
          </button>

          
        </div></Link>

        
      </div>
    </div>
  );
};

export default Forgot;
