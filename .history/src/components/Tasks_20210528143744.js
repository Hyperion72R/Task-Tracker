import Task from "./Task.js";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id}>{task.text}</Task>
      ))}
    </>
  );
};

export default Tasks;
