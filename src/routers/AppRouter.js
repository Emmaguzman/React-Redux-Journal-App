import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking,setIsLoggedIn]);

  if (cheking) {
    return <h1>Espere...</h1>;
  }
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/" component={JournalScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
