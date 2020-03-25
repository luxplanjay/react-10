import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import routes from '../routes';

const App = () => (
  <Layout>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
