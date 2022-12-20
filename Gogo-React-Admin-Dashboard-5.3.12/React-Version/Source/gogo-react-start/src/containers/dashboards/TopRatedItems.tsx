import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/Rating' or i... Remove this comment to see the full error message
import Rating from 'components/common/Rating';
import data from '../../data/topRatedItems';
// @ts-expect-error TS(2307): Cannot find module 'components/carousel/GlideCompo... Remove this comment to see the full error message
import GlideComponent from 'components/carousel/GlideComponent';

const TopRatedItem = ({
  image,
  order,
  title,
  rate,
  rateCount
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <img src={image} alt={title} className="mb-4" />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h6 className="mb-1">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span className="mr-2">{order}.</span>
      {title}
    </h6>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Rating total={5} rating={rate} interactive={false} />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <p className="text-small text-muted mb-0 d-inline-block">({rateCount})</p>
  </div>
);

const TopRatedItems = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="dashboard-top-rated">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.top-rated-items" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <GlideComponent
          settings={{
            gap: 5,
            perView: 1,
            type: 'carousel',
            peek: { before: 0, after: 100 },
            breakpoints: {
              480: { perView: 1 },
              992: { perView: 2 },
              1200: { perView: 1 },
            },
            hideNav: true,
          }}
        >
          {data.map((item) => {
            return (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div key={item.id}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TopRatedItem {...item} />
              </div>
            );
          })}
        </GlideComponent>
      </CardBody>
    </Card>
  );
};

export default TopRatedItems;
