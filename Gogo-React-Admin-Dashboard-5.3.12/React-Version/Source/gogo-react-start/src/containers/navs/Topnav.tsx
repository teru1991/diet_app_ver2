/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
// @ts-expect-error TS(2307): Cannot find module 'redux/actions' or its correspo... Remove this comment to see the full error message
} from 'redux/actions';

import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive,
  adminRoot,
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
} from 'constants/defaultValues';

// @ts-expect-error TS(2307): Cannot find module 'components/svg' or its corresp... Remove this comment to see the full error message
import { MobileMenuIcon, MenuIcon } from 'components/svg';
// @ts-expect-error TS(2307): Cannot find module 'helpers/Utils' or its correspo... Remove this comment to see the full error message
import { getDirection, setDirection } from 'helpers/Utils';
// @ts-expect-error TS(6142): Module './Topnav.EasyAccess' was resolved to '/Use... Remove this comment to see the full error message
import TopnavEasyAccess from './Topnav.EasyAccess';
// @ts-expect-error TS(6142): Module './Topnav.Notifications' was resolved to '/... Remove this comment to see the full error message
import TopnavNotifications from './Topnav.Notifications';
// @ts-expect-error TS(6142): Module './Topnav.DarkSwitch' was resolved to '/Use... Remove this comment to see the full error message
import TopnavDarkSwitch from './Topnav.DarkSwitch';

const TopNav = ({
  intl,
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  locale,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  changeLocaleAction
}: any) => {
  const [isInFullScreen, setIsInFullScreen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword('');
  };

  const handleChangeLocale = (_locale: any, direction: any) => {
    changeLocaleAction(_locale);

    const currentDirection = getDirection().direction;
    if (direction !== currentDirection) {
      setDirection(direction);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const isInFullScreenFn = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      // @ts-expect-error TS(2339): Property 'webkitFullscreenElement' does not exist ... Remove this comment to see the full error message
      (document.webkitFullscreenElement &&
        // @ts-expect-error TS(2339): Property 'webkitFullscreenElement' does not exist ... Remove this comment to see the full error message
        document.webkitFullscreenElement !== null) ||
      // @ts-expect-error TS(2339): Property 'mozFullScreenElement' does not exist on ... Remove this comment to see the full error message
      (document.mozFullScreenElement &&
        // @ts-expect-error TS(2339): Property 'mozFullScreenElement' does not exist on ... Remove this comment to see the full error message
        document.mozFullScreenElement !== null) ||
      // @ts-expect-error TS(2551): Property 'msFullscreenElement' does not exist on t... Remove this comment to see the full error message
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };

  const handleSearchIconClick = (e: any) => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target;
      if (!e.target.classList.contains('search')) {
        if (e.target.parentElement.classList.contains('search')) {
          elem = e.target.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = e.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        search();
        elem.classList.remove('mobile-view');
        removeEventsSearch();
      } else {
        elem.classList.add('mobile-view');
        addEventsSearch();
      }
    } else {
      search();
    }
    e.stopPropagation();
  };

  const handleDocumentClickSearch = (e: any) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      removeEventsSearch();
      setSearchKeyword('');
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener('click', handleDocumentClickSearch, true);
  };

  const addEventsSearch = () => {
    document.addEventListener('click', handleDocumentClickSearch, true);
  };

  const handleSearchInputKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const toggleFullScreen = () => {
    const isFS = isInFullScreenFn();

    const docElm = document.documentElement;
    if (!isFS) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      // @ts-expect-error TS(2339): Property 'mozRequestFullScreen' does not exist on ... Remove this comment to see the full error message
      } else if (docElm.mozRequestFullScreen) {
        // @ts-expect-error TS(2339): Property 'mozRequestFullScreen' does not exist on ... Remove this comment to see the full error message
        docElm.mozRequestFullScreen();
      // @ts-expect-error TS(2339): Property 'webkitRequestFullScreen' does not exist ... Remove this comment to see the full error message
      } else if (docElm.webkitRequestFullScreen) {
        // @ts-expect-error TS(2339): Property 'webkitRequestFullScreen' does not exist ... Remove this comment to see the full error message
        docElm.webkitRequestFullScreen();
      // @ts-expect-error TS(2551): Property 'msRequestFullscreen' does not exist on t... Remove this comment to see the full error message
      } else if (docElm.msRequestFullscreen) {
        // @ts-expect-error TS(2551): Property 'msRequestFullscreen' does not exist on t... Remove this comment to see the full error message
        docElm.msRequestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    // @ts-expect-error TS(2339): Property 'webkitExitFullscreen' does not exist on ... Remove this comment to see the full error message
    } else if (document.webkitExitFullscreen) {
      // @ts-expect-error TS(2339): Property 'webkitExitFullscreen' does not exist on ... Remove this comment to see the full error message
      document.webkitExitFullscreen();
    // @ts-expect-error TS(2339): Property 'mozCancelFullScreen' does not exist on t... Remove this comment to see the full error message
    } else if (document.mozCancelFullScreen) {
      // @ts-expect-error TS(2339): Property 'mozCancelFullScreen' does not exist on t... Remove this comment to see the full error message
      document.mozCancelFullScreen();
    // @ts-expect-error TS(2551): Property 'msExitFullscreen' does not exist on type... Remove this comment to see the full error message
    } else if (document.msExitFullscreen) {
      // @ts-expect-error TS(2551): Property 'msExitFullscreen' does not exist on type... Remove this comment to see the full error message
      document.msExitFullscreen();
    }
    setIsInFullScreen(!isFS);
  };

  const handleLogout = () => {
    console.log('logout');
  };

  const menuButtonClick = (e: any, _clickCount: any, _conClassnames: any) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e: any, _containerClassnames: any) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  const { messages } = intl;
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <nav className="navbar fixed-top">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex align-items-center navbar-left">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink
          to="#"
          // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuIcon />
        </NavLink>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink
          to="#"
          // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MobileMenuIcon />
        </NavLink>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="search">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Input
            name="searchKeyword"
            id="searchKeyword"
            placeholder={messages['menu.search']}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={(e) => handleSearchInputKeyPress(e)}
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span
            className="search-icon"
            onClick={(e) => handleSearchIconClick(e)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-magnifier" />
          </span>
        </div>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-inline-block">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <UncontrolledDropdown className="ml-2">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownToggle
              caret
              color="light"
              size="sm"
              className="language-button"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span className="name">{locale.toUpperCase()}</span>
            </DropdownToggle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownMenu className="mt-3" right>
              {localeOptions.map((l: any) => {
                return (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <DropdownItem
                    onClick={() => handleChangeLocale(l.id, l.direction)}
                    key={l.id}
                  >
                    {l.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink className="navbar-logo" to={adminRoot}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="logo d-none d-xs-block" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="navbar-right">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {isDarkSwitchActive && <TopnavDarkSwitch />}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="header-icons d-inline-block align-middle">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TopnavEasyAccess />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TopnavNotifications />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i className="simple-icon-size-actual d-block" />
            ) : (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="user d-inline-block">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <UncontrolledDropdown className="dropdown-menu-right">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownToggle className="p-0" color="empty">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span className="name mr-1">Sarah Kortney</span>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img alt="Profile" src="/assets/img/profiles/l-1.jpg" />
              </span>
            </DropdownToggle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownMenu className="mt-3" right>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownItem>Account</DropdownItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownItem>Features</DropdownItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownItem>History</DropdownItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownItem>Support</DropdownItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownItem divider />
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({
  menu,
  settings
}: any) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
