import React from 'react';
import { Card, CardBody } from 'reactstrap';

const MessageCard = ({
  sender,
  item,
  currentUserid
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card
        className={`d-inline-block mb-3 float-${
          item.sender !== currentUserid ? 'left' : 'right'
        }`}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="position-absolute  pt-1 pr-2 r-0">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="text-extra-small text-muted">{item.time}</span>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="d-flex flex-row pb-1">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img
              alt={sender.name}
              src={sender.thumb}
              className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className=" d-flex flex-grow-1 min-width-zero">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="min-width-zero">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-0 truncate list-item-heading">
                    {sender.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="chat-text-left">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="mb-0 text-semi-muted">{item.text}</p>
          </div>
        </CardBody>
      </Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="clearfix" />
    </>
  );
};

export default React.memo(MessageCard);
