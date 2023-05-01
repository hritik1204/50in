import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../../components/form/Form";
import TableList from "../../components/tablelist/TableList";

import "./Userlist.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      setUserList(data);
      console.log(data);
    };

    getUser();
  }, []);

  return (
    <div className="userlist">
      <Form users={userList} setUsers={setUserList} />
      <TableList users={userList} />
    </div>
  );
};

export default UserList;
