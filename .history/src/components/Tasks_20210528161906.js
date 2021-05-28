import Task from "./Task.js";

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}{" "}
    </>
  );
};

export default Tasks;
