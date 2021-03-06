import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onChange={deleteTask}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
