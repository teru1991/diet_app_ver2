/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

const PriceCard = ({
  data
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody className="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="price-top-part">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className={`large-icon ${data.icon}`} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">
            {data.title}
          </h5>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-large mb-2 text-default">{data.price}</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small">{data.detail}</p>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ul className="list-unstyled">
            {data.features.map((feature: any, index: any) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <li key={index}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-0">{feature}</p>
                </li>
              );
            })}
          </ul>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="text-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to={data.link} className="btn btn-link btn-empty btn-lg">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="pages.purchase" />{' '}
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i className="simple-icon-arrow-right" />
            </NavLink>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(PriceCard);
