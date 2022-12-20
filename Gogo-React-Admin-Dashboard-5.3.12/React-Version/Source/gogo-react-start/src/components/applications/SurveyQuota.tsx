/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Progress } from 'reactstrap';

const SurveyQuota = ({
  title = 'Gender',
  data = [
    { title: 'Male', count: 105, quota: 125 },
    { title: 'Female', count: 90, quota: 125 },
  ],
}) => {
  const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue;
  const totalCount = data.map((x) => x.count).reduce(reducer);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p className="mb-2">{title}</p>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Progress multi className="mb-3">
        {data.map((item, index) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Progress
              key={`survey_progress_${index}`}
              bar
              color={`theme-${index + 1}`}
              value={(item.count / totalCount) * 100}
            />
          );
        })}
      </Progress>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <table className="table table-sm table-borderless">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <tbody>
          {data.map((item, index) => {
            return (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <tr key={`survey_data_${index}`}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <td className="p-0 pb-1 w-10">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <span
                    className={`log-indicator border-theme-${
                      index + 1
                    } align-middle`}
                  />
                </td>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <td className="p-0 pb-1">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <span className="font-weight-medium text-muted text-small">{`${item.count}/${item.quota} ${item.title}`}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(SurveyQuota);
