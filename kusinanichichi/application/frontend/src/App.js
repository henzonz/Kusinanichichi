import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SilogMeals from './pages/FoodMenu/SilogMeals'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Snacks from './pages/FoodMenu/Snacks'
import Drinks from './pages/FoodMenu/Drinks'
import Contacts from './pages/Contacts'
import Wings from './pages/FoodMenu/Wings'
import './assets/css/bootstrap.min.css'


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
