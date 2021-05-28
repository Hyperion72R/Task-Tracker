import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="blue" text="Add" onClick={onClick} />
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

<h1 key="id"></h1>;

export default Header;
