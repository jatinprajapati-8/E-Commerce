import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../Slices/AuthSlice";
import toast from "react-hot-toast";

const Login = () => {
  // const registerSchema = yup.object().shape({
  //     email: yup
  //       .string()
  //       .required("Email is required")
  //       .email("Enter a Valid Email address"),
  //     password: yup
  //       .string()
  //       .required("Password is required")
  //       .matches(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //         "Enter a valid Password"
  //       ),
  //   });

  const dispatch = useDispatch();
  const { user, loading, error, success } = useSelector(
    (state) => state.userState
  );

  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  function handlesubmit(e) {
    e.preventDefault();
    if (!data.email.trim() || !data.password.trim()) {
      toast.error("Email and Password Required");
      return null;
    }
    dispatch(login(data));
    setdata({
      email: "",
      password: "",
    });
  }
  if (user) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex-col items-center justify-center px-6 py-12 lg:px-8  border-gray-200 h-full bg-[#ffffffd2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm my-[80px] ">
        {/* <img className="mx-auto h-[80px] w-auto filter invert" src="src/assets/logo@2x-free-img-300x100.png" alt="Your Company" /> */}
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to Order your Stuf...
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form
          className="space-y-6"
          onChange={handlechange}
          onSubmit={handlesubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={data.email}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 flex">
              <input
                id="password"
                name="password"
                value={data.password}
                //   type={InputType}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
          <div></div>
        </form>

        <p className="mt-10 text-center text-sm text-black">
          Don't have an account ?
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Click here to Register!
          </Link>
        </p>
        <div className="flex justify-between items-center gap-4">
          <hr className="flex-1" style={{ borderTop: "1px solid gray" }} />{" "}
          <p className="flex text-center">or</p>{" "}
          <hr className="flex-1" style={{ borderTop: "1px solid gray" }} />
        </div>
        <p className="mt-0 text-center text-sm text-white">
          <Link
            to="/"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Return to Store!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
