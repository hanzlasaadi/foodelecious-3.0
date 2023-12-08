import React, { useState } from 'react';
import Navbar from './navbar';
import MenuBar from './menu';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: 'admin', idEmail: '' });

  const addUser = () => {
    // Validate input
    if (!formData.name || !formData.role || !formData.idEmail) {
      alert('Please fill in all fields.');
      return;
    }

    // Update the users state with the new user
    setUsers([...users, formData]);

    // Clear the form
    setFormData({ name: '', role: 'admin', idEmail: '' });
  };

  const editUser = (index) => {
    // Create a copy of the users array
    const updatedUsers = [...users];
    
    // Remove the user at the specified index
    const editedUser = updatedUsers.splice(index, 1)[0];

    // Set form values to the edited user's values
    setFormData(editedUser);

    // Update the users state
    setUsers(updatedUsers);
  };

  const deleteUser = (index) => {
    // Create a copy of the users array
    const updatedUsers = [...users];

    // Remove the user at the specified index
    updatedUsers.splice(index, 1);

    // Update the users state
    setUsers(updatedUsers);
  };

  return (

    <div id="app" className="app">
    <Navbar />

    <MenuBar />

    <button
      className="app-sidebar-mobile-backdrop"
      data-toggle-target=".app"
      data-toggle-class="app-sidebar-mobile-toggled"
    ></button>

    <div id="content" className="app-content">
    <div className="container mt-5">
      <h2>User Management</h2>

      <form className='d-flex gap-3' >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input style={{backgroundColor:"white"}} type="text" id="name" placeholder='Name' className="form-control" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role:</label>
          <select  id="role" className="form-select text-dark" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required>
            <option value="admin">Admin</option>
            <option value="worker">Worker</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="idEmail" className="form-label">ID/Email:</label>
          <input style={{backgroundColor:"white"}} type="text" id="idEmail" placeholder='12345567' className="form-control" value={formData.idEmail} onChange={(e) => setFormData({ ...formData, idEmail: e.target.value })} required />
        </div>
<div>
        <button type="button" className="btn btn-primary text-white mt-4"style={{backgroundColor:"#e57300"}} onClick={addUser}>Add User</button></div>
      </form>

      <table className="table mt-4" style={{backgroundColor:"white"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>ID/Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.idEmail}</td>
              <td>
                <button className="btn btn-warning me-2 text-white" onClick={() => editUser(index)}style={{backgroundColor:"#e57300"}}>Edit</button>
                <button className="btn btn-danger text-white" onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

      <a href data-toggle="scroll-to-top" className="btn-scroll-top fade">
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default UserManagement;
