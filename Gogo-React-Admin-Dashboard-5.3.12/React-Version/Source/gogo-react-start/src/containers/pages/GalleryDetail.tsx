/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';

const images = [
  '/assets/img/products/fruitcake.jpg',
  '/assets/img/products/napoleonshat.jpg',
  '/assets/img/products/tea-loaf.jpg',
  '/assets/img/products/magdalena.jpg',
  '/assets/img/products/marble-cake.jpg',
  '/assets/img/products/parkin.jpg',
];

const thumbs = [
  '/assets/img/products/fruitcake-thumb.jpg',
  '/assets/img/products/napoleonshat-thumb.jpg',
  '/assets/img/products/tea-loaf-thumb.jpg',
  '/assets/img/products/magdalena-thumb.jpg',
  '/assets/img/products/marble-cake-thumb.jpg',
  '/assets/img/products/parkin-thumb.jpg',
];

const GalleryDetail = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="row social-image-row gallery">
        {thumbs.map((item, index) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-6" key={index}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink
                to="#"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                location={{}}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img
                  className="img-fluid border-radius"
                  src={item}
                  alt="thumbnail"
                />
              </NavLink>
            </div>
          );
        })}
      </div>
      {isOpen && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryDetail;
