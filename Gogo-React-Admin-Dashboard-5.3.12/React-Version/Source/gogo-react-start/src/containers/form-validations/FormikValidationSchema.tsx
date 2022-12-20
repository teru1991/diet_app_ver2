/* eslint-disable no-unused-vars */
import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your last name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  details: Yup.string().required('Please provide the details'),
});

const FormikValidationSchema = () => {
  const onSubmit = (values: any) => {
    console.log(values);
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
            <h6 className="mb-4">Validation Schema with Yup</h6>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                details: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form className="av-tooltip tooltip-label-right">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-75">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>First Name</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field className="form-control" name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-75">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Last Name</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field className="form-control" name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Email</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field className="form-control" name="email" type="email" />
                    {errors.email && touched.email ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Details</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      className="form-control"
                      name="details"
                      component="textarea"
                    />
                    {errors.details && touched.details ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.details}
                      </div>
                    ) : null}
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

export default FormikValidationSchema;
