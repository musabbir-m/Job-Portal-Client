import React, { useEffect, useState } from "react";
import Jobcard from "../Jobcard/Jobcard";
import { BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";

const Fresher = () => {
    const [jobs, setJobs]= useState()
    useEffect(()=>{
         fetch('http://localhost:5000/fresher')
         .then (res=> res.json())
         .then (data=> setJobs(data))
    }, [])
  return (
    <div className="mt-10 text-center px-10 ">
      <h2 className="text-3xl">Fresher Jobs</h2>
      <p className="mt-3 mb-6">Find the best opportunites for the freshers from all backgrounds. <br /> More than 5000 top organizaitons around the world.</p>
      {jobs?.slice(0,6).map(job=> <Jobcard data={job}></Jobcard> )}

     
      <Link to='/fresherall'>
      <button className=" bg-blue-700 hover:bg-blue-500 text-white text-sm px-8 rounded-sm py-2">See All <BsArrowRight className="inline"></BsArrowRight> </button>
      </Link>

    </div>
  );
};

export default Fresher;
