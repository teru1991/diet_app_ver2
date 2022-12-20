import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const InjectMassage = (props: any) => <FormattedMessage {...props} />;

export default injectIntl(InjectMassage, {
  // @ts-expect-error TS(2769): No overload matches this call.
  withRef: false,
});
