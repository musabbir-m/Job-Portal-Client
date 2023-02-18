import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Jobcard from "../Jobcard/Jobcard";
import { BsArrowRight } from "react-icons/bs";

const Experienced = () => {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    fetch("https://job-portal-server-smoky.vercel.app/experienced")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-10 text-center px-10 ">
      <h2 className="text-3xl">Experienced Jobs</h2>
      <p className="mt-3 mb-6">
        Find the best positions for the experienced job-seeker from all
        backgrounds. <br /> More than 5000 top organizaitons around the world.
      </p>
      {jobs?.slice(0, 6).map((job) => (
        <Jobcard data={job}></Jobcard>
      ))}

      <Link to="/experiencedall">
        <button className=" bg-blue-700 hover:bg-blue-500 text-white text-sm px-8 rounded-sm py-2">
          See All <BsArrowRight className="inline"></BsArrowRight>{" "}
        </button>
      </Link>
    </div>
  );
};

export default Experienced;
