import React from 'react';

const SearchBar = ({ onChange, value }) => {
  return (
    <div className="flex items-center border rounded-md p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-5-5M11 5a6 6 0 100 12 6 6 0 000-12z"
        />
      </svg>
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;