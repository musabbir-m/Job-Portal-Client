import React, { useEffect, useState } from "react";

const Fresher = () => {
    const [jobs, setJobs]= useState()
    useEffect(()=>{
         fetch('http://localhost:5000/fresher')
         .then (res=> res.json())
         .then (data=> setJobs(data))
    }, [])
  return (
    <div className="mt-10 text-center">
      <h2 className="text-3xl">Fresher Jobs</h2>
      <p className="mt-5">Find the best opportunites for the freshers from all backgrounds. <hr /> More than 5000 top organizaitons around the world.</p>
      {jobs?.map(job=> <h2>{job.company}</h2> )}

    </div>
  );
};

export default Fresher;
