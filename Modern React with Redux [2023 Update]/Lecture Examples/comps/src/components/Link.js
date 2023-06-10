import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

  const handleClick = (event) => {
    // Shortcircuit handler and resume normal behavior in new tab
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
