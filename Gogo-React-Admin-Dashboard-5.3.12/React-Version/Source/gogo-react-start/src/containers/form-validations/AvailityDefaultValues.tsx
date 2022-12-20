import React from 'react';

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'avai... Remove this comment to see the full error message
} from 'availity-reactstrap-validation';
import { Button, Label, FormGroup, Card, CardBody } from 'reactstrap';

const defaultValues = {
  locationType: 'work',
  locationQualities: ['beautiful', 'awesome', 'wonderful'],
  firstname: 'Sarah',
  lastname: 'Kortney',
  location: {
    street: '10752 Deerwood Park Blvd',
    suite: '110',
    city: 'Jacksonville',
    state: 'Florida',
    zip: '32256',
  },
};

const AvailityDefaultValues = () => {
  const onSubmit = (event: any, errors: any, values: any) => {
    console.log(errors);
    console.log(values);
    if (errors.length === 0) {
      // submit
    }
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="mb-5">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h6 className="mb-4">Default Values</h6>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvForm
          onSubmit={(event: any, errors: any, values: any) => onSubmit(event, errors, values)}
          model={defaultValues}
          className="av-tooltip tooltip-right-bottom"
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvRadioGroup inline name="locationType" required>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label className="d-block">Location Type</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvRadio label="Residential" value="home" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvRadio label="Business" value="work" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvRadio label="Awesome" value="awesome" />
          </AvRadioGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvCheckboxGroup inline name="locationQualities" required>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label className="d-block">Location Qualities</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvCheckbox label="Beautiful" value="beautiful" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvCheckbox label="Awesome" value="awesome" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvCheckbox label="Wonderful" value="wonderful" />
          </AvCheckboxGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField name="firstname" label="First Name" required />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField name="lastname" label="Last Name" required />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label for="street">Street</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="location.street" id="street" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField name="location.suite" label="Suite" required />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField name="location.city" label="City" required />

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField type="select" name="location.state" label="State" required>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>Something</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>Something else</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>Florida</option>
          </AvField>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField name="location.zip" label="ZIP Code" required />

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup className="mb-0">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button color="primary">Submit</Button>
          </FormGroup>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityDefaultValues;
