import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// @ts-expect-error TS(2307): Cannot find module 'components/CalendarToolbar' or... Remove this comment to see the full error message
import CalendarToolbar from 'components/CalendarToolbar';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
import data from '../../data/events';

// @ts-expect-error TS(2307): Cannot find module 'helpers/Utils' or its correspo... Remove this comment to see the full error message
import { getDirection } from 'helpers/Utils';

const localizer = momentLocalizer(moment);

const CalendarCard = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.calendar" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Calendar
          localizer={localizer}
          style={{ minHeight: '500px' }}
          events={data}
          rtl={getDirection().isRtl}
          views={['month']}
          components={{
            toolbar: CalendarToolbar,
          }}
        />
      </CardBody>
    </Card>
  );
};
export default CalendarCard;
