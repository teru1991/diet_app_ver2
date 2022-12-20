import React from 'react';
import {
  Row,
  Card,
  CustomInput,
  CardTitle,
  FormGroup,
  Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const ImageCardList = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="cards.image-card-list" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="12">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="d-flex flex-row mb-3">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to="#" location={{}} className="d-flex">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img
                  alt="Thumbnail"
                  src="/assets/img/products/chocolate-cake-thumb.jpg"
                  className="list-thumbnail responsive border-0 card-img-left"
                />
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink to="#" location={{}} className="w-40 w-sm-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="list-item-heading mb-1 truncate">
                      Chocolate Cake
                    </p>
                  </NavLink>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    Cakes
                  </p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    09.04.2018
                  </p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="w-15 w-sm-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Badge color="primary" pill>
                      PROCESSED
                    </Badge>
                  </div>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="mb-0">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CustomInput type="checkbox" id="check1" label="" />
                  </FormGroup>
                </div>
              </div>
            </Card>
          </Colxx>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="12">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="d-flex flex-row mb-3">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to="#" location={{}} className="d-flex">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img
                  alt="Thumbnail"
                  src="/assets/img/products/cheesecake-thumb.jpg"
                  className="list-thumbnail responsive border-0 card-img-left"
                />
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink to="#" location={{}} className="w-40 w-sm-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="list-item-heading mb-1 truncate">
                      Cheesecake
                    </p>
                  </NavLink>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    Cupcakes
                  </p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    09.04.2018
                  </p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="w-15 w-sm-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Badge color="secondary" pill>
                      ON HOLD
                    </Badge>
                  </div>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="mb-0">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CustomInput type="checkbox" id="check2" label="" />
                  </FormGroup>
                </div>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default ImageCardList;
