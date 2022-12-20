/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const images1 = [
  '/assets/img/products/tea-loaf.jpg',
  '/assets/img/products/magdalena.jpg',
  '/assets/img/products/marble-cake.jpg',
  '/assets/img/products/parkin.jpg',
  '/assets/img/products/napoleonshat.jpg',
  '/assets/img/products/fruitcake.jpg',
];

const thumbs1 = [
  '/assets/img/products/tea-loaf-thumb.jpg',
  '/assets/img/products/magdalena-thumb.jpg',
  '/assets/img/products/marble-cake-thumb.jpg',
  '/assets/img/products/parkin-thumb.jpg',
  '/assets/img/products/napoleonshat-thumb.jpg',
  '/assets/img/products/fruitcake-thumb.jpg',
];

const images2 = [
  '/assets/img/products/fruitcake.jpg',
  '/assets/img/products/napoleonshat.jpg',
  '/assets/img/products/tea-loaf.jpg',
  '/assets/img/products/magdalena.jpg',
];

const thumbs2 = [
  '/assets/img/products/fruitcake-thumb.jpg',
  '/assets/img/products/napoleonshat-thumb.jpg',
  '/assets/img/products/tea-loaf-thumb.jpg',
  '/assets/img/products/magdalena-thumb.jpg',
];

const GalleryProfile = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openedGallery, setOpenedGallery] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onThumbClick = (index: any, gallery: any) => {
    setPhotoIndex(index);
    setIsOpen(true);
    setOpenedGallery(gallery);
  };

  const getGallery = () => {
    if (openedGallery === 1) {
      return images1;
    }
    return images2;
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Colxx xxs="12">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h5 className="mb-4">25 July 2019</h5>
        </Colxx>
      </Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="gallery gallery-page mb-5">
        {thumbs1.map((item, index) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="6" lg="2" md="4" key={index}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink
                to="#"
                onClick={() => onThumbClick(index, 1)}
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
            </Colxx>
          );
        })}
      </Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Colxx xxs="12">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h5 className="mb-4">14 April 2019</h5>
        </Colxx>
      </Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="gallery gallery-page mb-5">
        {thumbs2.map((item, index) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="6" lg="3" md="3" key={index}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink
                to="#"
                onClick={() => onThumbClick(index, 2)}
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
            </Colxx>
          );
        })}
      </Row>

      {isOpen && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Lightbox
          mainSrc={getGallery()[photoIndex]}
          nextSrc={getGallery()[(photoIndex + 1) % getGallery().length]}
          prevSrc={
            getGallery()[
              (photoIndex + getGallery().length - 1) % getGallery().length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              // @ts-expect-error TS(2551): Property 'lengt' does not exist on type 'string[]'... Remove this comment to see the full error message
              (photoIndex + getGallery().length - 1) % getGallery().lengt
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % getGallery().length)
          }
        />
      )}
    </>
  );
};

export default GalleryProfile;
