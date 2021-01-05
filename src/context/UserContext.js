import { createContext, useContext, useEffect, useMemo, useState } from "react";
import login from "../utils/login";

// Creates a Context object. When React renders a component that subscribes to
// this Context object it will read the current context value from the closest
// matching Provider.
export const UserContext = createContext(null);

// Custom hook that subsrcribes to our context. So we only have to import useUser in our components that want to have access to our context value.
// In our components all we have to write is `const {user, setUser} = useUser()`
export const useUser = () => useContext(UserContext);

// provider component to keep all of our context login in one place. git
// checkout context-in-app to see how you could of done this log in the App
// component
const UserProvider = ({ children }) => {
  // children is whatever is included between the opening and closing tags when invoking a component.
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await login();
      setUser(user);
    })();
  }, []);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  //   Every Context object comes with a Provider React component that allows consuming
  //   components to subscribe to context changes. The Provider component accepts a value prop
  //   to be passed to consuming components that are descendents of this Provider. ( Although not
  //   utilized often, Providers can be nested to override values deeper within the tree).
  //   All consumers that are descendents of a Provider will re-render whenver the Provider's value prop changes.
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
