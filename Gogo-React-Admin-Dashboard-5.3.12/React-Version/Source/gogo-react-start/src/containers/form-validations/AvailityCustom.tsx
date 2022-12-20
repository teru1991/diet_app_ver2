import React from 'react';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'avai... Remove this comment to see the full error message
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { Button, Label, Card, CardBody } from 'reactstrap';

const AvailityCustom = () => {
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
        <h6 className="mb-4">Custom Rules</h6>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event: any, errors: any, values: any) => onSubmit(event, errors, values)}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Name</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="nameCustomMessage"
              type="text"
              validate={{
                required: {
                  value: true,
                  errorMessage: 'Please enter your name',
                },
                pattern: {
                  value: '^[A-Za-z]+$',
                  errorMessage: 'Your name must be composed only with letters',
                },
                minLength: {
                  value: 2,
                  errorMessage: 'Your name must be between 2 and 16 characters',
                },
                maxLength: {
                  value: 16,
                  errorMessage: 'Your name must be between 2 and 16 characters',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Email</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="emailCustomMessage"
              type="email"
              validate={{
                required: {
                  value: true,
                  errorMessage: 'Please enter your email address',
                },
                email: {
                  value: true,
                  errorMessage: 'Please enter a valid email address',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-l-100 error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Email Again</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="confirmationEmail"
              type="email"
              validate={{
                match: {
                  value: 'emailCustomMessage',
                  errorMessage: 'Your inputs does not match',
                },
                required: {
                  value: true,
                  errorMessage: 'Please enter your email address',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-l-100 error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Number</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="numberProp"
              type="text"
              validate={{
                number: {
                  value: true,
                  errorMessage: 'Value must be a number',
                },
                required: {
                  value: true,
                  errorMessage: 'Please enter a number',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Max</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="maxPropNumberProp"
              type="text"
              validate={{
                max: { value: 5, errorMessage: 'Maximum 5' },
                required: {
                  value: true,
                  errorMessage: 'Please enter a number',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Min</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="minPropNumberProp"
              type="text"
              validate={{
                min: { value: 5, errorMessage: 'Minimum 5' },
                required: {
                  value: true,
                  errorMessage: 'Please enter a number',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-l-125 error-t-negative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Regex (^[A-Z]*$)</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvField
              name="patternPropRegex"
              type="text"
              validate={{
                pattern: {
                  value: /^[A-Z]*$/,
                  errorMessage: 'Only uppercase characters',
                },
                required: {
                  value: true,
                  errorMessage: 'Please enter uppercase characters',
                },
              }}
            />
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button color="primary">Submit</Button>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityCustom;
