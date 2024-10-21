import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Product from "./page/Product";
import NotFound from "./page/NotFound";
import { Toaster } from "react-hot-toast";
import Adminlayout from "./layout/AdminLayout";
import Productlist from "./page/Productlist";
import About from "./page/About";
import Addcategory from "./page/Addcategory";
import { useDispatch } from "react-redux";
import { getAllCategory } from "./Slices/CategorySlice";
import { getAllproducts } from "./Slices/ProductSlice";
import Addproduct from "./page/Addproduct";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllproducts());
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />

          
          <Route path="/adminpanel" element={<Adminlayout />}>
            <Route index element={<Productlist />} />
            <Route path="addproduct" element={<Addproduct/>} />
            <Route path="addcategory" element={<Addcategory />} />
            {/* <Route path="/getyourproducts" element={<Productlist />} /> */}
          </Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;