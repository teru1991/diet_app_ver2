import React, { useState } from 'react';
import { Button, Tooltip } from 'reactstrap';

const TooltipItem = ({
  id,
  item
}: any) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button className="mr-1 mb-2" color="secondary" id={`tooltip_${id}`}>
        {item.text}
      </Button>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tooltip
        placement={item.placement}
        isOpen={tooltipOpen}
        target={`tooltip_${id}`}
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        {item.body}
      </Tooltip>
    </span>
  );
};
export default TooltipItem;
