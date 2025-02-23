import React from 'react';
import { useJobForm } from '../store/useJobForm';

const PostedJobs = () => {
  const { postedJobs } = useJobForm();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posted Jobs</h1>
      <div className="space-y-4">
        {postedJobs.map((job, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary} {job.currency}</p>
            <p><strong>Experience:</strong> {job.experienceLevel}</p>
            <p><strong>Description:</strong> {job.description}</p>
            {job.isBookMarked && <p className="text-green-500">Bookmarked</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;