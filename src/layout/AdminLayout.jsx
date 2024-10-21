import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const Adminlayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Adminlayout;
