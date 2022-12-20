/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
import data from '../../data/products';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';

const RecentOrders = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="position-absolute card-top-buttons">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <button type="button" className="btn btn-header-light icon-button">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-refresh" />
        </button>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.recent-orders" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="scroll dashboard-list-with-thumbs">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {data.slice(0, 6).map((order, index) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div key={index} className="d-flex flex-row mb-3">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink
                    to={`${adminRoot}/pages/product/details`}
                    className="d-block position-relative"
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img
                      src={order.img}
                      alt={order.title}
                      className="list-thumbnail border-0"
                    />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Badge
                      key={index}
                      className="position-absolute badge-top-right"
                      color={order.statusColor}
                      pill
                    >
                      {order.status}
                    </Badge>
                  </NavLink>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="pl-3 pt-2 pr-2 pb-2">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={`${adminRoot}/pages/product/details`}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <p className="list-item-heading">{order.title}</p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="pr-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-muted mb-1 text-small">
                          {order.description}
                        </p>
                      </div>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {order.createDate}
                      </div>
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
export default RecentOrders;
