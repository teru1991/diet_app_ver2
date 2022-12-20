/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';
import notifications from '../../data/notifications';

const NotificationItem = ({
  img,
  title,
  date
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink to={`${adminRoot}/pages/product/details`}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <img
          src={img}
          alt={title}
          className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
        />
      </NavLink>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="pl-3 pr-2">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink to={`${adminRoot}/pages/product/details`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="font-weight-medium mb-1">{title}</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted mb-0 text-small">{date}</p>
        </NavLink>
      </div>
    </div>
  );
};

const TopnavNotifications = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="position-relative d-inline-block">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UncontrolledDropdown className="dropdown-menu-right">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownToggle
          className="header-icon notificationButton"
          color="empty"
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-bell" />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="count">3</span>
        </DropdownToggle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownMenu
          className="position-absolute mt-3 scroll"
          right
          id="notificationDropdown"
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {notifications.map((notification, index) => {
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              return <NotificationItem key={index} {...notification} />;
            })}
          </PerfectScrollbar>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavNotifications;
