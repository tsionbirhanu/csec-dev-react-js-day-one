import React, { useState, useEffect } from "react";

const Filter = ({ onFilterChange, jobs }) => {
  const [datePosted, setDatePosted] = useState("");
  const [jobTypes, setJobTypes] = useState([]);
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState({ from: "", to: "" });
  const [currency, setCurrency] = useState("Dollar ($)");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // selectedFilters = [
  //   tyoe: [asdasd, asdas, asd],
  //   location, [sdfsdf, sdf, sdf],
  //   date: "sdfsdfs",
  //   range: [23, 345],
  // ]

  useEffect(() => {
    filterType();
  }, [selectedFilters]);

  const filterType = () => {
    console.log("filters are ", selectedFilters);
    if (selectedFilters.length == 0) {
      setFilteredJobs(jobs);
    }
    const filtered_type = jobs.filter((job) => selectedFilters.includes(job));

    setFilteredJobs(filtered_type);
    console.log("filterdjobs", filtered_type);
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    onFilterChange({ location: newLocation });
  };
  const handleSelectedChange = (event) => {
    const value = event.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((item) => item !== value)
        : [...prevFilters, value]
    );
  };
  // const handleJobTypeChange = (type) => {
  //   const updatedJobTypes = jobTypes.includes(type)
  //     ? jobTypes.filter((t) => t !== type)
  //     : [...jobTypes, type];
  //   setJobTypes(updatedJobTypes);
  //   onFilterChange({ jobTypes: updatedJobTypes });
  // };

  const handleSalaryRangeChange = (field, value) => {
    const updatedSalaryRange = { ...salaryRange, [field]: value };
    setSalaryRange(updatedSalaryRange);
    onFilterChange({ salaryRange: updatedSalaryRange });
  };

  const handleResetFilters = () => {
    setDatePosted("");
    setJobTypes([]);
    setLocation("");
    setSalaryRange({ from: "", to: "" });
    setCurrency("Dollar ($)");
    onFilterChange({
      datePosted: "",
      jobTypes: [],
      location: "",
      salaryRange: { from: "", to: "" },
      currency: "Dollar ($)",
    });
  };

  return (
    <div className="w-[270px] h-[600px] ml-[25px] border-1 border-[#87878766] bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl text-[#2F2F2F] mb-2 font-bold text-center">
        Filter
      </h1>

      <div className="w-[290px] h-[65px]">
        <h2 className="text-lg font-semibold mb-1">Date Posted</h2>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            checked={datePosted === "24h"}
            onChange={() => {
              const value = datePosted === "24h" ? "" : "24h";
              setDatePosted(value);
              onFilterChange({ datePosted: value });
            }}
            className="mr-1"
          />
          Last 24 Hours
        </label>
      </div>

      <div className="w-[290px] h-[160px]">
        <h2 className="text-lg font-semibold">Job Type</h2>
        {["Full-time", "Part-time", "Internship", "Contract", "Volunteer"].map(
          (type) => (
            <label key={type} className="flex items-center">
              <input
                onChange={handleSelectedChange}
                type="checkbox"
                // checked={jobTypes.includes(type)}
                // onChange={() => handleJobTypeChange(type)}
                checked={selectedFilters.includes(type)}
                className="mr-2"
                value={type}
              />
              {type}
            </label>
          )
        )}
      </div>

      <div className="w-[290px] h-[66px]">
        <h2 className="text-lg font-semibold mb-0">Location</h2>
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            onFilterChange({ location: e.target.value });
          }}
          className="w-[230px] h-[34px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-[250px] h-[70px]">
        <h2 className="text-lg font-semibold">Salary Range</h2>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="From"
            value={salaryRange.from}
            onChange={(e) => handleSalaryRangeChange("from", e.target.value)}
            className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="To"
            value={salaryRange.to}
            onChange={(e) => handleSalaryRangeChange("to", e.target.value)}
            className="w-[80px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="w-[250px] h-[60px]">
        <h2 className="text-lg font-semibold ">Currency</h2>
        <select
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
            onFilterChange({ currency: e.target.value });
          }}
          className="w-[230px] h-[40px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option>Dollar ($)</option>
        </select>
      </div>

      <button
        onClick={handleResetFilters}
        className="w-[230px] h-[40px] mt-3 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        Reset all filter
      </button>
    </div>
  );
};

export default Filter;
