import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { Badge } from 'reactstrap';

const RecentPost = ({
  data
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="d-flex flex-row mb-3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink className="d-block position-relative" to="#" location={{}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <img
          src={data.thumb}
          alt="thumbnail"
          className="list-thumbnail border-0"
        />
        {data.badge !== '' && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Badge
            color="primary"
            pill
            className="position-absolute badge-top-left"
          >
            {data.badge}
          </Badge>
        )}
      </NavLink>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="pl-3 pt-2 pr-2 pb-2">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink className="d-block position-relative" to="#" location={{}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="list-item-heading">{data.title}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default injectIntl(RecentPost);
