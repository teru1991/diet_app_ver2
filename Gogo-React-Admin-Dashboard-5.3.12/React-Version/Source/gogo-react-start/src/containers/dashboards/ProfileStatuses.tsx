/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody, CardTitle, Progress } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
import data from '../../data/profileStatuses';

const ProfileStatuses = ({ cardClass = 'h-100' }) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className={cardClass}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.profile-status" />
        </CardTitle>
        {data.map((s, index) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div key={index} className="mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <p className="mb-2">
                {s.title}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className="float-right text-muted">
                  {s.status}/{s.total}
                </span>
              </p>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Progress value={(s.status / s.total) * 100} />
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
export default ProfileStatuses;
