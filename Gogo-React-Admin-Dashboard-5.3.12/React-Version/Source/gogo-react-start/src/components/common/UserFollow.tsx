import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-expect-error TS(6142): Module '../pages/SingleLightbox' was resolved to '... Remove this comment to see the full error message
import SingleLightbox from '../pages/SingleLightbox';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

const UserFollow = ({
  data
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SingleLightbox
        thumb={data.thumb}
        large={data.large}
        className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="pl-3 flex-fill">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink to="#" location={{}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="font-weight-medium mb-0">{data.name}</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted mb-0 text-small">{data.status}</p>
        </NavLink>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink
          className="btn btn-outline-primary btn-xs"
          to="#"
          // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
          location={{}}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="pages.follow" />
        </NavLink>
      </div>
    </div>
  );
};

export default UserFollow;
