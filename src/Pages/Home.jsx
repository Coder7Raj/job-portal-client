import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <header className="h-16">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-357px)] p-2">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
