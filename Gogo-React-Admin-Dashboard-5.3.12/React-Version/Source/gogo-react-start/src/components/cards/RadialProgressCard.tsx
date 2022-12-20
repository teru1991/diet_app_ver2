import React from 'react';
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';

const RadialProgressCard = ({
  title = 'title',
  percent = 50,
  isSortable = false,
}) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      {isSortable && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardHeader className="p-0 position-relative">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="position-absolute handle card-icon">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-shuffle" />
          </div>
        </CardHeader>
      )}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody className="d-flex justify-content-between align-items-center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="mb-0">{title}</CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="progress-bar-circle">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CircularProgressbar
            strokeWidth={4}
            value={percent}
            text={`${percent}%`}
          />
        </div>
      </CardBody>
    </Card>
  );
};
export default React.memo(RadialProgressCard);
