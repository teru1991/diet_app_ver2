import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// @ts-expect-error TS(2307): Cannot find module 'containers/navs/Topnav' or its... Remove this comment to see the full error message
import TopNav from 'containers/navs/Topnav';
// @ts-expect-error TS(2307): Cannot find module 'containers/navs/Sidebar' or it... Remove this comment to see the full error message
import Sidebar from 'containers/navs/Sidebar';
// @ts-expect-error TS(2307): Cannot find module 'containers/navs/Footer' or its... Remove this comment to see the full error message
import Footer from 'containers/navs/Footer';

const AppLayout = ({
  containerClassnames,
  children,
  history
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div id="app-container" className={containerClassnames}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TopNav history={history} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Sidebar />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <main>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="container-fluid">{children}</div>
      </main>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Footer />
    </div>
  );
};
const mapStateToProps = ({
  menu
}: any) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
