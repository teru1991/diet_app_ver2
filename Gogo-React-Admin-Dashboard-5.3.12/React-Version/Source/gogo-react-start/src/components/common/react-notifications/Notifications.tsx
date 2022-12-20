/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
// @ts-expect-error TS(6142): Module './Notification' was resolved to '/Users/it... Remove this comment to see the full error message
import Notification from './Notification';

class Notifications extends React.Component {
  handleRequestHide = (notification: any) => () => {
    // @ts-expect-error TS(2339): Property 'onRequestHide' does not exist on type 'R... Remove this comment to see the full error message
    const { onRequestHide } = this.props;
    if (onRequestHide) {
      onRequestHide(notification);
    }
  };

  render() {
    // @ts-expect-error TS(2339): Property 'notifications' does not exist on type 'R... Remove this comment to see the full error message
    const { notifications, enterTimeout, leaveTimeout } = this.props;
    const className = classnames('notification-container', {
      'notification-container-empty': notifications.length === 0,
    });
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className={className}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TransitionGroup>
          {notifications.map((notification: any) => {
            const key = notification.id || new Date().getTime();
            return (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CSSTransition
                classNames="notification"
                key={key}
                timeout={{ exit: leaveTimeout, enter: enterTimeout }}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Notification
                  key={key}
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  timeOut={notification.timeOut}
                  onClick={notification.onClick}
                  onRequestHide={this.handleRequestHide(notification)}
                  customClassName={notification.customClassName}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}
// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Notifications.propTypes = {
  notifications: PropTypes.array,
  onRequestHide: PropTypes.func,
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number,
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Notifications.defaultProps = {
  notifications: [],
  onRequestHide: () => {},
  enterTimeout: 400,
  leaveTimeout: 400,
};
export default Notifications;
