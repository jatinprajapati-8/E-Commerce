import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-white sm:w-full w-fit h-fit ">
      <div className="h-full w-full">
      <div className="flex space-x-20 justify-between items-center m-20">
        <div className="">
          <img
            src="src/assets/logo@2x-free-img-300x100.png"
            className="h-[40px] w-[110px]"
          />
          <h2 className="text-[24px] font-[500] mt-8">
            The best look anytime, anywhere.
          </h2>
        </div>
        <div>
          <ul>
            <div className="text-black text-[20px]">For Her</div>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li> Women Jeans</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li> Top and Shirts</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li> Women Jackets</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li> Heels and Flats</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li> Women Accessories</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <ul>
            <div className="text-black text-[20px]">For Him</div>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li> Men Jeans</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li>Men Shirts</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li>Men Jackets</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li>Men Shoes</li>
            </NavLink>
            <NavLink
              to={"#"}
              className="text-gray-500 font-[300] leading-loose hover:text-blue-600"
            >
              {" "}
              <li>Men Accessories</li>
            </NavLink>
          </ul>
        </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <hr className="flex-1" style={{ borderTop: "1px solid gray" }} />
        </div>
        <div className="flex justify-between items-center mt-10 mx-20">
          <h1 className="font-[300]">Copyright © 2023 Brandstore. Powered by Brandstore.</h1>
          <div className="flex gap-7">
            <Facebook fill/>
            <Instagram/> 
            <Twitter fill/>
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
