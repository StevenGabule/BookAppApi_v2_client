import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            NationalBook
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/books"} className="nav-link">
                Books
              </Link>
            </li>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
