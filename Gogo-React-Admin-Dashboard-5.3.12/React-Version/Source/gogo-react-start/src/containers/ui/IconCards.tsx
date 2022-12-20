/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, CardTitle } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/cards/IconCard' or ... Remove this comment to see the full error message
import IconCard from 'components/cards/IconCard';

import data from '../../data/iconCards';

const IconCards = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="cards.icon-card" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="icon-cards-row mb-2">
          {data.map((item, index) => {
            return (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Colxx xxs="6" sm="4" md="3" lg="2" key={`icon_card_${index}`}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IconCard {...item} className="mb-4" />
              </Colxx>
            );
          })}
        </Row>
      </Colxx>
    </Row>
  );
};

export default IconCards;
