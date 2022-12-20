import React from 'react';
import { Input, Button } from 'reactstrap';

const SaySomething = ({
  placeholder,
  messageInput,
  handleChatInputPress,
  handleChatInputChange,
  handleSendButtonClick
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="chat-input-container d-flex justify-content-between align-items-center">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Input
        className="form-control flex-grow-1"
        type="text"
        placeholder={placeholder}
        value={messageInput}
        onKeyPress={(e) => handleChatInputPress(e)}
        onChange={(e) => handleChatInputChange(e)}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button outline color="primary" className="icon-button large ml-1">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-paper-clip" />
        </Button>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          color="primary"
          className="icon-button large ml-1"
          onClick={() => handleSendButtonClick()}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-arrow-right" />
        </Button>
      </div>
    </div>
  );
};
export default React.memo(SaySomething);
