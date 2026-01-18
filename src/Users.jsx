import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
         .then((result) => {
        console.log(result);
    window.location.reload()
      })
      .catch((err) => console.log(err));
    }
  return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((users)=>{
                       return <tr>
                        <td>{users.name}</td>
                         <td>{users.email}</td>
                        <td>{users.age}</td>
                        <td> <Link to={`/update/${users._id}`} className="btn btn-success">Edit</Link>
                             <button className="btn btn-danger m-2" onClick={(e)=> handleDelete(users._id)}>Delete</button>
                        </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
  ) 
}

export default Users;
