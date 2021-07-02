import React, { useState, useEffect } from 'react';
import './App.css';
import LogIn from './pages/LogIn';
import Registration from './pages/Registration';
import Succeeded from './pages/Succeeded';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('token'))
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route path="/" exact>
            {isAuth ? <Succeeded /> : <Redirect to="login" />}
          </Route>
          <Route path="/registration" >
            <Registration />
          </Route>
          <Route path="/login" >
            {isAuth ? <Redirect to="/" /> : <LogIn setIsAuth={setIsAuth} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
