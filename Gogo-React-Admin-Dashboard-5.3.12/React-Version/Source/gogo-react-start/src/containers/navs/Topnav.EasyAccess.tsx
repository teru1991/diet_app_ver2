import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

const TopnavEasyAccess = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="position-relative d-none d-sm-inline-block">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UncontrolledDropdown className="dropdown-menu-right">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownToggle className="header-icon" color="empty">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-grid" />
        </DropdownToggle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownMenu
          className="position-absolute mt-3"
          right
          id="iconMenuDropdown"
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" className="icon-menu-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="iconsminds-shop-4 d-block" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="menu.dashboards" />
          </NavLink>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" className="icon-menu-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="iconsminds-pantone d-block" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="menu.ui" />
          </NavLink>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" className="icon-menu-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="iconsminds-bar-chart-4 d-block" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="menu.charts" />
          </NavLink>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" className="icon-menu-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="iconsminds-speach-bubble d-block" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="menu.chat" />
          </NavLink>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" className="icon-menu-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="iconsminds-formula d-block" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="menu.survey" />
          </NavLink>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" className="icon-menu-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="iconsminds-check d-block" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="menu.todo" />
          </NavLink>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavEasyAccess;
