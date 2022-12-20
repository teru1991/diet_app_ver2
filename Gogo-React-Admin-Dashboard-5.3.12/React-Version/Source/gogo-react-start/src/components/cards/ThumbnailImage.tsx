import React from 'react';
import classnames from 'classnames';

const ThumbnailImage = ({
  alt,
  src,
  className,
  rounded,
  small
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <img
      alt={alt}
      src={src}
      className={`img-thumbnail list-thumbnail align-self-center ${className}  ${classnames(
        {
          'rounded-circle': rounded,
          small,
        }
      )}`}
    />
  );
};

export default React.memo(ThumbnailImage);
