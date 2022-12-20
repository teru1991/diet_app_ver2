/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

// @ts-expect-error TS(2307): Cannot find module 'components/StateButton' or its... Remove this comment to see the full error message
import StateButton from 'components/StateButton';

const StateButtonExample = () => {
  const handleSuccessButtonClick = () => {
    return new Promise((success, fail) => {
      setTimeout(() => {
        success('Everything went right!');
      }, 2000);
    });
  };

  const handleFailButtonClick = () => {
    return new Promise((success, fail) => {
      setTimeout(() => {
        fail('Something is wrong!');
      }, 2000);
    });
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" className="mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardTitle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="button.states" />
          </CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="mb-1">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="button.states-text" />
          </p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StateButton
            id="successButton"
            color="primary"
            className="mb-3"
            onClick={handleSuccessButtonClick}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="button.click-here" />
          </StateButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="mb-1">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="button.states-text-alternate" />
          </p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StateButton
            id="failButton"
            color="secondary"
            className="mb-3"
            onClick={handleFailButtonClick}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="button.click-here" />
          </StateButton>
        </CardBody>
      </Card>
    </Colxx>
  );
};
export default StateButtonExample;
