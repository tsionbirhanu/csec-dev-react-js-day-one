import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Description = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://joblisting-rd8f.onrender.com/api/jobs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch job details");
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {job ? (
        <>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800 mb-4"
          >
            &larr; Back to Jobs
          </button>

          <div className="flex items-center mb-4">
            <img src={job.logo} alt="Company Logo" className="w-16 h-16 mr-4" />
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <p className="text-gray-600">{job.company}</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-gray-500 ml-2">(40 reviews)</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Key Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.responsibilities?.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.requirements?.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Details</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
              </div>
              <div>
                <p><strong>Experience:</strong> {job.experienceLevel}</p>
                <p><strong>Job Type:</strong> {job.type}</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">About the Company</h2>
            <p className="text-gray-700">{job.aboutCompany}</p>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => alert("Apply Now clicked!")}
          >
            Apply Now
          </button>
        </>
      ) : (
        <p className="text-center text-gray-500">Job not found</p>
      )}
    </div>
  );
};

export default Description;