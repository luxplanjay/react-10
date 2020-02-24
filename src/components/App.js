import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Blog from '../views/Blog';
import Profile from '../views/Profile';
import Patterns from '../views/Patterns';
import NotFound from '../views/NotFound';
import Layout from './Layout';
import routes from '../routes';
// import userAPI from '../services/user-api';
import AuthContext from '../contexts/Auth';

export default class App extends Component {
  render() {
    return (
      <AuthContext>
        <Layout>
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.blog} exact component={Blog} />
            <Route path={routes.profile} component={Profile} />
            <Route path={routes.patterns} component={Patterns} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AuthContext>
    );
  }
}
