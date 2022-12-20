import React, { useEffect } from 'react';
import { Row, Card, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';

const Error = () => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="fixed-background" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <main>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="container">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row className="h-100">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" md="10" className="mx-auto my-auto">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Card className="auth-card">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="position-relative image-side ">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="white mb-0">Yes, it is indeed!</p>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="form-side">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink to="/" className="white">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="logo-single" />
                  </NavLink>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <CardTitle className="mb-4">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <IntlMessages id="pages.error-title" />
                  </CardTitle>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-0 text-muted text-small mb-0">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <IntlMessages id="pages.error-code" />
                  </p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="display-1 font-weight-bold mb-5">404</p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink
                    to={adminRoot}
                    className="btn btn-primary btn-shadow btn-lg"
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <IntlMessages id="pages.go-back-home" />
                  </NavLink>
                </div>
              </Card>
            </Colxx>
          </Row>
        </div>
      </main>
    </>
  );
};

export default Error;
