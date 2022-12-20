import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const TagsInputExample = ({
  intl
}: any) => {
  const [tags, setTags] = useState([]);
  const { messages } = intl;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TagsInput
      value={tags}
      onChange={setTags}
      inputProps={{ placeholder: messages['form-components.tags'] }}
    />
  );
};
export default injectIntl(TagsInputExample);
