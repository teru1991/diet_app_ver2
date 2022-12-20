/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Notification = ({
  title,
  type,
  message,
  customClassName,
  timeOut,
  onClick,
  onRequestHide
}: any) => {
  const requestHide = () => {
    if (onRequestHide) {
      onRequestHide();
    }
  };

  useEffect(() => {
    let timer: any = null;
    if (timeOut !== 0) {
      timer = setTimeout(requestHide, timeOut);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    requestHide();
  };

  const className = classnames([
    'notification',
    `notification-${type}`,
    customClassName,
  ]);
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const titleHtml = title ? <h4 className="title">{title}</h4> : null;
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={className} onClick={() => handleClick()}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="notification-message" role="alert">
        {titleHtml}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'error',
    'primary',
    'secondary',
  ]),
  title: PropTypes.node,
  message: PropTypes.node,
  timeOut: PropTypes.number,
  onClick: PropTypes.func,
  onRequestHide: PropTypes.func,
  customClassName: PropTypes.string,
};

Notification.defaultProps = {
  type: 'info',
  title: null,
  message: null,
  timeOut: 5000,
  onClick: () => {},
  onRequestHide: () => {},
  customClassName: '',
};

export default Notification;
