import React from 'react';
import { Button, UncontrolledCollapse } from 'reactstrap';

const QuestionAnswer = ({
  data
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button className="p-0 pb-2 font-weight-bold" color="link" id={data.key}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className="mb-2">{data.question}</p>
      </Button>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UncontrolledCollapse toggler={`#${data.key}`}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="pb-4">{data.answer}</div>
      </UncontrolledCollapse>
    </div>
  );
};
export default QuestionAnswer;
