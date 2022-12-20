import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';

const GradientWithRadialProgressCard = ({
  icon = 'iconsminds-bell',
  title = 'title',
  detail = 'detail',
  percent = 80,
  progressText = '8/10',
}) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="progress-banner">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody className="justify-content-between d-flex flex-row align-items-center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i
            className={`${icon} mr-2 text-white align-text-bottom d-inline-block`}
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="lead text-white">{title}</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="text-small text-white">{detail}</p>
          </div>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="progress-bar-circle progress-bar-banner position-relative">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CircularProgressbar
            strokeWidth={4}
            value={percent}
            text={progressText}
          />
        </div>
      </CardBody>
    </Card>
  );
};
export default React.memo(GradientWithRadialProgressCard);
