import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/charts' or its corr... Remove this comment to see the full error message
import { PolarAreaChart } from 'components/charts';

import { polarAreaChartData } from '../../data/charts';

const ProductCategoriesPolarArea = ({ chartClass = 'chart-container' }) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.product-categories" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={chartClass}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PolarAreaChart shadow data={polarAreaChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCategoriesPolarArea;
