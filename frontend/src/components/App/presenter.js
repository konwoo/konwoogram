import React from 'react';
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './style.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Explore from 'components/Explore'

const App = props => [
  props.isLoggedIn ? <Navigation key={1}/> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3}/>
]

App.prototype = {
  isLoggedIn: PropTypes.bool.isRequired
}
  

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed}/>
    <Route exact path="/explore" component={Explore}/>
    <Route exact path="/search/:searchTerm" component={Explore}/>
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route exact path="/recover" render={() => "password"}/>
  </Switch>
)

export default App;
