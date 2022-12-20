import React from 'react';
import PropTypes from 'prop-types';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Rating = (props: any) => <Rater {...props}>
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Star />
</Rater>;

const Star = (props: any) => {
  const starProps = { ...props };
  const nameMap = {
    isDisabled: 'is-disabled',
    isActive: 'is-active',
    isActiveHalf: 'is-active-half',
    willBeActive: 'will-be-active',
  };

  const className = Object.keys(nameMap)
    // eslint-disable-next-line
    .filter((prop) => (delete starProps[prop], props[prop]))
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    .map((prop) => nameMap[prop])
    .join(' ');
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <div className={`react-rater-star ${className}`} {...starProps} />;
};

Star.defaultProps = {
  willBeActive: false,
  isActive: false,
  isActiveHalf: false,
  isDisabled: false,
};

Star.propTypes = {
  isActive: PropTypes.bool,
  isActiveHalf: PropTypes.bool,
  willBeActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default Rating;
