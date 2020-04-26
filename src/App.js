import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import signInUp from './pages/sign-in-up/sign-in-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signIn" component={signInUp} />

      </Switch>
    </div>
  );
}

export default App;
// ager exact ma dunga router ma to wo ek fix cheez ko render karega
// or ager exact nai dunga to wo har cheex ko render karega jo particular dosri class sath hain
// switch hamesha path ko dekhta jo cheez path given hogi sirf ausko render karega
// baki sb ko neglect kardega
