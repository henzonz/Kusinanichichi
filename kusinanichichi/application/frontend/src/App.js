import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
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
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;
