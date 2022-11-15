import React, { useState } from "react";
import Header from "./Component/Header/Header";
import SideBar from "./Component/Sidebar/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./Component/Body/Chat/Chat";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Router>
        {!user ? (
          <h1>LOGIN page</h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* react-router chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
