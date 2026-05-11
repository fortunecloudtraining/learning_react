import { useEffect, useState } from "react";
import axios from "axios";

function CrudAxios() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5001/users";

  // READ (FETCH ALL USERS)
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE NEW USER
  const handleAdd = async () => {
    if (!name || !email) return alert("Please enter all fields!");

    try {
      await axios.post(API, { name, email });
      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // DELETE USER
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // LOAD USER DATA INTO FORM FOR EDIT
  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // UPDATE USER
  const handleUpdate = async () => {
    try {
      await axios.put(`${API}/${editId}`, { name, email });
      setEditId(null);
      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">CRUD App Using Axios + JSON Server (dbnew.json)</h2>

      {/* FORM CARD */}
      <div className="card p-3 shadow-sm mb-4">
        <h4>{editId ? "Update User" : "Add New User"}</h4>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {editId ? (
          <button className="btn btn-warning" onClick={handleUpdate}>
            Update User
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleAdd}>
            Add User
          </button>
        )}
      </div>

      {/* TABLE LIST */}
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(u)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudAxios;
