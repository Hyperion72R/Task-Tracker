import PropTypes from "prop-types";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{border: 1px __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, color: "red", backgroundColor: "black" }}>{title}</h1>
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
