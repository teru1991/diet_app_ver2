import React from 'react';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/cards/GradientCard'... Remove this comment to see the full error message
import GradientCard from 'components/cards/GradientCard';

const GradientCardContainer = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <GradientCard>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span className="badge badge-pill badge-theme-3 align-self-start mb-3">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IntlMessages id="dashboards.gogo" />
      </span>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p className="lead text-white">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IntlMessages id="dashboards.magic-is-in-the-details" />
      </p>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p className="text-white">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IntlMessages id="dashboards.yes-it-is-indeed" />
      </p>
    </GradientCard>
  );
};
export default GradientCardContainer;
