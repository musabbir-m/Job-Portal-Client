import React from 'react';

const Companycard = ({com}) => {
    return (
        <div className=" pl-5 py-3 mb-3 w-56 h-38 bg-white">
          <img src={com.logo} className="w-20" alt="" />
          <div className="flex">
          <div>
            <h2 className="text-md font-semibold ">{com.company}</h2>
            <p className="text-sm text-gray-500"> {com.location}</p>
          </div>
          <button className=" text-sm mx-2 mt-3 bg-blue-400 rounded px-2 text-white hover:bg-blue-300">View Details</button>
          </div>
        </div>
    );
};

export default Companycard;