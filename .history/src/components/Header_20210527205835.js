import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="blue" text="Add" />
      <Button color="red" text="Add 2" />
      <Button color="green" text="Add 3" />
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
