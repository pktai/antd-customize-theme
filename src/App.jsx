import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import PublicRoute from './layouts/PublicRoute';
import PrivateRoute from './layouts/PrivateRoute';

class App extends React.Component {
  showContent = (lines) => {
    let pages = [];

    if (lines.length > 0) {
      pages = lines.map((route) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={shortid()}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={shortid()}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        );
      });
    }

    return (
      <Suspense fallback={<Spin />}>
        <Switch>{pages}</Switch>
      </Suspense>
    );
  };

  render() {
    return <Router> {this.showContent(routes)} </Router>;
  }
}

export default App;
