import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Test from "./Test";
const PostApi = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function saveUser() {
    /* console.log(name,email, address) */
    let data = { fname, lname };
    fetch("http://localhost:748/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      result.json().then((res) => {
        console.log(res);
      });
    });
  }

  return (
    <>
      <h1>Add User</h1>
      <input
        type="text"
        value={fname}
        onChange={(e) => {
          setFname(e.target.value);
        }}
        name="fname"
      />{" "}
      <br></br>
      <input
        type="text"
        value={lname}
        onChange={(e) => {
          setLname(e.target.value);
        }}
        name="lname"
      />{" "}
      <br></br>
      <Link to="/">
        <button type="button" onClick={() => saveUser()}>
          Submit
        </button>
      </Link>
    </>
  );
};

export default PostApi;
