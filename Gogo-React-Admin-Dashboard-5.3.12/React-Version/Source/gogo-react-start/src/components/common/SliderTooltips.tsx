/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const sliderHandle = ({
  value,
  dragging,
  index,
  offset,
  ...restProps
}: any) => {
  const positionStyle = {
    position: 'absolute',
    left: `${offset}%`,
  };
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span key={index}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="rc-slider-tooltip" style={positionStyle}>
        {`$${value}`}
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Slider.Handle value={value} offset={offset} {...restProps} />
    </span>
  );
};

const SliderTooltip = (props: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Slider handle={props.handle || sliderHandle} {...props} />;
};

const RangeTooltip = (props: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Range handle={props.handle || sliderHandle} {...props} />;
};
export { SliderTooltip, RangeTooltip };
