/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  CustomInput,
} from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from 'react-select';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomSelect... Remove this comment to see the full error message
import CustomSelectInput from 'components/common/CustomSelectInput';

const selectData = [
  { label: 'Chocolate', value: 'chocolate', key: 0 },
  { label: 'Vanilla', value: 'vanilla', key: 1 },
  { label: 'Strawberry', value: 'strawberry', key: 2 },
  { label: 'Caramel', value: 'caramel', key: 3 },
  { label: 'Cookies and Cream', value: 'cookiescream', key: 4 },
  { label: 'Peppermint', value: 'peppermint', key: 5 },
];

const selectDataType = [
  { label: 'Cake', value: 'cake', key: 0 },
  { label: 'Cupcake', value: 'cupcake', key: 1 },
  { label: 'Dessert', value: 'dessert', key: 2 },
];

const AdvancedSearch = ({
  messages
}: any) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsType, setSelectedOptionsType] = useState([]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="dashboard-search">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="text-white">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="dashboards.advanced-search" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Form className="form-container">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="dashboards.toppings" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Select
              components={{ Input: CustomSelectInput }}
              className="react-select"
              classNamePrefix="react-select"
              name="form-field-name"
              value={selectedOptions}
              onChange={(val: any) => setSelectedOptions(val)}
              options={selectData}
            />
          </FormGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="dashboards.type" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Select
              components={{ Input: CustomSelectInput }}
              className="react-select"
              classNamePrefix="react-select"
              name="form-field-name"
              value={selectedOptionsType}
              onChange={(val: any) => setSelectedOptionsType(val)}
              options={selectDataType}
            />
          </FormGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="dashboards.keyword" />
            </Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Input type="text" placeholder={messages['dashboards.keyword']} />
          </FormGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox"
              label="Check this custom checkbox"
            />
          </FormGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup className="text-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button color="primary" className="btn-lg mt-3">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="dashboards.search" />
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default AdvancedSearch;
