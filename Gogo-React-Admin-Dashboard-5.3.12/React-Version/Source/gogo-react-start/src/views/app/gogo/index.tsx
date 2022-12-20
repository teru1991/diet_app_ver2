import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Start = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './start' was resolved to '/Users/itahashik... Remove this comment to see the full error message
  import(/* webpackChunkName: "start" */ './start')
);
const Gogo = ({
  match
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Suspense fallback={<div className="loading" />}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Switch>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Route
        path={`${match.url}/start`}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        render={(props) => <Start {...props} />}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
