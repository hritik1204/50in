import axios from "axios";
import React, { useState } from "react";

import "./Form.css";

const Form = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const lastObject = users[users.length - 1];
    const lastId = lastObject.id;
    console.log(lastId);
    console.log("hello");
    const formData = { name, email, phone, id: lastId + 1 };

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        console.log(response.data);
        console.log(users);
      });
    setUsers((prevUsers) => [...prevUsers, formData]);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">Phone no.</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
