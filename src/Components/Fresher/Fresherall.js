import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobcard from '../Jobcard/Jobcard';

const Fresherall = () => {
    const jobs= useLoaderData()
    return (
        <div>
            {jobs.map(job=> <Jobcard key={job._id} data={job}></Jobcard>)}
        </div>
    );
};

export default Fresherall;  