/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
import data from '../../data/tickets';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';

const Tickets = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.tickets" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="dashboard-list-with-user">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {data.map((ticket, index) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div
                  key={index}
                  className="d-flex flex-row mb-3 pb-3 border-bottom"
                >
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink to={`${adminRoot}/pages/product/details`}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img
                      src={ticket.thumb}
                      alt={ticket.title}
                      className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                    />
                  </NavLink>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="pl-3 pr-2">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={`${adminRoot}/pages/product/details`}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <p className="font-weight-medium mb-0 ">{ticket.title}</p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <p className="text-muted mb-0 text-small">
                        {ticket.detail}
                      </p>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};
export default Tickets;
