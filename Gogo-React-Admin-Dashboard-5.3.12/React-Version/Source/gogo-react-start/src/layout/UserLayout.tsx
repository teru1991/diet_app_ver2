import React, { useEffect } from 'react';

const UserLayout = ({
  children
}: any) => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="fixed-background" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <main>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default UserLayout;
