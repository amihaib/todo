import React from "react";

const TaskItem = ({ task, removeTask, toggleTaskCompletion }) => {
  const priorityColor = {
    red: "red",
    yellow: "yellow",
    green: "green",
  };

  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        color: priorityColor[task.priority],
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <strong>{task.title}</strong>: {task.body}
      (due by {task.dueDate})
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
