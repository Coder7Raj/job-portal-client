import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[420px]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-full h-full px-12 hero-content text-neutral-content flex justify-between gap-6">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-[400px]">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="w-44 rounded-t-3xl rounded-br-3xl border-b-8 border-l-8 border-blue-400"
              src="https://media.istockphoto.com/id/1373240838/photo/positive-team-motivation.jpg?s=612x612&w=0&k=20&c=zyLDqvjxYDV0nhKf7laXUcOer5ZW-FH864I9k6LXgjI="
              alt=""
            />
            <motion.img
              animate={{ x: [50, 100, 50] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-44 rounded-t-3xl rounded-br-3xl border-b-8 border-l-8 border-blue-400"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9IyNDYnQEtZnq1tdMCBvm9gLNanXXN8i5Q&s"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
