import React, { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Feed2 = ({ jobs, savedJobs, setSavedJobs }) => {
  const toggleBookmark = (job) => {
    setSavedJobs((prevSaved) => {
      const isAlreadySaved = prevSaved.find((savedJob) => savedJob.id === job.id);

      if (isAlreadySaved) {
        return prevSaved.filter((savedJob) => savedJob.id !== job.id);
      } else {
        return [...prevSaved, job];
      }
    });
  };

  return (
    <div className="flex justify-center gap-9 p-8">
      {/* Jobs */}
      <div className="bg-white min-w-[628px] min-h-[750px] p-6 rounded-lg">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow-md min-w-[628px] min-h-[223px] mb-4">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img src={job.logo} alt="Logo" className="w-16 h-16" />
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="text-xl font-bold">{job.title}</h1>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.type}</div>
                    <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.salary}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => toggleBookmark(job)} className="text-gray-500 hover:text-black">
                  {savedJobs.find((savedJob) => savedJob.id === job.id) ? <FaBookmark size={24} /> : <CiBookmark size={32} />}
                </button>
                <button className="hover:text-blue-500">
                  <CiShare2 size={24} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">{job.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Saved Jobs */}
      <div className="bg-white min-w-[180px] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 items-center ml-[45px]">Saved Jobs</h2>
        {savedJobs.length > 0 ? (
          savedJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-[#fff] w-full rounded-lg p-4 flex flex-col justify-between mb-4 border border-gray-200"
            >
              <div className="flex justify-between items-center w-full ml-[20px]">
                <h2 className="text-[16px] font-bold leading-tight">{job.title}</h2>
                <button onClick={() => toggleBookmark(job)} className="p-1 mr-[50px]">
                  <IoMdClose size={20} className="text-red-500 cursor-pointer" />
                </button>
              </div>
              <div className="mt-2 ml-[20px]">
                <p className="text-gray-600 text-sm">{job.company}</p>
              </div>
              <div className="mt-2 flex justify-between ml-[20px]">
                <p className="text-gray-700 text-sm bg-gray-300 rounded">{job.type}</p>
                <p className="text-gray-700 text-sm bg-gray-300 rounded mr-[90px]">{job.salary}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No saved jobs</p>
        )}
      </div>
    </div>
  );
};

export default Feed2;