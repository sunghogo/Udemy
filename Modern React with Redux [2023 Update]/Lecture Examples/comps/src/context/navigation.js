import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListner("popstate", handler);
    };
  }, []);

  function navigate(to) {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      <div>{children}</div>
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
