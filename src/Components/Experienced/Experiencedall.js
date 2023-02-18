import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobcard from '../Jobcard/Jobcard';

const Experiencedall = () => {
    const jobs= useLoaderData()
    return (
        <div>
             <h2 className="text-3xl">Experienced Jobs</h2>
        <p className="mt-3 mb-6">Find the best positions for the experienced job-seeker from all backgrounds. <br /> More than 5000 top organizaitons around the world.</p>
            {
                jobs.map(job=> <Jobcard key={job._id} data={job}></Jobcard>)
            }
        </div>
    );
};

export default Experiencedall;