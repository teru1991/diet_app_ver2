import React from 'react';
import classnames from 'classnames';

const ThumbnailLetters = ({
  text,
  color,
  className,
  rounded,
  small
}: any) => {
  let letters = '';
  if (text.indexOf(' ') > -1) {
    text.split(' ').map((word: any) => {
      if (word.length > 1) letters += word.slice(0, 1);
      return '';
    });
  } else {
    letters += text.slice(0, 2);
  }

  if (letters.length > 2) {
    letters = letters.slice(0, 2);
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
      className={`align-self-center list-thumbnail-letters ${
        color ? `btn-${color}` : ''
      }  ${className}  ${classnames({
        'rounded-circle': rounded,
        small,
      })}`}
      title={text}
    >
      {letters}
    </div>
  );
};

export default React.memo(ThumbnailLetters);
