import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText } from 'reactstrap';
// @ts-expect-error TS(6142): Module './ThumbnailImage' was resolved to '/Users/... Remove this comment to see the full error message
import ThumbnailImage from './ThumbnailImage';

const UserCardBasic = ({
  link = '#',
  data
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="d-flex flex-row mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink to={link} className="d-flex">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ThumbnailImage
          rounded
          small
          src={data.thumb}
          alt="profile"
          className="m-4"
        />
      </NavLink>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className=" d-flex flex-grow-1 min-width-zero">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="min-width-zero">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to={link}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardSubtitle className="truncate mb-1">{data.name}</CardSubtitle>
            </NavLink>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CardText className="text-muted text-small mb-2">
              {data.status}
            </CardText>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default React.memo(UserCardBasic);
