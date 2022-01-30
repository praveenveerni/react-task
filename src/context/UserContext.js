import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext()

const UserContextProvider  = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      console.log("res", response.data.data);
      setUsers(response.data.data)
    })
  }, [])

  useEffect(()=> {
    setUsers(JSON.parse(localStorage.getItem("users")))
  },[])

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  })


  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
  }

  return (
    <UserContext.Provider value={{users, deleteUser, updateUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;