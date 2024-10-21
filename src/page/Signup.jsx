import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Slices/AuthSlice";
// import * as yup from "yup";

const Signup = () => {
  // const registerSchema = yup.object().shape({
  //     name: yup.string().required("Name is required"),
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
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success, user } = useSelector(
    (state) => state.userState
  );
  const [data, setdata] = useState({
    Firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handlechange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  function handlesubmit(e) {
    e.preventDefault();
    if (
      !data.Firstname.trim() ||
      !data.lastname.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.address.trim() ||
      !data.phone.trim()
    ) {
      toast.error("All Fields are Required");
      return null;
    } else {
      dispatch(register(data));
    }

    toast.error(error);

    if (success) {
      navigate("/login");
      toast.success("User Created Successfully");
      setdata({
        Firstname: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      });
    }
  }
  if (user) {
    <Navigate to={"/"} />;
  }

  return (
    <div className="sm:bg-[url('src/assets/pixabay.jpg')] mt-0 pt-0 w-full h-screen sm:bg-cover sm:bg-center ">
      <div className="bg-[#ffffffce] w-full h-full">
        <div className="min-h-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="mt-0 text-center text-2xl text-black font-bold leading-9 tracking-tight">
              Register to Order your Stuf...
            </h2>
          </div>

          <div className="mt-5 mx-20">
            <form
              className="space-y-6"
              onChange={handlechange}
              onSubmit={handlesubmit}
            >
              <main className="lg:flex justify-between mx-auto">
                <section>
                  <div className="w-[200px] sm:w-[600px]">
                    <label
                      htmlFor="name"
                      className="block text-sm w-[50px] font-medium leading-6 text-black"
                    >
                      Name <span className="text-red-700"> *</span>
                    </label>
                    <div className="flex mt-4 gap-6">
                      <input
                        id="name"
                        name="Firstname"
                        value={data.Firstname}
                        type="text"
                        className="block w-[290px] border-0 py-3 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="First Name"
                      />

                      <input
                        name="lastname"
                        value={data.lastname}
                        type="text"
                        className="block w-[290px] border-0 py-3 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="w-[200px] sm:w-[600px] mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-black"
                    >
                      Email Address <span className="text-red-700"> *</span>
                    </label>
                    <div className="mt-4">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value={data.email}
                        placeholder="Email Address"
                        className="block w-full border-0 py-3 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="w-[200px] sm:w-[600px] mt-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-black"
                    >
                      Address <span className="text-red-700"> *</span>
                    </label>
                    <div className="mt-4">
                      <textarea
                        name="address"
                        id="address"
                        cols="42"
                        rows="5"
                        value={data.address}
                        placeholder="Enter Full Address"
                        type="text"
                        className="block w-full border-0 py-3 text-gray-900 shadow-sm ring-0 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-[200px] sm:w-[600px] mt-4">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-black"
                      >
                        Create Password <span className="text-red-700"> *</span>
                      </label>
                    </div>
                    <div className="mt-4 flex">
                      <input
                        id="password"
                        name="password"
                        value={data.password}
                        type="password"
                        placeholder="Create Your Password"
                        className="block w-full border-0 py-3 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </section>
                <section className="mt-4 lg:mt-0">
                  {/* <div className="w-[200px] sm:w-[400px]">
                    <label
                      htmlFor="profile"
                      className="block text-sm font-medium leading-6 text-black mr-20"
                    >
                      Profile
                    </label>
                    <div className="mt-4">
                      <input
                        type="file"
                        name="profile"
                        id="profile"
                        accept="image/*"
                        className="block w-full border-0 py-[9px] shadow-sm ring-0  bg-white mt-4 text-black focus:ring-2 px-3 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div> */}

                  <div className="w-[200px] sm:w-[400px] mt-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-black"
                      >
                        Phone number <span className="text-red-700"> *</span>
                      </label>
                      <div className="mt-4">
                        <PhoneInput
                          // `value` will be the parsed phone number in E.164 format.
                          id="phone"
                          name="phone"
                          defaultCountry="IN"
                          value={data.phone}
                          onChange={setValue}
                          placeholder="Phone Number"
                          className="w-full border-0 py-1 shadow-sm ring-0 bg-white text-black focus:ring-2 px-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-[500px] items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-3 text-center text-sm text-black">
              Already have an account!
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Click here to Login
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
      </div>
    </div>
  );
};

export default Signup;
