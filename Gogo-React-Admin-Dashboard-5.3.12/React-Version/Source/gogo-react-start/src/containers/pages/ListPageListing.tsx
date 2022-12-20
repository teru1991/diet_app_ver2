import React from 'react';
import { Row } from 'reactstrap';
// @ts-expect-error TS(6142): Module './Pagination' was resolved to '/Users/itah... Remove this comment to see the full error message
import Pagination from './Pagination';
// @ts-expect-error TS(6142): Module './ContextMenuContainer' was resolved to '/... Remove this comment to see the full error message
import ContextMenuContainer from './ContextMenuContainer';
// @ts-expect-error TS(6142): Module './DataListView' was resolved to '/Users/it... Remove this comment to see the full error message
import DataListView from './DataListView';
// @ts-expect-error TS(6142): Module './ImageListView' was resolved to '/Users/i... Remove this comment to see the full error message
import ImageListView from './ImageListView';
// @ts-expect-error TS(6142): Module './ThumbListView' was resolved to '/Users/i... Remove this comment to see the full error message
import ThumbListView from './ThumbListView';

function collect(props: any) {
  return { data: props.data };
}

const ListPageListing = ({
  items,
  displayMode,
  selectedItems,
  onCheckItem,
  currentPage,
  totalPage,
  onContextMenuClick,
  onContextMenu,
  onChangePage
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      {items.map((product: any) => {
        if (displayMode === 'imagelist') {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ImageListView
              key={product.id}
              product={product}
              isSelect={selectedItems.includes(product.id)}
              collect={collect}
              onCheckItem={onCheckItem}
            />
          );
        }
        if (displayMode === 'thumblist') {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ThumbListView
              key={product.id}
              product={product}
              isSelect={selectedItems.includes(product.id)}
              collect={collect}
              onCheckItem={onCheckItem}
            />
          );
        }
        return (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <DataListView
            key={product.id}
            product={product}
            isSelect={selectedItems.includes(product.id)}
            onCheckItem={onCheckItem}
            collect={collect}
          />
        );
      })}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(i: any) => onChangePage(i)}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContextMenuContainer
        onContextMenuClick={onContextMenuClick}
        onContextMenu={onContextMenu}
      />
    </Row>
  );
};

export default React.memo(ListPageListing);
