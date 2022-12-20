import React from 'react';
import PropTypes from 'prop-types';
import NotificationManager from './NotificationManager';
// @ts-expect-error TS(6142): Module './Notifications' was resolved to '/Users/i... Remove this comment to see the full error message
import Notifications from './Notifications';

class NotificationContainer extends React.Component {
  constructor(props: any) {
    super(props);
    NotificationManager.addChangeListener(this.handleStoreChange);
    this.state = {
      notifications: [],
    };
  }

  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  handleStoreChange = (notifications: any) => {
    this.setState({
      notifications,
    });
  };

  handleRequestHide = (notification: any) => {
    NotificationManager.remove(notification);
  };

  render() {
    // @ts-expect-error TS(2339): Property 'notifications' does not exist on type 'R... Remove this comment to see the full error message
    const { notifications } = this.state;
    // @ts-expect-error TS(2339): Property 'enterTimeout' does not exist on type 'Re... Remove this comment to see the full error message
    const { enterTimeout, leaveTimeout } = this.props;
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Notifications
        // @ts-expect-error TS(2769): No overload matches this call.
        enterTimeout={enterTimeout}
        leaveTimeout={leaveTimeout}
        notifications={notifications}
        onRequestHide={this.handleRequestHide}
      />
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
NotificationContainer.propTypes = {
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number,
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
NotificationContainer.defaultProps = {
  enterTimeout: 400,
  leaveTimeout: 400,
};

export default NotificationContainer;
