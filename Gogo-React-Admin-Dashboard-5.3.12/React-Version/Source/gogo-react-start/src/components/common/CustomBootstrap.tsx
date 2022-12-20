import React from 'react';
import { Col } from 'reactstrap';

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Colxx = (props: any) => <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />;
const Separator = ({
  className
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={`separator ${className}`} />
);
export { Colxx, Separator };
