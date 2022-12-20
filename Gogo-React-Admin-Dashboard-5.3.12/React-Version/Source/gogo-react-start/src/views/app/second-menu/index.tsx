import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Second = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './second' was resolved to '/Users/itahashi... Remove this comment to see the full error message
  import(/* webpackChunkName: "second" */ './second')
);
const SecondMenu = ({
  match
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Suspense fallback={<div className="loading" />}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Switch>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Redirect exact from={`${match.url}/`} to={`${match.url}/second`} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Route
        path={`${match.url}/second`}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        render={(props) => <Second {...props} />}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
