/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef, useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'char... Remove this comment to see the full error message
import { Chart } from 'chart.js';

import { scatterChartOptions } from './config';

const Scatter = ({
  data,
  shadow = false
}: any) => {
  const chartContainer = useRef(null);
  const [, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (shadow) {
        Chart.defaults.scatterWithShadow = Chart.defaults.scatter;
        Chart.controllers.scatterWithShadow = Chart.controllers.scatter.extend({
          draw(ease: any) {
            Chart.controllers.scatter.prototype.draw.call(this, ease);
            const {
              chart: { ctx },
            } = this;
            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.2)';
            ctx.shadowBlur = 7;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 7;
            ctx.responsive = true;
            Chart.controllers.scatter.prototype.draw.apply(this, arguments);
            ctx.restore();
          },
        });
      }
      // @ts-expect-error TS(2339): Property 'getContext' does not exist on type 'neve... Remove this comment to see the full error message
      const context = chartContainer.current.getContext('2d');
      const newChartInstance = new Chart(context, {
        type: shadow ? 'scatterWithShadow' : 'scatter',
        options: scatterChartOptions,
        data,
      });
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, data, shadow]);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <canvas ref={chartContainer} />;
};

export default Scatter;
