import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/ThemeColors' or its co... Remove this comment to see the full error message
import { ThemeColors } from 'helpers/ThemeColors';
// @ts-expect-error TS(2307): Cannot find module 'components/charts' or its corr... Remove this comment to see the full error message
import { DoughnutChart } from 'components/charts';

const colors = ThemeColors();

const ageChartData = {
  labels: ['12-24', '24-30', '30-40', '40-50', '50-60'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
        colors.themeColor5,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20, 30, 14],
    },
  ],
};
const genderChartData = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
      borderWidth: 2,
      data: [85, 45, 20],
    },
  ],
};
const workChartData = {
  labels: [
    'Employed for wages',
    'Self-employed',
    'Looking for work',
    'Retired',
  ],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20, 8],
    },
  ],
};
const codingChartData = {
  labels: ['Python', 'JavaScript', 'PHP', 'Java', 'C#'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
        colors.themeColor5,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20, 8, 25],
    },
  ],
};

const SurveyCharts = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" lg="8">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardTitle>How old are you?</CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="chart-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DoughnutChart shadow data={ageChartData} />
          </div>
        </CardBody>
      </Card>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardTitle>What is your gender?</CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="chart-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DoughnutChart shadow data={genderChartData} />
          </div>
        </CardBody>
      </Card>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardTitle>What is your employment status?</CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="chart-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DoughnutChart shadow data={workChartData} />
          </div>
        </CardBody>
      </Card>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardTitle>What programming languages do you use?</CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="chart-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DoughnutChart shadow data={codingChartData} />
          </div>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default SurveyCharts;
