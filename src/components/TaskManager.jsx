import React, { useState } from "react";
import "../styles/taskmanager.scss";
import { useTask } from "../context/TaskContext";
import { X } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { toast } from "sonner";

const TaskManager = () => {
  const { tasks, setOriginalTasks, addTask, deleteTask } = useTask();
  const [error, setError] = useState("");
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") {
      setError("Please enter a task");
      return;
    }
    setError("");

    addTask(task);
    toast.success("Task has been added successfully!");

    setTask("");
  };

  const handleCheckboxChange = (item) => {
    setOriginalTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === item.id ? { ...t, isComplete: !t.isComplete } : t
      )
    );
  };

  const handleDeleteTask = (item) => {
    deleteTask(item);
    toast.success("Task has been deleted successfully!");
  };

  return (
    <div className="task-manager-container">
      <div className="wrapper">
        <section className="heading-section">
          <h1>Task Manager</h1>
          <p>Your daily to do list</p>
        </section>
        <section className="task-section">
          {tasks?.map((item, index) => (
            <div key={index} className="task-item">
              <div>
                <input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => handleCheckboxChange(item)}
                />

                <p>{item.task}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(item)}
              >
                <X color="#FC4B4B" />
                <span>Delete</span>
              </button>
            </div>
          ))}
          <div className="input-field">
            <input
              placeholder="Add new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            {error && (
              <p className="error">
                <TriangleAlert />
                {error}
              </p>
            )}
          </div>
          <button onClick={handleAddTask} className="add-btn">
            Add Task
          </button>
        </section>
      </div>
    </div>
  );
};

export default TaskManager;
