/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { WithWizard } from 'react-albus';
import { Button } from 'reactstrap';

const BottomNavigation = ({
  className,
  onClickPrev,
  prevLabel,
  onClickNext,
  nextLabel
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <WithWizard
      render={({
        next,
        previous,
        step,
        steps
      }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={`wizard-buttons ${className}`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            color="primary"
            className={`mr-1 ${steps.indexOf(step) <= 0 ? 'disabled' : ''}`}
            onClick={() => {
              onClickPrev(previous, steps, step);
            }}
          >
            {prevLabel}
          </Button>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            color="primary"
            className={
              steps.indexOf(step) >= steps.length - 1 ? 'disabled' : ''
            }
            onClick={() => {
              onClickNext(next, steps, step);
            }}
          >
            {nextLabel}
          </Button>
        </div>
      )}
    />
  );
};
export default BottomNavigation;
