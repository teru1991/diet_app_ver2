import React from 'react';

const DataListIcon = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <path
        className="view-icon-svg"
        d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <path
        className="view-icon-svg"
        d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <path
        className="view-icon-svg"
        d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
      />
    </svg>
  );
};

export default DataListIcon;
