import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";

const Jobcard = ({data}) => {
    const {name, location, company, logo, starts}= data
  return (
    <div className="mx-auto  mb-3 relative w-full  bg-white border border-gray-200 hover:border-blue-300 rounded-md shadow">
      <div>
        {/* card main body */}

        <div className="p-8 flex justify-between">
          <img className="" src="" alt="star" />
          <div>
            <h2 className="text-md font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{company}</p>
          </div>

          <div className="flex justify-center items-center">
            <HiLocationMarker className="text-blue-800"></HiLocationMarker>
            <h2 className="   text-gray-500"> {location}</h2>
          </div>
          <div>
            <p> Starts: {starts}</p>
          </div>
          <div>
            <h4 className=" text-lime-700 bg-teal-200 px-2 rounded ">
              Fulltime
            </h4>
            <h4 className=" text-orange-300 bg-orange-100 px-2 rounded mt-2 ">
              Urgent
            </h4>
          </div>
        </div>

        {/* card bottom */}
        <div className="bg-gray-50 flex justify-between px-4 py-3">
          <p> Experience: 2-3 years</p>
          <div className="flex hover:text-blue-400 justify-center items-center al">
            <button className="hover:text-blue-400">Apply Now </button>
            <MdDoubleArrow></MdDoubleArrow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
