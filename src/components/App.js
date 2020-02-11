import React from 'react';
import SignUp from "./SignUp";
import UserList from "./UserList";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import StoreList from "./StoreList";
import StoreSignUp from "./StoreSignUp";
import FileUploader from "./FileUploader";

function App() {
  return (<Router>
          <div>
              <Header/>
              <Switch>
                  <Route path="/files">
                      <FileUploader/>
                  </Route>
                  <Route path="/stores">
                      <StoreList />
                  </Route>
                  <Route path="/signup">
                      <SignUp />
                  </Route>
                  <Route path="/signupstore">
                      <StoreSignUp />
                  </Route>
                  <Route path="/">
                      <UserList />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
