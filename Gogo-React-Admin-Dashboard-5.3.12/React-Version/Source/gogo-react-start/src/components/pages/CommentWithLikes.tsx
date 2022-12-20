import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';

const CommentWithLikes = ({
  intl,
  className,
  data
}: any) => {
  const getLikeLabel = (likeCount: any) => {
    if (likeCount === 1) {
      return intl.messages['pages.like'];
    }
    return intl.messages['pages.likes'];
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
      className={`d-flex flex-row mb-3 border-bottom justify-content-between ${className}`}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink to="#" location={{}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <img
          src={data.thumb}
          alt={data.name}
          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
        />
      </NavLink>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="pl-3 flex-grow-1">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink to="#" location={{}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="font-weight-medium mb-0">{data.name}</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted mb-0 text-small">{data.data}</p>
        </NavLink>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className="mt-3">{data.detail}</p>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="comment-likes">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="post-icon">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" location={{}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
              {data.likes > 0
                ? `${data.likes} ${getLikeLabel(data.likes)}`
                : ''}
            </span>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-heart ml-2" />
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default injectIntl(CommentWithLikes);
