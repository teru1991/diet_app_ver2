/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef, useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'char... Remove this comment to see the full error message
import { Chart } from 'chart.js';

import { centerTextPlugin } from './util';
import { doughnutChartOptions } from './config';

const Doughnut = ({
  data,
  shadow = false
}: any) => {
  const chartContainer = useRef(null);
  const [, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (shadow) {
        Chart.defaults.doughnutWithShadow = Chart.defaults.doughnut;
        Chart.controllers.doughnutWithShadow = Chart.controllers.doughnut.extend(
          {
            draw(ease: any) {
              Chart.controllers.doughnut.prototype.draw.call(this, ease);
              const {
                chart: { ctx },
              } = this;
              ctx.save();
              ctx.shadowColor = 'rgba(0,0,0,0.15)';
              ctx.shadowBlur = 10;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 10;
              ctx.responsive = true;
              Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
              ctx.restore();
            },
          }
        );
      }
      // @ts-expect-error TS(2339): Property 'getContext' does not exist on type 'neve... Remove this comment to see the full error message
      const context = chartContainer.current.getContext('2d');
      const newChartInstance = new Chart(context, {
        type: shadow ? 'doughnutWithShadow' : 'doughnut',
        options: doughnutChartOptions,
        plugins: [centerTextPlugin],
        data,
      });
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, data, shadow]);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <canvas ref={chartContainer} />;
};

export default Doughnut;
