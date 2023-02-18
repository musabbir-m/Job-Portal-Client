import React, { useEffect, useState } from "react";
import { BsTypeH2 } from "react-icons/bs";
import Companycard from "./Companycard";

const Companies = () => {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    fetch("https://job-portal-server-smoky.vercel.app/companybd")
      .then((res) => res.json())
      .then((data) => setCompany(data));
  }, []);

  return (
    <div className="mt-16 pt-5 bg-gray-200 px-10">
      <h2 className="text-4xl mb-5">Top Companies</h2>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 mx-auto">
        {company?.map((com) => (
          <Companycard com={com}></Companycard>
        ))}
      </div>
    </div>
  );
};

export default Companies;
