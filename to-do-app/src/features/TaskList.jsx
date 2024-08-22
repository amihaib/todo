import React from "react";
import TaskItem from "./TaskItem";
import "./todo.css";

const TaskList = ({ tasks, removeTask, toggleTaskCompletion }) => {
  return (
    <ul className="todolist">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
