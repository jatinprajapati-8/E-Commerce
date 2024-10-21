import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../Slices/CategorySlice";
import toast from "react-hot-toast";

const Addcategory = () => {
  const dispatch = useDispatch();
  const [categoryName, SetcategoryName] = useState("");

  const handleSubmit = (e) => {
    dispatch(createCategory({ categoryName: categoryName }));
    SetcategoryName("");
    toast.success("Category Created Successfully");
  };

  return (
    <div className="w-[200px] bg-[#f1f1f19f] h-[600px] flex justify-center items-top sm:w-full">
      <div className="mr-[400px] mt-9">
        <label
          htmlFor="category"
          className="block text-sm w-[150px] font-medium leading-6 text-black"
        >
          Category Name <span className="text-red-700"> *</span>
        </label>
        <div className="flex mt-4 gap-6">
          <input
            id="category"
            name="category"
            onChange={(e) => SetcategoryName(e.target.value)}
            value={categoryName}
            type="text"
            className="block w-[500px] border-0 py-3 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Category Name"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex w-[500px] items-center justify-center rounded-md bg-indigo-600 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

export default Addcategory;
