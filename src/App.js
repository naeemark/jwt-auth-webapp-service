import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}><b>Jwt Auth WebApp</b></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a title="My Profile" className="nav-link" target="_blank" rel="noopener noreferrer"
                  href={"https://www.linkedin.com/in/naeemark"}><img src="/linkedin.svg" className="li-icon" alt="My Profile" /> </a>
              </li>
              <li className="nav-item nav-link"> | </li>
              <li className="nav-item">
                <a title="Code Repository" className="nav-link" target="_blank" rel="noopener noreferrer"
                  href={"https://www.github.com/naeemark/jwt-auth-service"}><img src="/github.svg" className="nav-icon" alt="GitHub Repo" /> </a>
              </li>
              <li className="nav-item nav-link"> | </li>
              <li className="nav-item">
                <a title="Swagger Docs" className="nav-link" target="_blank" rel="noopener noreferrer"
                  href={"https://jwt-auth-service.naeemark.usw1.kubesail.org/swagger-ui.html"}><img src="/swagger.svg" className="nav-icon" alt="Swagger Docs" /> </a>
              </li>
              <li className="nav-item nav-link"> | </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
