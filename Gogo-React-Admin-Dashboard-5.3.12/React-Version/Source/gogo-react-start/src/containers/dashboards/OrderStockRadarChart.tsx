import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/charts' or its corr... Remove this comment to see the full error message
import { RadarChart } from 'components/charts';

import { radarChartData } from '../../data/charts';

const OrderStockRadarChart = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="h-100">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.order-stock" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="chart-container">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <RadarChart shadow data={radarChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderStockRadarChart;
