import React, { useState } from "react";

import "./Search.css";

const Search = ({ onFilter }) => {
  const [search, setSearch] = useState("");

  onFilter(search);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
