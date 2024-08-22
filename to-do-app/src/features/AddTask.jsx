import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("green");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Unique for each task
      title,
      body,
      dueDate,
      priority,
      completed: false,
    };
    addTask(newTask);
    setTitle("");
    setBody("");
    setDueDate("");
    setPriority("green");
  };

  return (
    <form onSubmit={handleSubmit} className="todoform">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="red">Urgent</option>
        <option value="yellow"> Regular</option>
        <option value="green">Not urgent</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
