import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  border: "5px solid",
  color: "red",
  backgroundColor: "black",
  padding: ".7em",
  textAlign: "center",
};

export default Header;
