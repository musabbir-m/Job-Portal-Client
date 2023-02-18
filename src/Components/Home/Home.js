import React from "react";
import Experienced from "../Experienced/Experienced";
import Fresher from "../Fresher/Fresher";
import "./Home.css";

const Home = () => {
  return (
    <div>
        {/* First seciton of Home starts */}
      <div className="skewBg bg-blue-100 h-[750px] lg:h-[550px]  lg:flex justify-between  mb-32">
        <div className="pl-10 pt-32">
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
        <div className=" w-2/5 max-h-64 pt-12 ">
          <img src="Hiring2.svg" alt="" />
        </div>
        <div></div>
      </div>
      {/* First seciton of home Ends */}

      {/* Other sections bellow */}

      <Fresher></Fresher>
      <Experienced></Experienced>
    </div>
  );
};

export default Home;
