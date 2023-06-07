import PropTypes from "prop-types";
import className from "classnames";

// Wrapper
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const finalClassName = className("px-3", "py-1.5", {
    "bg-blue-500": primary,
    "border-blue-700": primary,
    // "bg-blue-500": secondary,
    // "border-blue-700": secondary,
    // "bg-blue-500": success,
    // "border-blue-700": success,
    // "bg-blue-500": warning,
    // "border-blue-700": warning,
    // "bg-blue-500": danger,
    // "border-blue-700": danger,
  });

  // Underlying/Wrapper Element
  return (
    <button className="px-3 py-1.5 border border-blue-700 bg-blue-500 text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
  },
};

export default Button;
