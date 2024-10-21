import React from "react";
import Productcard from "../component/Productcard";

const Home = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="ml-[160px] mt-20">
          <h1
            className="text-[80px] text-white font-sembold"
            id="style-Raining"
          >
            Raining Offers For <br />
            Hot Summer!
          </h1>
          <p className="text-white font-semibold text-[30px]">
            25% Off on All Products
          </p>
          <div className="mt-4">
            <button className="text-black text-[14px] font-semibold bg-white px-8 py-3 m-3 ml-0 hover:bg-black hover:text-white">
              SHOP NOW
            </button>
            <button className="text-white text-[14px] font-semibold bg-transparent border-white border-[2px] px-8 py-[10px] m-3 ml-[10px] hover:bg-white hover:text-black">
              FIND MORE
            </button>
          </div>
        </div>
      </section>
      <section className="mt-[150px] bg-white h-[720px]">
        <div className="flex gap-[90px] justify-center items-center p-9">
          <img src="src/assets/logo/client-logo-2.png" className=""/>
          <img src="src/assets/logo/client-logo-3.png" className=""/>
          <img src="src/assets/logo/client-logo-4.png" className=""/>
          <img src="src/assets/logo/client-logo-5.png" className=""/>
        </div>
        <div className="flex gap-6 items-center justify-center m-6">
          <div className="w-[373px] h-[480px] bg-[url('src/assets/photo1.jpeg')] bg-cover">
            <div className="h-full w-full bg-[#a617174e]">
              <h1 className="pt-[280px] pl-8 text-white font-[500] text-[26px]">
                20% Off On Tank Tops
              </h1>
              <p className="pt-[0px] pl-8 text-white text-[16px] font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                recusandae!
              </p>
              <button className="bg-white px-5 py-3 ml-8 mt-6 text-[14px] font-[500] hover:bg-black hover:text-white">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="w-[373px] h-[480px] bg-[url('src/assets/photo2.jpg')] bg-cover">
            <div className="h-full w-full bg-[#3d3d724e]">
              <h1 className="pt-[280px] pl-8 text-white font-[500] text-[26px] tracking-wider">
                Latest Eyewear For You
              </h1>
              <p className="pt-[0px] pl-8 text-white text-[16px] font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                recusandae!
              </p>
              <button className="bg-white px-6 py-3 ml-8 mt-6 text-[14px] font-[500] hover:bg-black hover:text-white">
                EXPLORE
              </button>
            </div>
          </div>
          <div className="w-[373px] h-[480px] bg-[url('src/assets/shoes.jpg')] bg-cover">
            <div className="h-full w-full bg-[#7877773c]">
              <h1 className="pt-[280px] pl-8 text-white font-[500] text-[26px] tracking-wider">
                Let's Lorem Suit Up
              </h1>
              <p className="pt-[0px] pl-8 text-white text-[16px] font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                recusandae!
              </p>
              <button className="bg-white px-5 py-3 ml-8 mt-6 text-[14px] font-[500] hover:bg-black hover:text-white">
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[960px]">
        <div className="h-full bg-[#ffffff]">
          <div className="flex justify-center items-center">
            <h1 className="text-[60px] text-black font-semibold">
              Featured Products
            </h1>
          </div>
          <div className="flex justify-between items-center m-2">
            <hr className="flex-1" style={{ borderTop: "2px solid black" }} />
            <p className="flex text-center">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <hr className="flex-1" style={{ borderTop: "2px solid black" }} />
          </div>

          <div className="flex justify-center items-center mx-20">
            <div className="overflow-hidden">
              <Productcard /> <Productcard /> <Productcard /> <Productcard />
              <Productcard /> <Productcard /> <Productcard /> <Productcard />
              <Productcard /> <Productcard />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="h-[520px] mx-10 bg-[url('src/assets/photo8.jpeg')] bg-fixed ">
        <div className="h-full w-full flex bg-[#78777792]">
          <div className="w-[750px] mt-[100px] ml-[180px]">
            <p className="text-white text-[20px] font-medium">Limited Time Offer</p>
            <h1 className="text-white text-[40px] font-semibold">Special Edition</h1>
            <p className="text-white text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h2 className="text-white text-[24px]">
              Buy This T-shirt At 20% Discount, Use Code OFF20
            </h2>
            <button className="text-black text-[14px] font-semibold bg-white px-8 py-3 m-3 ml-0 hover:bg-black hover:text-white">
              SHOP NOW
            </button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
