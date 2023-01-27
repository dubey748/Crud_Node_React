import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import PostApi from "./PostApi";
import { Link } from "react-router-dom";

const Test = () => {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    getUser();
  }, []);
  // console.log(data)

  const getUser = () => {
    fetch("/users").then((result) => {
      result.json().then((res) => {
        console.log(res);
        setData(res);
        setFname(res[0].fname);
        setLname(res[0].lname);
        setUserID(res[0]._id);
      });
    });
  };

  const deleteUser = (id) => {
    fetch(`/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        getUser();
      });
    });
  };
  const selectUser = (id) => {
    setFname(data[id].fname);
    setLname(data[id].lname);
    setUserID(data[id]._id);
  };

  const updateUser = () => {
    let item = { fname, lname, userID };
    fetch(`/users/${userID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        getUser();
      });
    });
  };
  return (
    <>
      <h1>CRUD Operation</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Delete User</th>
            <th>Select User</th>
          </tr>
        </thead>
        {data.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td>{i}</td>
              <td>{item._id}</td>

              <td>{item.fname}</td>
              <td>{item.lname}</td>

              <td>
                <button
                  onClick={() => {
                    deleteUser(item._id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    selectUser(i);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <div>
        <input
          type="text"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />{" "}
        <br></br>
        <input
          type="text"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />{" "}
        <br></br>
        <br></br>
        <button
          onClick={() => {
            updateUser();
          }}
        >
          Update User
        </button>
        <br></br>
        <Link to={"/Post"}>
          {PostApi}
          <h1>Click Here to add more user</h1>
        </Link>
      </div>
    </>
  );
};

export default Test;
