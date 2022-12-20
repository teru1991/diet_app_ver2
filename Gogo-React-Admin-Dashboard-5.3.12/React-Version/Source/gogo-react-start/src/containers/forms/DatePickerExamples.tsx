/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const DatePickerExamples = ({
  intl
}: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(new Date());
  const [embeddedDate, setEmbeddedDate] = useState(new Date());
  const { messages } = intl;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12" xl="8" className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CardTitle>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.date-picker" />
            </CardTitle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.date" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="mb-5">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                placeholderText={messages['forms.date']}
              />
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.date-range" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mb-5">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Colxx xxs="6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DatePicker
                  selected={startDateRange}
                  selectsStart
                  startDate={startDateRange}
                  endDate={endDateRange}
                  onChange={setStartDateRange}
                  placeholderText={messages['form-components.start']}
                />
              </Colxx>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Colxx xxs="6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DatePicker
                  selected={endDateRange}
                  selectsEnd
                  startDate={startDateRange}
                  endDate={endDateRange}
                  onChange={setEndDateRange}
                  placeholderText={messages['form-components.end']}
                />
              </Colxx>
            </Row>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mb-5">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Colxx xxs="12">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <label>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <IntlMessages id="form-components.date-with-time" />
                </label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DatePicker
                  selected={startDateTime}
                  onChange={setStartDateTime}
                  placeholderText={messages['forms.date']}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="LLL"
                  timeCaption="Time"
                />
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </Colxx>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12" xl="4" className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card className="h-100">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CardTitle>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.embedded" />
            </CardTitle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DatePicker
              calendarClassName="embedded"
              inline
              selected={embeddedDate}
              onChange={setEmbeddedDate}
            />
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};
export default injectIntl(DatePickerExamples);
