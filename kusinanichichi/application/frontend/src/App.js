import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SilogMeals from './FoodMenu/SilogMeals'
import Home from './Home'
import Navbar from './Navbar'
import Snacks from './FoodMenu/Snacks'
import Drinks from './FoodMenu/Drinks'
import Contacts from './Contacts'
import Wings from './FoodMenu/Wings'



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
          <Route exact path="/silogmeals">
            <SilogMeals />
          </Route>
          <Route path="/wings">
            <Wings />
          </Route>
          <Route path="/contact">
            <Contacts />
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
