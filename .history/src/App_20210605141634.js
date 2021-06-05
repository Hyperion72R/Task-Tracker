import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const ExampleData = [
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit.",
      day: "Feb 7th at 4:30pm",
      reminder: false,
    },
  ];

  // Add Task

  const addTask = (task) => {
    console.log(task);
  };

  const [tasks, setTasks] = useState(ExampleData);

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
