import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Components/Home'
import SummonerPage from './Components/SummonerPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/summoner/:summoner' component={SummonerPage} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
