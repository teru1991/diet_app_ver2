import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// @ts-expect-error TS(2307): Cannot find module 'components/common/ReactAutoSug... Remove this comment to see the full error message
import ReactAutoSuggest from 'components/common/ReactAutoSuggest';
import cakes from '../../data/cakes';

const data = cakes.map((item) => {
  return { name: item.title };
});

const ReactAutoSugegstExample = ({
  intl
}: any) => {
  const [value, setValue] = useState('');
  const { messages } = intl;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ReactAutoSuggest
      placeholder={messages['form-components.type-a-cake']}
      value={value}
      onChange={(val: any) => setValue(val)}
      data={data}
    />
  );
};

export default injectIntl(ReactAutoSugegstExample);
