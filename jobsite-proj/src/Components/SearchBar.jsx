import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); 
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchTerm.trim()) {
      handleSearch();
    }
  };

  return (
    <div className="bg-white p-2 shadow-md mx-auto mt-2 w-[627px] h-[58px] rounded-3xl">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Job title, Keywords, or Company name | Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress} 
          className="flex-1 p-2 rounded-b-full focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mr-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
