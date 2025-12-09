import { useEffect, useState } from "react";

export default function TodoCrud() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);

  // 🔹 Load from localStorage
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("todo")) || []);
  }, []);

  // 🔹 Save to localStorage
  const save = (data) => {
    setList(data);
    localStorage.setItem("todo", JSON.stringify(data));
  };

  // 🔹 Add / Update
  const submit = () => {
    if (!task) return alert("Enter Task");

    if (edit !== null) {
      list[edit] = task;
      save([...list]);
      setEdit(null);
    } else {
      save([...list, task]);
    }
    setTask("");
  };

  // 🔹 Delete
  const remove = (i) => save(list.filter((_, index) => index !== i));

  // 🔹 Edit
  const editTask = (i) => {
    setTask(list[i]);
    setEdit(i);
  };

  // 🔹 Clear All
  const clearAll = () => {
    if (confirm("Delete All?")) save([]);
  };

  return (
    <div className="container mt-5 col-md-6">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h4>✅ Todo App (CRUD)</h4>
        </div>

        <div className="card-body">
          <div className="input-group mb-3">
            <input
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task"
            />
            <button onClick={submit} className="btn btn-success">
              {edit !== null ? "Update" : "Add"}
            </button>
          </div>

          <ul className="list-group">
            {list.map((t, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                {t}
                <div>
                  <button onClick={() => editTask(i)} className="btn btn-warning btn-sm me-2">Edit</button>
                  <button onClick={() => remove(i)} className="btn btn-danger btn-sm">Del</button>
                </div>
              </li>
            ))}
          </ul>

          {list.length > 0 && (
            <button onClick={clearAll} className="btn btn-dark w-100 mt-3">
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
