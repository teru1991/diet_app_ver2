import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';

const SingleLightbox = ({
  thumb,
  className,
  large
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink to="#" location={{}} onClick={() => setIsOpen(true)}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <img src={thumb} alt="thumbnail" className={className} />
      </NavLink>

      {isOpen && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Lightbox mainSrc={large} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  );
};
export default SingleLightbox;
