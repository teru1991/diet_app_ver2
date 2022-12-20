import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const DataListView = ({
  product,
  isSelect,
  collect,
  onCheckItem
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" className="mb-3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
          onClick={(event) => onCheckItem(event, product.id)}
          className={classnames('d-flex flex-row', {
            active: isSelect,
          })}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <p className="list-item-heading mb-1 truncate">
                  {product.title}
                </p>
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.category}
              </p>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.date}
              </p>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="w-15 w-sm-100">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Badge color={product.statusColor} pill>
                  {product.status}
                </Badge>
              </div>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${product.id}`}
                checked={isSelect}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);
