import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import Home from './Home'



function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
