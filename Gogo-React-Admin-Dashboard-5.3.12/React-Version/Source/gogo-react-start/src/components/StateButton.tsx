import React, { useState } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';
import classnames from 'classnames';

const StateButton = ({
  id,
  className,
  color,
  children,
  onClick
}: any) => {
  const [status, setStatus] = useState('default');
  const [message, setMessage] = useState('');
  const [messageShow, setMessageShow] = useState(false);

  const handleOnClick = () => {
    setStatus('processing');

    onClick()
      .then((res: any) => {
        setMessage(res);
        setStatus('success');
      })
      .catch((err: any) => {
        setMessage(err);
        setStatus('fail');
      })
      .finally(() => {
        setMessageShow(true);
        setTimeout(() => {
          setStatus('default');
          setMessageShow(false);
        }, 3000);
      });
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button
        id={id}
        className={`btn-multiple-state  ${className}  ${classnames({
          'show-spinner': status === 'processing',
          'show-success': status === 'success',
          'show-fail': status === 'fail',
        })}`}
        color={color}
        onClick={handleOnClick}
        disabled={status !== 'default'}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Popover placement="top" isOpen={messageShow} target={id}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PopoverBody>{message}</PopoverBody>
        </Popover>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="spinner d-inline-block">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="bounce1" />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="bounce2" />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="bounce3" />
        </span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="icon success">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-check" />
        </span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="icon fail">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-exclamation" />
        </span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="label">{children}</span>
      </Button>
    </span>
  );
};

export default StateButton;
