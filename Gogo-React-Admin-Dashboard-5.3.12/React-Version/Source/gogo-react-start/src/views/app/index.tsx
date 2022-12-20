import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// @ts-expect-error TS(2307): Cannot find module 'layout/AppLayout' or its corre... Remove this comment to see the full error message
import AppLayout from 'layout/AppLayout';

const Gogo = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './gogo' was resolved to '/Users/itahashike... Remove this comment to see the full error message
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './second-menu' was resolved to '/Users/ita... Remove this comment to see the full error message
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const BlankPage = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './blank-page' was resolved to '/Users/itah... Remove this comment to see the full error message
  import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
);

const App = ({
  match
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AppLayout>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="dashboard-wrapper">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Suspense fallback={<div className="loading" />}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Switch>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              path={`${match.url}/gogo`}
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              render={(props) => <Gogo {...props} />}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              path={`${match.url}/second-menu`}
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              render={(props) => <SecondMenu {...props} />}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              path={`${match.url}/blank-page`}
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              render={(props) => <BlankPage {...props} />}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({
  menu
}: any) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
