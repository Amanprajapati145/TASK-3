import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>User Data</h2>

      <UserList users={users} />
    </div>
  );
};

export default FetchData;