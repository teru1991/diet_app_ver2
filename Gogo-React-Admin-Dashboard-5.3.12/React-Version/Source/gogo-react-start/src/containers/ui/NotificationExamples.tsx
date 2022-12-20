/* eslint-disable no-alert */
import React from 'react';
import { Card, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/react-notifi... Remove this comment to see the full error message
import { NotificationManager } from 'components/common/react-notifications';

const NotificationExamples = () => {
  const createNotification = (type: any, className: any) => {
    const cName = className || '';
    switch (type) {
      case 'primary':
        NotificationManager.primary(
          'This is a notification!',
          'Primary Notification',
          3000,
          null,
          null,
          cName
        );
        break;
      case 'secondary':
        NotificationManager.secondary(
          'This is a notification!',
          'Secondary Notification',
          3000,
          null,
          null,
          cName
        );
        break;
      case 'info':
        NotificationManager.info('Info message', '', 3000, null, null, cName);
        break;
      case 'success':
        NotificationManager.success(
          'Success message',
          'Title here',
          3000,
          null,
          null,
          cName
        );
        break;
      case 'warning':
        NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000,
          null,
          null,
          cName
        );
        break;
      case 'error':
        NotificationManager.error(
          'Error message',
          'Click me!',
          5000,
          () => {
            alert('callback');
          },
          null,
          cName
        );
        break;
      default:
        NotificationManager.info('Info message');
        break;
    }
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.react-notifications" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardSubtitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.outline" />
        </CardSubtitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          outline
          className="mb-3"
          color="primary"
          // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
          onClick={() => createNotification('primary')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.primary" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          outline
          className="mb-3"
          color="secondary"
          // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
          onClick={() => createNotification('secondary')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.secondary" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          outline
          className="mb-3"
          color="info"
          // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
          onClick={() => createNotification('info')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.info" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          outline
          className="mb-3"
          color="success"
          // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
          onClick={() => createNotification('success')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.success" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          outline
          className="mb-3"
          color="warning"
          // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
          onClick={() => createNotification('warning')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.warning" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          outline
          className="mb-3"
          color="danger"
          // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
          onClick={() => createNotification('error')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.error" />
        </Button>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardSubtitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.filled" />
        </CardSubtitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="mb-3"
          color="primary"
          onClick={() => createNotification('primary', 'filled')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.primary" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="mb-3"
          color="secondary"
          onClick={() => createNotification('secondary', 'filled')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.secondary" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="mb-3"
          color="info"
          onClick={() => createNotification('info', 'filled')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.info" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="mb-3"
          color="success"
          onClick={() => createNotification('success', 'filled')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.success" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="mb-3"
          color="warning"
          onClick={() => createNotification('warning', 'filled')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.warning" />
        </Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="mb-3"
          color="danger"
          onClick={() => createNotification('error', 'filled')}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="alert.error" />
        </Button>
      </CardBody>
    </Card>
  );
};

export default NotificationExamples;
