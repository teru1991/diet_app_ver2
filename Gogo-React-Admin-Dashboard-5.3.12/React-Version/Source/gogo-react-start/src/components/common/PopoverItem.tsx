import React, { useState } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

const PopoverItem = ({
  id,
  item
}: any) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button
        className="mr-1 mb-2"
        color="secondary"
        id={`popover_${id}`}
        onClick={() => setPopoverOpen(true)}
      >
        {item.text}
      </Button>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={`popover_${id}`}
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PopoverBody>{item.body}</PopoverBody>
      </Popover>
    </span>
  );
};
export default PopoverItem;
