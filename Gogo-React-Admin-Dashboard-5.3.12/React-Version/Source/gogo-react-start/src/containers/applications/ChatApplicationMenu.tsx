/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Nav, TabContent, TabPane, CardHeader, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classnames from 'classnames';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/ApplicationM... Remove this comment to see the full error message
import ApplicationMenu from 'components/common/ApplicationMenu';

import {
  changeConversation,
  createConversation,
  searchContact,
// @ts-expect-error TS(2307): Cannot find module 'redux/actions' or its correspo... Remove this comment to see the full error message
} from 'redux/actions';

const ChatApplicationMenu = ({
  intl,
  activeTab,
  toggleAppMenu,
  contacts,
  allContacts,
  conversations,
  loadingConversations,
  loadingContacts,
  currentUser,
  changeConversationAction,
  createConversationAction,
  searchContactAction
}: any) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchContact = (keyword: any) => {
    setSearchKey(keyword);

    if (keyword.length > 0) {
      if (activeTab !== 'contacts') {
        toggleAppMenu('contacts');
      }
      searchContactAction(keyword);
    } else {
      searchContactAction('');
    }
  };

  const toggleMenu = (tab: any) => {
    if (activeTab !== tab) {
      toggleAppMenu(tab);
    }
    if (tab === 'messages') {
      handleSearchContact('');
    }
  };

  const handleConversationClick = (e: any, selectedUserId: any) => {
    changeConversationAction(selectedUserId);
    handleSearchContact('');
  };

  const handleContactClick = (userId: any) => {
    if (activeTab !== 'messages') {
      toggleAppMenu('messages');
      searchContactAction('');
    }

    const conversation = conversations.find(
      (x: any) => x.users.includes(currentUser.id) && x.users.includes(userId)
    );
    if (conversation) {
      changeConversationAction(userId);
    } else {
      createConversationAction(currentUser.id, userId, conversations);
      changeConversationAction(userId);
    }
  };

  const { messages } = intl;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ApplicationMenu>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardHeader className="pl-0 pr-0">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Nav tabs className="card-header-tabs ml-0 mr-0">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavItem className="w-50 text-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink
              to="#"
              // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
              location={{}}
              className={classnames({
                active: activeTab === 'messages',
                'nav-link': true,
              })}
              onClick={() => toggleMenu('messages')}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="chat.messages" />
            </NavLink>
          </NavItem>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavItem className="w-50 text-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink
              to="#"
              // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
              location={{}}
              className={classnames({
                active: activeTab === 'contacts',
                'nav-link': true,
              })}
              onClick={() => toggleAppMenu('contacts')}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="chat.contacts" />
            </NavLink>
          </NavItem>
        </Nav>
      </CardHeader>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="pt-4 pr-4 pl-4 pb-0">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="form-group">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            type="text"
            className="form-control rounded"
            placeholder={messages['menu.search']}
            value={searchKey}
            onChange={(e) => handleSearchContact(e.target.value)}
          />
        </div>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabContent activeTab={activeTab} className="chat-app-tab-content">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPane tabId="messages" className="chat-app-tab-pane">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="pt-2 pr-4 pl-4 pb-2">
              {loadingContacts &&
                loadingConversations &&
                conversations.map((item: any, index: any) => {
                  const otherUser = allContacts.find(
                    (u: any) => u.id === item.users.find((x: any) => x !== currentUser.id)
                  );
                  return (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div
                      key={index}
                      className="d-flex flex-row mb-1 border-bottom pb-3 mb-3"
                    >
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <NavLink
                        className="d-flex"
                        to="#"
                        // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                        location={{}}
                        onClick={(e) =>
                          handleConversationClick(e, otherUser.id)
                        }
                      >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <img
                          alt={otherUser.name}
                          src={otherUser.thumb}
                          className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                        />
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="d-flex flex-grow-1 min-width-zero">
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <div className="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="min-width-zero">
                              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                              <p className=" mb-0 truncate">{otherUser.name}</p>
                              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                              <p className="mb-1 text-muted text-small">
                                {item.lastMessageTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </PerfectScrollbar>
        </TabPane>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPane tabId="contacts" className="chat-app-tab-pane">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="pt-2 pr-4 pl-4 pb-2">
              {loadingContacts &&
                contacts
                  .filter((x: any) => x.id !== currentUser.id)
                  .map((item: any, index: any) => {
                    return (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div
                        key={index}
                        className="d-flex flex-row mb-3 border-bottom pb-3"
                      >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <NavLink
                          className="d-flex"
                          to="#"
                          // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                          location={{}}
                          onClick={() => handleContactClick(item.id)}
                        >
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <img
                            alt={item.name}
                            src={item.thumb}
                            className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                          />
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <div className="d-flex flex-grow-1 min-width-zero">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                              <div className="min-width-zero">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <p className="mb-0 truncate">{item.name}</p>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
            </div>
          </PerfectScrollbar>
        </TabPane>
      </TabContent>
    </ApplicationMenu>
  );
};

const mapStateToProps = ({
  chatApp
}: any) => {
  const {
    contacts,
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
  } = chatApp;
  return {
    contacts,
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    changeConversationAction: changeConversation,
    createConversationAction: createConversation,
    searchContactAction: searchContact,
  })(ChatApplicationMenu)
);
