import React from 'react';
import { Card, CardBody, Badge, CustomInput } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// @ts-expect-error TS(6142): Module '../common/CustomBootstrap' was resolved to... Remove this comment to see the full error message
import { Colxx } from '../common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';

const SurveyListItem = ({
  item,
  handleCheckChange,
  isSelected
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="card d-flex flex-row mb-3">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex flex-grow-1 min-width-zero">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink
              to={`${adminRoot}/applications/survey/${item.id}`}
              className="list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i
                className={`${
                  item.status === 'COMPLETED'
                    ? 'simple-icon-check heading-icon'
                    : 'simple-icon-refresh heading-icon'
                }`}
              />
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span className="align-middle d-inline-block">{item.title}</span>
            </NavLink>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.category}
            </p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.createDate}
            </p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="w-15 w-xs-100">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Badge color={item.labelColor} pill>
                {item.label}
              </Badge>
            </div>
          </CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="custom-control custom-checkbox pl-1 align-self-center mr-4">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              className="itemCheck mb-0"
              type="checkbox"
              id={`check_${item.id}`}
              checked={isSelected}
              onChange={(event) => handleCheckChange(event, item.id)}
              label=""
            />
          </div>
        </div>
      </Card>
    </Colxx>
  );
};

export default React.memo(SurveyListItem);
