/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Row } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from 'react-select';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomSelect... Remove this comment to see the full error message
import CustomSelectInput from 'components/common/CustomSelectInput';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const selectData = [
  { label: 'Cake', value: 'cake', key: 0 },
  { label: 'Cupcake', value: 'cupcake', key: 1 },
  { label: 'Dessert', value: 'dessert', key: 2 },
];

const ReactSelectExample = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12" md="6" className="mb-5">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="form-components.state-single" />
        </label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          value={selectedOption}
          onChange={setSelectedOption}
          options={selectData}
        />
      </Colxx>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12" md="6">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="form-components.state-multiple" />
        </label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          isMulti
          name="form-field-name"
          value={selectedOptions}
          onChange={setSelectedOptions}
          options={selectData}
        />
      </Colxx>
    </Row>
  );
};
export default ReactSelectExample;
