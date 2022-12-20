import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/cards/RadialProgres... Remove this comment to see the full error message
import RadialProgressCard from 'components/cards/RadialProgressCard';

const SortableStaticticsRow = ({
  messages
}: any) => {
  const [state, setState] = useState([
    {
      key: 1,
      title: 'dashboards.payment-status',
      percent: 64,
    },
    {
      key: 2,
      title: 'dashboards.work-progress',
      percent: 75,
    },
    {
      key: 3,
      title: 'dashboards.tasks-completed',
      percent: 32,
    },
    {
      key: 4,
      title: 'dashboards.payments-done',
      percent: 45,
    },
  ]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ReactSortable
      // @ts-expect-error TS(2322): Type '{ key: number; title: string; percent: numbe... Remove this comment to see the full error message
      list={state}
      // @ts-expect-error TS(2322): Type 'Dispatch<SetStateAction<{ key: number; title... Remove this comment to see the full error message
      setList={setState}
      options={{ handle: '.handle' }}
      className="row"
    >
      {state.map((x) => {
        return (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xl="3" lg="6" className="mb-4" key={x.key}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <RadialProgressCard
              title={messages[x.title]}
              percent={x.percent}
              isSortable
            />
          </Colxx>
        );
      })}
    </ReactSortable>
  );
};
export default SortableStaticticsRow;
