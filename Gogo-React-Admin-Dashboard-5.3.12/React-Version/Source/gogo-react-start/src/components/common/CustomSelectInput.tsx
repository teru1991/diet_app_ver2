import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { components } from 'react-select';

const CustomSelectInput = (props: any) => {
  const customProps = { ...props };
  delete customProps.autoCorrect;
  delete customProps.autoCapitalize;
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <components.Input {...customProps} />;
};

export default CustomSelectInput;
