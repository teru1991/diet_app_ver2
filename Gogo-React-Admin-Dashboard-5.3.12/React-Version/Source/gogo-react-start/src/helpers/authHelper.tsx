import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { getCurrentUser } from './Utils';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
// eslint-disable-next-line import/no-cycle
import { isAuthGuardActive } from 'constants/defaultValues';

const ProtectedRoute = ({
  // @ts-expect-error TS(7031): Binding element 'Component' implicitly has an 'any... Remove this comment to see the full error message
  component: Component,
  roles = undefined,
  ...rest
}) => {
  const setComponent = (props: any) => {
    if (isAuthGuardActive) {
      const currentUser = getCurrentUser();
      if (currentUser) {
        if (roles) {
          // @ts-expect-error TS(2339): Property 'includes' does not exist on type 'never'... Remove this comment to see the full error message
          if (roles.includes(currentUser.role)) {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <Component {...props} />;
          }
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect
              to={{
                pathname: '/unauthorized',
                state: { from: props.location },
              }}
            />
          );
        }
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Component {...props} />;
      }
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Redirect
          to={{
            pathname: '/user/login',
            state: { from: props.location },
          }}
        />
      );
    }
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Component {...props} />;
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Route {...rest} render={setComponent} />;
};

// eslint-disable-next-line import/prefer-default-export
export { ProtectedRoute };
