import React from 'react';

const MobileMenuIcon = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <rect x="0.5" y="0.5" width="25" height="1" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <rect x="0.5" y="7.5" width="25" height="1" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <rect x="0.5" y="15.5" width="25" height="1" />
    </svg>
  );
};

export default MobileMenuIcon;
