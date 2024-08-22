import React, { useState, useEffect } from "react";
import TaskList from "./features/TaskList";
import AddTask from "./features/AddTask";
import "./app.css";

const App = () => {
  // Initialize tasks state from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [showCompleted, setShowCompleted] = useState(true);
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);

  useEffect(() => {
    // Loads from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    //Saves to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks((prevTasks) =>
      [...prevTasks, task].sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      )
    );
  };

  // Function to remove a task by ID
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks
    .filter((task) => showCompleted || !task.completed)
    .filter((task) => !showUrgentOnly || task.priority !== "green");

  return (
    <div className="todoMain">
      <h1>To Do App</h1>
      <AddTask addTask={addTask} />
      <div className="buttons">
        <button onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? "Hide completed tasks" : "Show completed tasks"}
        </button>
        <button onClick={() => setShowUrgentOnly(!showUrgentOnly)}>
          {showUrgentOnly ? "Show all tasks" : "Show only urgent tasks"}
        </button>
        <button onClick={clearAllTasks}>Delete all tasks</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
