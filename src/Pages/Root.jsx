import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="lg:max-w-[1024px] md:max-w-[768px] max-w-[425px] mx-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 h-screen overflow-y-scroll">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
