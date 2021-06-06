import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("Click");
  // };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="#0a39c4" text="Add" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS IN JS
// const headingStyle = {
//   border: "5px solid",
//   color: "red",
//   backgroundColor: "black",
//   padding: ".7em",
//   textAlign: "center",
// };

export default Header;
