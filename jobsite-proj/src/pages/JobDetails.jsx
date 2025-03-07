// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { CiBookmark } from "react-icons/ci";

// const JobDetails = () => {
//   const { id } = useParams(); 
//   const [job, setJob] = useState(null);
 
//   useEffect(() => {
//     const mockJobData = {
//       title: "Software Engineer",
//       type: "Full-time",
//       salary: 95000,
//       description: "Develop and maintain web applications.",
//       company: "Google",
//       logo: "https://logo.clearbit.com/google.com",
//       isBookMarked: true,
//       location: "San Francisco, USA",
//       experienceLevel: "Mid Level",
//       currency: "USD",
//     };
//     setJob(mockJobData);
//   }, [id]);
//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await fetch(`https://joblisting-3hjv.onrender.com/api/jobs/${id}`);
//         const data = await response.json();
//         setJob(data);
//       } catch (error) {
//         console.error("Error fetching job details:", error);
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   if (!job) {
//     return <div>Loading...</div>;
//   }

//   const {
//     title,
//     type,
//     salary,
//     description,
//     company,
//     logo,
//     isBookMarked,
//     location,
//     experienceLevel,
//     currency,
//   } = job;

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-8">
//       <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-8">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
//             <p className="text-gray-600 text-lg">{company}</p>
//           </div>
//           <img
//             src={logo}
//             alt={`${company} logo`}
//             className="w-16 h-16 rounded-full"
//           />
//         </div>

       
//         <div className="mt-6 space-y-4">
//           <div className="flex items-center space-x-4">
//             <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//               {type}
//             </span>
//             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//               {experienceLevel}
//             </span>
//             <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
//               {location}
//             </span>
//           </div>

//           <p className="text-xl font-semibold text-gray-800">
//             {currency} {salary.toLocaleString()}
//           </p>
//         </div>

      
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold text-gray-800">Job Description</h2>
//           <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
//         </div>

//         <div className="mt-8">
//           <button
//             className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
//               isBookMarked
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//           >
//             <CiBookmark className="w-6 h-6" />
//             <span>{isBookMarked ? "Bookmarked" : "Bookmark"}</span>
//           </button>
//         </div>
//       </div>

//       <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8">
//         <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;