import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch ,Route, Redirect } from "react-router-dom";
import Success from "./pages/Success";
// import { useSelector } from "react-redux";
import React from "react";

const App = () => {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path ='/' exact component={ Home } />
            <Route path ='/product/:id' exact component={ Product } />
            <Route path ='/products/:category' exact component={ ProductList } />
            <Route path ='/cart' exact component={ Cart } />
            <Route path ='/login' exact component={ Login } />
            <Route path ='/register' exact component={ Register } />
          </Switch>
      </div>
    </Router>
    );
};

export default App;