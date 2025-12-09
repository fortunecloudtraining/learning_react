import { useState, useEffect } from "react";

function Todoarray() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // ✅ Load tasks from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) {
      setTasks(saved);
    }
  }, []);

  // ✅ Save task
  const addTask = () => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTask("");
  };

  return (
    <>
      <h1>Todo App (LocalStorage)</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default Todoarray;
