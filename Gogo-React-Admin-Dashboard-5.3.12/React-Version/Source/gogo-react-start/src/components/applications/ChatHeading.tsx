import React from 'react';

const ChatHeading = ({
  name,
  thumb,
  lastSeenDate
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex flex-row chat-heading">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img
            alt={name}
            src={thumb}
            className="img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small"
          />
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className=" d-flex min-width-zero">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="min-width-zero">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <p className="list-item-heading mb-1 truncate ">{name}</p>
              </div>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <p className="mb-0 text-muted text-small">
                {lastSeenDate === '0' ? '-' : lastSeenDate}
              </p>
            </div>
          </div>
        </div>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="separator mb-5" />
    </>
  );
};

export default React.memo(ChatHeading);
