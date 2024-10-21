import { BadgePlus, PackagePlus, ShoppingBasket } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[400px] bg-[#f1f1f1c8] flex justify-center w-[250px] rounded-md">
      <ul className="w-full mt-3 ml-">
        <div className="w-full my-2">
          <Link
            to="/adminpanel"
            className="hover:bg-slate-50 flex gap-1 mx-1 hover:rounded-md px-4 py-3"
          >
           <ShoppingBasket /> List All Products
          </Link>
        </div>
        <div className="w-full my-2">
          <Link
            to="addproduct"
            className="hover:bg-slate-50 flex gap-1 mx-1 hover:rounded-md px-4 py-3"
          >
            <PackagePlus />Add New Product
          </Link>
        </div>
        <div className="w-full my-2">
          <Link
            to="addcategory"
            className="hover:bg-slate-50 flex gap-1 mx-1 hover:rounded-md px-4 py-3"
          >
            <BadgePlus />Add New Category
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
