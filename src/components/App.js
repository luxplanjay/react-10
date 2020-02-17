import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../views/Home';
import Shows from '../views/Shows';
import ShowDetails from '../views/ShowDetails';
import NotFound from '../views/NotFound';
import Layout from './Layout';
import routes from '../routes';

const App = () => (
  <Layout>
    <Navigation />
    <hr />

    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.shows} exact component={Shows} />
      <Route path={routes.showDetails} component={ShowDetails} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
