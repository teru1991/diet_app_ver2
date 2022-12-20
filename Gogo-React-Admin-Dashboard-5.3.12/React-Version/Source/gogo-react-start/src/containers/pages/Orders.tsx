/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, Card, CardBody, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
import orders from '../../data/orders';

const OrderItem = ({
  name,
  address,
  date,
  status,
  statusColor
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="d-flex flex-row mb-3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex flex-grow-1 min-width-zero">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink
            to="#"
            // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
            location={{}}
            className="list-item-heading mb-1 truncate w-40 w-xs-100"
          >
            {name}
          </NavLink>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{address}</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{date}</p>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="w-15 w-xs-100 text-right">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Badge color={statusColor} pill>
              {status}
            </Badge>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

const Orders = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx>
        {orders.map((order, index) => {
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          return <OrderItem key={`order_${index}`} {...order} />;
        })}
      </Colxx>
    </Row>
  );
};

export default Orders;
