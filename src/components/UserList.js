import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";

const UserList = () => {

  const { users } = useContext(UserContext);



  const currentUsers = users;


  return (
    <div className="tableContainer">
      <table className="table bordered table-hover">
        <thead>
          <tr className="tableHead">
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            currentUsers.map(user => (
              <tr key={user.id}>
                <User user={user} />
              </tr>
            ))
          }


        </tbody>
      </table>

    </div>
  )
}

export default UserList;