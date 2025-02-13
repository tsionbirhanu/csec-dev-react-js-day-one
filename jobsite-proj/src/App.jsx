import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import Filter from "./Components/Filter.jsx";
import Feed2 from "./Components/Feed2.jsx";
import Pagination from "./Components/Pagination.jsx";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=${jobsPerPage}`
        );
        const data = await response.json();
        setJobs(data.jobs || []);
        setTotalPages(Math.ceil(data.totalJobs / jobsPerPage));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [currentPage]);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="flex mt-6">
        <Filter  jobs={jobs}/>
        <Feed2 jobs={jobs} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;