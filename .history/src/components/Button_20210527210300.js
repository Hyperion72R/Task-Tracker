import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

console.log(Button.propTypes.text.string);

export default Button;
