import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/cards/ThumbnailImag... Remove this comment to see the full error message
import ThumbnailImage from 'components/cards/ThumbnailImage';
// @ts-expect-error TS(2307): Cannot find module 'components/cards/ThumbnailLett... Remove this comment to see the full error message
import ThumbnailLetters from 'components/cards/ThumbnailLetters';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';

const UserCardExamples = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="cards.user-card" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx md="6" sm="6" lg="4" xxs="12">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardBody>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="text-center">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <CardImg
                    top
                    src="/assets/img/profiles/l-1.jpg"
                    alt="Card image cap"
                    className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                  />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink to={`${adminRoot}/cards`}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CardSubtitle className="mb-1">Sarah Kortney</CardSubtitle>
                  </NavLink>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <CardText className="text-muted text-small mb-4">
                    Executive Director
                  </CardText>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Button outline size="sm" color="primary">
                    Edit
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx md="6" sm="6" lg="4" xxs="12">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="d-flex flex-row mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to={`${adminRoot}/cards`} className="d-flex">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ThumbnailImage
                  rounded
                  src="/assets/img/profiles/l-1.jpg"
                  alt="Card image cap"
                  className="m-4"
                />
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className=" d-flex flex-grow-1 min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="min-width-zero">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={`${adminRoot}/cards`}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Button outline size="xs" color="primary">
                      Edit
                    </Button>
                  </div>
                </CardBody>
              </div>
            </Card>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="d-flex flex-row mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to={`${adminRoot}/cards`} className="d-flex">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ThumbnailLetters
                  rounded
                  text="Sarah Kortney"
                  className="m-4"
                />
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className=" d-flex flex-grow-1 min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="min-width-zero">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={`${adminRoot}/cards`}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Button outline size="xs" color="primary">
                      Edit
                    </Button>
                  </div>
                </CardBody>
              </div>
            </Card>
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx md="6" sm="6" lg="4" xxs="12">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="d-flex flex-row mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to={`${adminRoot}/cards`} className="d-flex">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ThumbnailImage
                  rounded
                  small
                  src="/assets/img/profiles/l-1.jpg"
                  alt="profile"
                  className="m-4"
                />
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className=" d-flex flex-grow-1 min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="min-width-zero">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={`${adminRoot}/cards`}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                  </div>
                </CardBody>
              </div>
            </Card>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="d-flex flex-row mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to={`${adminRoot}/cards`} className="d-flex">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ThumbnailLetters
                  rounded
                  small
                  text="Sarah Kortney"
                  className="m-4"
                />
              </NavLink>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className=" d-flex flex-grow-1 min-width-zero">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="min-width-zero">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={`${adminRoot}/cards`}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                  </div>
                </CardBody>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default UserCardExamples;
