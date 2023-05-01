import React, { useEffect, useState } from "react";
import Search from "../search/Search";

import "./TableList.css";

const TableList = ({ users }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandle = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    const filtered = users.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [search, users]);

  return (
    <div className="tableList">
      <Search onFilter={searchHandle} />
      <table className="table">
        {filteredData.length > 0 ? (
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        ) : (
          ""
        )}

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <p
              style={{
                margin: "150px",
              }}
            >
              No data found
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
