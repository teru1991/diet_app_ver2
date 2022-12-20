import React from 'react';
import { Card, CardBody } from 'reactstrap';

const GradientCard = ({
  children
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="dashboard-sq-banner justify-content-end">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody className="justify-content-end d-flex flex-column">
        {children}
      </CardBody>
    </Card>
  );
};
export default React.memo(GradientCard);
