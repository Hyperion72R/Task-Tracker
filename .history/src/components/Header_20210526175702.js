import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1
        style={{
          border: "5px solid",
          color: "red",
          backgroundColor: "black",
          padding: "2em",
        }}
      >
        {title}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
