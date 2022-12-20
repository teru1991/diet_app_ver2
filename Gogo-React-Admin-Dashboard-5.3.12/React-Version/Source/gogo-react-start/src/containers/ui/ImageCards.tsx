import React from 'react';
import {
  CardText,
  CardSubtitle,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Badge,
} from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const ImageCards = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="cards.image-card" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="12" xs="6" lg="4">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="position-relative">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardImg
                  top
                  src="/assets/img/cards/thumb-1.jpg"
                  alt="Card image cap"
                />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Badge
                  color="primary"
                  pill
                  className="position-absolute badge-top-left"
                >
                  NEW
                </Badge>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Badge
                  color="secondary"
                  pill
                  className="position-absolute badge-top-left-2"
                >
                  TRENDING
                </Badge>
              </div>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardBody>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardSubtitle className="mb-4">
                  Homemade Cheesecake with Fresh Berries and Mint
                </CardSubtitle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  09.04.2018
                </CardText>
              </CardBody>
            </Card>
          </Colxx>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="12" xs="6" lg="4">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardBody>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardSubtitle className="mb-4">
                  Homemade Cheesecake with Fresh Berries and Mint
                </CardSubtitle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  09.04.2018
                </CardText>
              </CardBody>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="position-relative">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardImg
                  bottom
                  src="/assets/img/cards/thumb-1.jpg"
                  alt="Card image cap"
                />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Badge
                  color="primary"
                  pill
                  className="position-absolute badge-top-left"
                >
                  NEW
                </Badge>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Badge
                  color="secondary"
                  pill
                  className="position-absolute badge-top-left-2"
                >
                  TRENDING
                </Badge>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default ImageCards;
