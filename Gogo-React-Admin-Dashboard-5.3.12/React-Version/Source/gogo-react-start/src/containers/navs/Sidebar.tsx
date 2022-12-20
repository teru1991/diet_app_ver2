/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Nav, NavItem, Collapse } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames,
  changeSelectedMenuHasSubItems,
// @ts-expect-error TS(2307): Cannot find module 'redux/actions' or its correspo... Remove this comment to see the full error message
} from 'redux/actions';

// @ts-expect-error TS(2307): Cannot find module 'constants/menu' or its corresp... Remove this comment to see the full error message
import menuItems from 'constants/menu';

class Sidebar extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedParentMenu: '',
      viewingParentMenu: '',
      collapsedMenus: [],
    };
  }

  // eslint-disable-next-line react/sort-comp
  handleWindowResize = (event: any) => {
    if (event && !event.isTrusted) {
      return;
    }
    // @ts-expect-error TS(2339): Property 'containerClassnames' does not exist on t... Remove this comment to see the full error message
    const { containerClassnames } = this.props;
    const nextClasses = this.getMenuClassesForResize(containerClassnames);
    // @ts-expect-error TS(2339): Property 'setContainerClassnames' does not exist o... Remove this comment to see the full error message
    // eslint-disable-next-line react/destructuring-assignment
    this.props.setContainerClassnames(
      0,
      nextClasses.join(' '),
      // @ts-expect-error TS(2339): Property 'selectedMenuHasSubItems' does not exist ... Remove this comment to see the full error message
      // eslint-disable-next-line react/destructuring-assignment
      this.props.selectedMenuHasSubItems
    );
  };

  handleDocumentClick = (e: any) => {
    const container = this.getContainer();
    let isMenuClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('menu-button') ||
        e.target.classList.contains('menu-button-mobile'))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      (e.target.parentElement.classList.contains('menu-button') ||
        e.target.parentElement.classList.contains('menu-button-mobile'))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.parentElement &&
      e.target.parentElement.parentElement.classList &&
      (e.target.parentElement.parentElement.classList.contains('menu-button') ||
        e.target.parentElement.parentElement.classList.contains(
          'menu-button-mobile'
        ))
    ) {
      isMenuClick = true;
    }
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (container.contains(e.target) || container === e.target || isMenuClick) {
      return;
    }
    this.setState({
      viewingParentMenu: '',
    });
    this.toggle();
  };

  getMenuClassesForResize = (classes: any) => {
    // @ts-expect-error TS(2339): Property 'menuHiddenBreakpoint' does not exist on ... Remove this comment to see the full error message
    const { menuHiddenBreakpoint, subHiddenBreakpoint } = this.props;
    let nextClasses = classes.split(' ').filter((x: any) => x !== '');
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push('menu-mobile');
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter((x: any) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        !nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses.push('menu-sub-hidden');
      }
    } else {
      nextClasses = nextClasses.filter((x: any) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = nextClasses.filter((x: any) => x !== 'menu-sub-hidden');
      }
    }
    return nextClasses;
  };

  getContainer = () => {
    // @ts-expect-error TS(2345): Argument of type 'this' is not assignable to param... Remove this comment to see the full error message
    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(this);
  };

  toggle = () => {
    const hasSubItems = this.getIsHasSubItem();
    // @ts-expect-error TS(2339): Property 'changeSelectedMenuHasSubItems' does not ... Remove this comment to see the full error message
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeSelectedMenuHasSubItems(hasSubItems);
    // @ts-expect-error TS(2339): Property 'containerClassnames' does not exist on t... Remove this comment to see the full error message
    const { containerClassnames, menuClickCount } = this.props;
    const currentClasses = containerClassnames
      ? containerClassnames.split(' ').filter((x: any) => x !== '')
      : '';
    let clickIndex = -1;

    if (!hasSubItems) {
      if (
        currentClasses.includes('menu-default') &&
        (menuClickCount % 4 === 0 || menuClickCount % 4 === 3)
      ) {
        clickIndex = 1;
      } else if (
        currentClasses.includes('menu-sub-hidden') &&
        (menuClickCount === 2 || menuClickCount === 3)
      ) {
        clickIndex = 0;
      } else if (
        currentClasses.includes('menu-hidden') ||
        currentClasses.includes('menu-mobile')
      ) {
        clickIndex = 0;
      }
    } else if (
      currentClasses.includes('menu-sub-hidden') &&
      menuClickCount === 3
    ) {
      clickIndex = 2;
    } else if (
      currentClasses.includes('menu-hidden') ||
      currentClasses.includes('menu-mobile')
    ) {
      clickIndex = 0;
    }
    if (clickIndex >= 0) {
      // @ts-expect-error TS(2339): Property 'setContainerClassnames' does not exist o... Remove this comment to see the full error message
      // eslint-disable-next-line react/destructuring-assignment
      this.props.setContainerClassnames(
        clickIndex,
        containerClassnames,
        hasSubItems
      );
    }
  };

  handleProps = () => {
    this.addEvents();
  };

  addEvents = () => {
    ['click', 'touchstart', 'touchend'].forEach((event) =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  };

  removeEvents = () => {
    ['click', 'touchstart', 'touchend'].forEach((event) =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  };

  setSelectedLiActive = (callback: any) => {
    const oldli = document.querySelector('.sub-menu  li.active');
    if (oldli != null) {
      oldli.classList.remove('active');
    }

    const oldliSub = document.querySelector('.third-level-menu  li.active');
    if (oldliSub != null) {
      oldliSub.classList.remove('active');
    }

    /* set selected parent menu */
    const selectedSublink = document.querySelector(
      '.third-level-menu  a.active'
    );
    if (selectedSublink != null) {
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      selectedSublink.parentElement.classList.add('active');
    }

    const selectedlink = document.querySelector('.sub-menu  a.active');
    if (selectedlink != null) {
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      selectedlink.parentElement.classList.add('active');
      this.setState(
        {
          selectedParentMenu:
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            selectedlink.parentElement.parentElement.getAttribute(
              'data-parent'
            ),
        },
        callback
      );
    } else {
      const selectedParentNoSubItem = document.querySelector(
        '.main-menu  li a.active'
      );
      if (selectedParentNoSubItem != null) {
        this.setState(
          {
            selectedParentMenu:
              selectedParentNoSubItem.getAttribute('data-flag'),
          },
          callback
        );
        // @ts-expect-error TS(2339): Property 'selectedParentMenu' does not exist on ty... Remove this comment to see the full error message
        // eslint-disable-next-line react/destructuring-assignment
      } else if (this.state.selectedParentMenu === '') {
        this.setState(
          {
            selectedParentMenu: menuItems[0].id,
          },
          callback
        );
      }
    }
  };

  setHasSubItemStatus = () => {
    const hasSubmenu = this.getIsHasSubItem();
    // @ts-expect-error TS(2339): Property 'changeSelectedMenuHasSubItems' does not ... Remove this comment to see the full error message
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeSelectedMenuHasSubItems(hasSubmenu);
    this.toggle();
  };

  getIsHasSubItem = () => {
    // @ts-expect-error TS(2339): Property 'selectedParentMenu' does not exist on ty... Remove this comment to see the full error message
    const { selectedParentMenu } = this.state;
    const menuItem = menuItems.find((x: any) => x.id === selectedParentMenu);
    if (menuItem)
      return !!(menuItem && menuItem.subs && menuItem.subs.length > 0);
    return false;
  };

  // eslint-disable-next-line react/sort-comp
  componentDidUpdate(prevProps: any) {
    // @ts-expect-error TS(2339): Property 'location' does not exist on type 'Readon... Remove this comment to see the full error message
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setSelectedLiActive(this.setHasSubItemStatus);

      window.scrollTo(0, 0);
    }
    this.handleProps();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    this.handleWindowResize();
    this.handleProps();
    this.setSelectedLiActive(this.setHasSubItemStatus);
  }

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener('resize', this.handleWindowResize);
  }

  openSubMenu = (e: any, menuItem: any) => {
    const selectedParent = menuItem.id;
    const hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
    // @ts-expect-error TS(2339): Property 'changeSelectedMenuHasSubItems' does not ... Remove this comment to see the full error message
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeSelectedMenuHasSubItems(hasSubMenu);
    if (!hasSubMenu) {
      this.setState({
        viewingParentMenu: selectedParent,
        selectedParentMenu: selectedParent,
      });
      this.toggle();
    } else {
      e.preventDefault();

      // @ts-expect-error TS(2339): Property 'containerClassnames' does not exist on t... Remove this comment to see the full error message
      const { containerClassnames, menuClickCount } = this.props;
      const currentClasses = containerClassnames
        ? containerClassnames.split(' ').filter((x: any) => x !== '')
        : '';

      if (!currentClasses.includes('menu-mobile')) {
        if (
          currentClasses.includes('menu-sub-hidden') &&
          (menuClickCount === 2 || menuClickCount === 0)
        ) {
          // @ts-expect-error TS(2339): Property 'setContainerClassnames' does not exist o... Remove this comment to see the full error message
          // eslint-disable-next-line react/destructuring-assignment
          this.props.setContainerClassnames(3, containerClassnames, hasSubMenu);
        } else if (
          currentClasses.includes('menu-hidden') &&
          (menuClickCount === 1 || menuClickCount === 3)
        ) {
          // @ts-expect-error TS(2339): Property 'setContainerClassnames' does not exist o... Remove this comment to see the full error message
          // eslint-disable-next-line react/destructuring-assignment
          this.props.setContainerClassnames(2, containerClassnames, hasSubMenu);
        } else if (
          currentClasses.includes('menu-default') &&
          !currentClasses.includes('menu-sub-hidden') &&
          (menuClickCount === 1 || menuClickCount === 3)
        ) {
          // @ts-expect-error TS(2339): Property 'setContainerClassnames' does not exist o... Remove this comment to see the full error message
          // eslint-disable-next-line react/destructuring-assignment
          this.props.setContainerClassnames(0, containerClassnames, hasSubMenu);
        }
      } else {
        // @ts-expect-error TS(2339): Property 'addContainerClassname' does not exist on... Remove this comment to see the full error message
        // eslint-disable-next-line react/destructuring-assignment
        this.props.addContainerClassname(
          'sub-show-temporary',
          containerClassnames
        );
      }
      this.setState({
        viewingParentMenu: selectedParent,
      });
    }
  };

  toggleMenuCollapse = (e: any, menuKey: any) => {
    e.preventDefault();

    // @ts-expect-error TS(2339): Property 'collapsedMenus' does not exist on type '... Remove this comment to see the full error message
    const { collapsedMenus } = this.state;
    if (collapsedMenus.indexOf(menuKey) > -1) {
      this.setState({
        collapsedMenus: collapsedMenus.filter((x: any) => x !== menuKey),
      });
    } else {
      collapsedMenus.push(menuKey);
      this.setState({
        collapsedMenus,
      });
    }
    return false;
  };

  // eslint-disable-next-line no-shadow
  filteredList = (menuItems: any) => {
    // @ts-expect-error TS(2339): Property 'currentUser' does not exist on type 'Rea... Remove this comment to see the full error message
    const { currentUser } = this.props;
    if (currentUser) {
      return menuItems.filter(
        (x: any) => (x.roles && x.roles.includes(currentUser.role)) || !x.roles
      );
    }
    return menuItems;
  };

  render() {
    // @ts-expect-error TS(2339): Property 'selectedParentMenu' does not exist on ty... Remove this comment to see the full error message
    const { selectedParentMenu, viewingParentMenu, collapsedMenus } =
      this.state;
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="sidebar">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="main-menu">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="scroll">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Nav vertical className="list-unstyled">
                {menuItems &&
                  this.filteredList(menuItems).map((item: any) => {
                    return (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <NavItem
                        key={item.id}
                        className={classnames({
                          active:
                            (selectedParentMenu === item.id &&
                              viewingParentMenu === '') ||
                            viewingParentMenu === item.id,
                        })}
                      >
                        {item.newWindow ? (
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <a
                            href={item.to}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <i className={item.icon} />{' '}
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <IntlMessages id={item.label} />
                          </a>
                        ) : (
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <NavLink
                            to={item.to}
                            onClick={(e) => this.openSubMenu(e, item)}
                            data-flag={item.id}
                          >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <i className={item.icon} />{' '}
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <IntlMessages id={item.label} />
                          </NavLink>
                        )}
                      </NavItem>
                    );
                  })}
              </Nav>
            </PerfectScrollbar>
          </div>
        </div>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="sub-menu">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="scroll">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              {menuItems &&
                this.filteredList(menuItems).map((item: any) => {
                  return (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Nav
                      key={item.id}
                      className={classnames({
                        'd-block':
                          // @ts-expect-error TS(2339): Property 'selectedParentMenu' does not exist on ty... Remove this comment to see the full error message
                          // eslint-disable-next-line react/destructuring-assignment
                          (this.state.selectedParentMenu === item.id &&
                            // @ts-expect-error TS(2339): Property 'viewingParentMenu' does not exist on typ... Remove this comment to see the full error message
                            // eslint-disable-next-line react/destructuring-assignment
                            this.state.viewingParentMenu === '') ||
                          // @ts-expect-error TS(2339): Property 'viewingParentMenu' does not exist on typ... Remove this comment to see the full error message
                          // eslint-disable-next-line react/destructuring-assignment
                          this.state.viewingParentMenu === item.id,
                      })}
                      data-parent={item.id}
                    >
                      {item.subs &&
                        this.filteredList(item.subs).map((sub: any, index: any) => {
                          return (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <NavItem
                              key={`${item.id}_${index}`}
                              className={`${
                                sub.subs && sub.subs.length > 0
                                  ? 'has-sub-item'
                                  : ''
                              }`}
                            >
                              {/* eslint-disable-next-line no-nested-ternary */}
                              {sub.newWindow ? (
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <a
                                  href={sub.to}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                  <i className={sub.icon} />{' '}
                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                  <IntlMessages id={sub.label} />
                                </a>
                              ) : sub.subs && sub.subs.length > 0 ? (
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <>
                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                  <NavLink
                                    className={`rotate-arrow-icon opacity-50 ${
                                      collapsedMenus.indexOf(
                                        `${item.id}_${index}`
                                      ) === -1
                                        ? ''
                                        : 'collapsed'
                                    }`}
                                    to={sub.to}
                                    id={`${item.id}_${index}`}
                                    onClick={(e) =>
                                      this.toggleMenuCollapse(
                                        e,
                                        `${item.id}_${index}`
                                      )
                                    }
                                  >
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <i className="simple-icon-arrow-down" />{' '}
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <IntlMessages id={sub.label} />
                                  </NavLink>

                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                  <Collapse
                                    isOpen={
                                      collapsedMenus.indexOf(
                                        `${item.id}_${index}`
                                      ) === -1
                                    }
                                  >
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Nav className="third-level-menu">
                                      {this.filteredList(sub.subs).map(
                                        (thirdSub: any, thirdIndex: any) => {
                                          return (
                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            <NavItem
                                              key={`${item.id}_${index}_${thirdIndex}`}
                                            >
                                              {thirdSub.newWindow ? (
                                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                <a
                                                  href={thirdSub.to}
                                                  rel="noopener noreferrer"
                                                  target="_blank"
                                                >
                                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                  <i
                                                    className={thirdSub.icon}
                                                  />{' '}
                                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                  <IntlMessages
                                                    id={thirdSub.label}
                                                  />
                                                </a>
                                              ) : (
                                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                <NavLink to={thirdSub.to}>
                                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                  <i
                                                    className={thirdSub.icon}
                                                  />{' '}
                                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                  <IntlMessages
                                                    id={thirdSub.label}
                                                  />
                                                </NavLink>
                                              )}
                                            </NavItem>
                                          );
                                        }
                                      )}
                                    </Nav>
                                  </Collapse>
                                </>
                              ) : (
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <NavLink to={sub.to}>
                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                  <i className={sub.icon} />{' '}
                                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                  <IntlMessages id={sub.label} />
                                </NavLink>
                              )}
                            </NavItem>
                          );
                        })}
                    </Nav>
                  );
                })}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  menu
}: any) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  } = menu;

  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  };
};
export default withRouter(
  // @ts-expect-error TS(2345): Argument of type 'ConnectedComponent<typeof Sideba... Remove this comment to see the full error message
  connect(mapStateToProps, {
    setContainerClassnames,
    addContainerClassname,
    changeDefaultClassnames,
    changeSelectedMenuHasSubItems,
  })(Sidebar)
);
