/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import moment from 'moment';

const CalendarToolbar = (toolbar: any) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };
  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };
  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{date.format('MMMM')} </span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span> {date.format('YYYY')}</span>
      </span>
    );
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="big-calendar-header">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="float-left">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label>{label()}</label>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="float-right">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button
            type="button"
            className="btn btn-primary calendar-today-btn mr-2"
            onClick={goToCurrent}
          >
            Today
          </button>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button
            type="button"
            className="btn calendar-prev-btn mr-1"
            onClick={goToBack}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="simple-icon-arrow-left" />
          </button>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button
            type="button"
            className="btn calendar-next-btn"
            onClick={goToNext}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="simple-icon-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CalendarToolbar;
