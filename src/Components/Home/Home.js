import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="skewBg bg-blue-100 h-[750px] lg:h-[500px] pt-24 lg:flex justify-between ">
        <div className="pl-10">
          <h3 className="text-sm font-semibold">WE HAVE 15000+ LIVE JOBS</h3>
          <h1 className="text-4xl mt-5">
            Find Your Dream Jobs <hr /> with <span>JobPortal</span>
          </h1>
          <p className="text-sm pt-5">
            Find jobs, create trackable resumes and enrich your applications.{" "}
            <hr /> Carefully crafted after analyzing the needs of different
            industries.
          </p>
        </div>
        <div className=" w-80  max-h-64 ">
          <img src="Hiring2.svg" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
