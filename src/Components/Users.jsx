import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const Users = () => {
  const LoadedUsers = useLoaderData();
  const [users, setUsers] = useState(LoadedUsers);
 const HandleDelete = _id => {
    console.log('delete user', _id);
    fetch(`https://practice-coffee-server-beta.vercel.app/users/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        if(data.deletedCount>0){
            Swal.fire({
                icon:'success',
                title: 'User delete successfully',
                confirmButtonText: "ok",
            })
          setUsers(users.filter(user => user._id!== _id))
        }
     })
 }

  return (
    <div>
      <Header></Header>
      <h1>users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>CreationTime</th>
              <th>LastSignInTime</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={index}>
                <td></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>{user.lastSignInTime}</td>
                <td className="space-x-4">
                  <button onClick={() => HandleDelete(user._id)} className="btn bg-error">Delete</button>
                  <Link to={`/updateUser/${user._id}`}>
                  <button className="btn bg-primary text-white">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
