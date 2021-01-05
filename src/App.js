import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserProvider, { useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
