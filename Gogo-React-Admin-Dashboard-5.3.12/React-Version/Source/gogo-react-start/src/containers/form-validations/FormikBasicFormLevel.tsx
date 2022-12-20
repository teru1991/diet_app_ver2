/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const FormikBasicFormLevel = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  const validate = (values: any) => {
    const errors = {};

    if (!values.email) {
      // @ts-expect-error TS(2339): Property 'email' does not exist on type '{}'.
      errors.email = 'Please enter your email address';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      // @ts-expect-error TS(2339): Property 'email' does not exist on type '{}'.
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
      // @ts-expect-error TS(2339): Property 'name' does not exist on type '{}'.
      errors.name = 'Please enter your name';
    } else if (values.name === 'admin') {
      // @ts-expect-error TS(2339): Property 'name' does not exist on type '{}'.
      errors.name = 'Value must be longer than 2 characters';
    }
    return errors;
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
            <h6 className="mb-4">Form Level Validation</h6>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Formik
              validate={validate}
              initialValues={{
                name: '',
                email: '',
              }}
              onSubmit={onSubmit}
            >
              {({ errors, touched, isValidating }) => (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form className="av-tooltip tooltip-label-right">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Name</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field className="form-control" name="name" />
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
                    <Field className="form-control" name="email" />
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

export default FormikBasicFormLevel;
