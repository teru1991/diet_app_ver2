/* eslint-disable react/no-array-index-key */
import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'components/cards/IconCard' or ... Remove this comment to see the full error message
import IconCard from 'components/cards/IconCard';
import data from '../../data/iconCards';
// @ts-expect-error TS(2307): Cannot find module 'components/carousel/GlideCompo... Remove this comment to see the full error message
import GlideComponent from 'components/carousel/GlideComponent';

const IconCardsCarousel = ({ className = 'icon-cards-row' }) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={className}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <GlideComponent
        settings={{
          gap: 5,
          perView: 4,
          type: 'carousel',
          breakpoints: {
            320: { perView: 1 },
            576: { perView: 2 },
            1600: { perView: 3 },
            1800: { perView: 4 },
          },
          hideNav: true,
        }}
      >
        {data.map((item, index) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div key={`icon_card_${index}`}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IconCard {...item} className="mb-4" />
            </div>
          );
        })}
      </GlideComponent>
    </div>
  );
};
export default IconCardsCarousel;
