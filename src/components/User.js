import React, {useContext, useState, useEffect} from "react";
import { UserContext } from "../context/UserContext";
import { Modal} from "react-bootstrap";
import EditForm from "./EditForm"



const User = ({user}) => {

  const {deleteUser} = useContext(UserContext)

  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose()
  }, [user])

  return (
    <>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td><img src={user.avatar} className="img-fluid img-thumbnail image" alt="userImage"/></td>
      <td>
        <button onClick={handleShow}  className="btn text-warning " variant="primary" data-toggle="modal">Edit</button>
               
        <button onClick={() => deleteUser(user.id)}  className="btn text-danger " data-toggle="modal">Delete</button>
            
                
                
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
                Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theUser={user} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default User;