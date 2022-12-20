import React from 'react';

const MenuIcon = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <svg
        className="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 17"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <rect x="0.48" y="0.5" width="7" height="1" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <rect x="0.48" y="7.5" width="7" height="1" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <rect x="0.48" y="15.5" width="7" height="1" />
      </svg>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <svg
        className="sub"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 17"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <rect x="1.56" y="0.5" width="16" height="1" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <rect x="1.56" y="7.5" width="16" height="1" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <rect x="1.56" y="15.5" width="16" height="1" />
      </svg>
    </>
  );
};

export default MenuIcon;
