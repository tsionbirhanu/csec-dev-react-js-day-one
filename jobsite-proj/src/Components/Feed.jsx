import React, { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Feed = ({ jobs, setCurrentPage, totalPages ,jobTypes}) => {
    const [savedMessages, setSavedMessages] = useState([]);
    const navigate = useNavigate (); 

    const toggleBookmark = (job) => {
        setSavedMessages((prevSaved) => {
            const isAlreadySaved = prevSaved.some((savedJob) => savedJob.title === job.title);
            if (!isAlreadySaved) {
                return [...prevSaved, { ...job, isbookmarked: true }];
            } else {
                return prevSaved.filter((savedJob) => savedJob.title !== job.title);
            }
        });
    }; 



    return (
        <div className="flex justify-center gap-8 p-8">
        <div className="min-w-[628px] min-h-[223px] p-6 rounded-lg ">
          {jobs?.length > 0 ? (
            jobs.map((job, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md min-w-[628px] min-h-[223px] mb-4" on>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <img src={job.logo} alt="Logo" className="w-16 h-16" />
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h1 onClick={()=>navigate(`jobs/${job.id}`)} className="text-xl font-bold">{job.title}</h1>
                                            <p className="text-gray-600">{job.company}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.type}</div>
                                            <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.salary}</div>
                                            <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.location}</div>
                                            <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.experienceLevel}</div>
                                            <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.currency}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => toggleBookmark(job)} className="text-gray-500 hover:text-black">
                                        {savedMessages.some((savedJob) => savedJob.title === job.title) ? (
                                            <FaBookmark size={24} />
                                        ) : (
                                            <CiBookmark size={32} />
                                        )}
                                    </button>
                                    <button>
                                        <CiShare2 size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-700">{job.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No jobs found</p>
                )}
            </div>

            <div className="bg-white min-w-[250px] h-[730px] p-6 rounded-lg shadow-md ml-4 mr-3">
                <h2 className=" font-bold mb-1 ml-6 text-[25px]">Saved Jobs</h2>
                {savedMessages.length > 0 ? (
                    savedMessages.map((job, index) => (
                        <div key={index} className="bg-white w-[215px] mb-3 p-3 rounded-lg flex flex-col shadow-md items-center">
                            <div className="flex justify-between items-center ml-3 ">
                                <h2 className="text-[18px] font-semibold">{job.title}</h2>
                                <button onClick={() => toggleBookmark(job)}>
                                    <IoMdClose size={20} className="text-black cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-gray-600 mr-26">{job.company}</p>
                            <div className="flex gap-2 mr-6">
                                <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.type}</div>
                                <div className="bg-gray-200 rounded-sm px-2 py-1 text-sm">{job.salary}</div>
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

export default Feed;