import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import PublicRoute from './layouts/PublicRoute';
import PrivateRoute from './layouts/PrivateRoute';

const App = () => {
  const showContent = (rt) => {
    let pages = [];

    if (rt.length > 0) {
      pages = rt.map((route) => {
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

    //pages.push(<Route key="login" render={() => <Redirect to="/login" />} />);

    return (
      <Switch>
        <Suspense
          fallback={
            <Spin>
              <div className="is-spining" />
            </Spin>
          }
        >
          {pages}
        </Suspense>{' '}
      </Switch>
    );
  };
  return <Router> {showContent(routes)} </Router>;
};

export default App;
