import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import StoreFront from './components/StoreFront/StoreFront';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import store from './redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/storefront" component={StoreFront} />
              <Route path="/shoppingcart" component={ShoppingCart} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
