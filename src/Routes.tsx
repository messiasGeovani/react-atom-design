import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/Auth";

import Login from "@pages/Login";
import Profile from "@pages/Profile";
import SignUp from "@pages/SignUp";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}
