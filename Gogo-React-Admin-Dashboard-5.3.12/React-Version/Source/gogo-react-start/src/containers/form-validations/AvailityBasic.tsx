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
import { Button, Label, Card, CardBody } from 'reactstrap';

const AvailityBasic = () => {
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
        <h6 className="mb-4">Basic</h6>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event: any, errors: any, values: any) => onSubmit(event, errors, values)}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Name</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="name" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Name is required!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Rank</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="rank" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvField
            type="select"
            name="select"
            required
            label="Option"
            errorMessage="Please select an option!"
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option value="0" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>1</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>2</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>3</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>4</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option>5</option>
          </AvField>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Details</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput type="textarea" name="details" id="details" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Please enter some details!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvRadioGroup
            className="error-l-150"
            name="radioCustomInputExample"
            required
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label className="d-block">Custom Radio Buttons</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvRadio customInput label="Cake" value="Cake" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvRadio customInput label="Cupcake" value="Cupcake" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvRadio customInput label="Dessert" value="Dessert" />
          </AvRadioGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvCheckboxGroup
            className="error-l-150"
            inline
            name="checkboxCustomInputExample2"
            required
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label className="d-block">Custom Checkboxes</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvCheckbox customInput label="Yes" value="Yes" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvCheckbox customInput label="No" value="No" />
          </AvCheckboxGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button color="primary">Submit</Button>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityBasic;
