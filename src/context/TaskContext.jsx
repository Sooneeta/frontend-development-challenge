import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [originalTasks, setOriginalTasks] = useState(() => {
    const savedtasks = localStorage.getItem("tasks");
    return savedtasks ? JSON.parse(savedtasks) : [];
  });
  const [tasks, setTasks] = useState(originalTasks);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(originalTasks));
    setTasks(originalTasks);
  }, [originalTasks]);

  const addTask = (task) => {
    setLoading(true);
    const newTask = {
      id: crypto.randomUUID(),
      task,
      isComplete: false,
    };
    setOriginalTasks([...originalTasks, newTask]);
    setTimeout(() => setLoading(false), 3000);
  };

  const deleteTask = (deletedTask) => {
    setLoading(true);
    setOriginalTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== deletedTask.id)
    );
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        setOriginalTasks,
        loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
