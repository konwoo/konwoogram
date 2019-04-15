import React from 'react';
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './style.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';

const App = props => [
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={1} />,
  <Footer key={3}/>
]

App.prototype = {
  isLoggedIn: PropTypes.bool.isRequired
}
  

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "feed"}/>
    <Route exact path="/explore" render={() => "explore"}/>
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route exact path="/recover" render={() => "password"}/>
  </Switch>
)

export default App;
