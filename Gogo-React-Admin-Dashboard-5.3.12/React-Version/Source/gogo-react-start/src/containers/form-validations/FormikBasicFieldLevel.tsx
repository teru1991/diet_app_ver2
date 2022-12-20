import React from 'react';
import { Formik, Form, Field } from 'formik';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const FormikBasicFieldLevel = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  const validateEmail = (value: any) => {
    let error;
    if (!value) {
      error = 'Please enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validateName = (value: any) => {
    let error;
    if (!value) {
      error = 'Please enter your name';
    } else if (value.length < 2) {
      error = 'Value must be longer than 2 characters';
    }
    return error;
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row className="mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h6 className="mb-4">Field Level Validation</h6>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Formik
              initialValues={{
                name: '',
                email: '',
              }}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form className="av-tooltip tooltip-label-right">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Name</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      className="form-control"
                      name="name"
                      validate={validateName}
                    />
                    {errors.name && touched.name && (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Email</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default FormikBasicFieldLevel;
