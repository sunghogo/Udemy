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
  // Underlying/Wrapper Element
  return <button>{children}</button>;
}

export default Button;
