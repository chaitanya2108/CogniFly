import React from "react";

const SearchBar = () => {
  return (
    <div
      className="search-bar"
      style={{
        padding: "10px 20px",
      }}
    >
      <input
        type="text"
        placeholder="Search for people, tasks, teams"
        style={{
          width: "100%",
          padding: "10px 15px",
          borderRadius: "20px",
          border: "1px solid #ddd",
          fontSize: "14px",
        }}
      />
    </div>
  );
};

export default SearchBar;
