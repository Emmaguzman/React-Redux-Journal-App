import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { startLoadingNotes} from '../actions/notes'

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);        
        dispatch(startLoadingNotes(user.uid))
      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking, setIsLoggedIn]);

  if (cheking) {
    return <h1>Wait...</h1>;
  }
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              path="/auth"
              component={AuthRouter}
              isAuthenticaded={isLoggedIn}
            />
            <PrivateRoute
              exact
              path="/"
              component={JournalScreen}
              isAuthenticaded={isLoggedIn}
            />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
