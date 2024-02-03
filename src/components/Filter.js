import React, { useState } from "react";

function Filter({ onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text); // Pass the search text up to the parent component
  };

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
