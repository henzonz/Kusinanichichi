import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SilogMeals from './FoodMenu/SilogMeals'
import Home from './Home'
import Navbar from './Navbar'
import Snacks from './FoodMenu/Snacks'
import Drinks from './FoodMenu/Drinks'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/snacks">
            <Snacks />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/silogmeals">
            <SilogMeals />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
