/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  CardTitle,
} from 'reactstrap';
import {
  FormikReactSelect,
  FormikTagsInput,
  FormikDatePicker,
// @ts-expect-error TS(6142): Module './FormikFields' was resolved to '/Users/it... Remove this comment to see the full error message
} from './FormikFields';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!'),
  tags: Yup.array()
    .min(3, 'Pick at least 3 tags')
    .required('At least one tag is required'),
  date: Yup.date().nullable().required('Date required'),
  state: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable()
    .required('State is required!'),
});

const options = [
  { value: 'food', label: 'Food' },
  { value: 'beingfabulous', label: 'Being Fabulous', disabled: true },
  { value: 'reasonml', label: 'ReasonML' },
  { value: 'unicorns', label: 'Unicorns' },
  { value: 'kittens', label: 'Kittens' },
];

const FormikCustomWithTopLabels = () => {
  const onSubmit = (values: any, {
    setSubmitting
  }: any) => {
    const payload = {
      ...values,
      state: values.state.value,
    };
    setTimeout(() => {
      console.log(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Colxx xxs="12">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Card>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CardBody>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardTitle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="forms.top-labels-over-line" />
              </CardTitle>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Formik
                initialValues={{
                  email: 'test@test.com',
                  password: '',
                  tags: [],
                  date: null,
                  state: { value: 'reasonml', label: 'ReasonML' },
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
              >
                {({
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  isSubmitting,
                }) => (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Form className="av-tooltip tooltip-label-bottom">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-float-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.email" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Field className="form-control" name="email" />
                      {errors.email && touched.email ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      ) : null}
                    </FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-float-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.password" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Field
                        className="form-control"
                        name="password"
                        type="password"
                      />
                      {errors.password && touched.password ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.password}
                        </div>
                      ) : null}
                    </FormGroup>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-float-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label className="d-block">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="form-components.tags" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormikTagsInput
                        name="tags"
                        value={values.tags}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />

                      {errors.tags && touched.tags ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.tags}
                        </div>
                      ) : null}
                    </FormGroup>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-float-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label className="d-block">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="form-components.date" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormikDatePicker
                        name="date"
                        value={values.date}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />
                      {errors.date && touched.date ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.date}
                        </div>
                      ) : null}
                    </FormGroup>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-float-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.state" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormikReactSelect
                        name="state"
                        id="state"
                        value={values.state}
                        options={options}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />
                      {errors.state && touched.state ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.state}
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

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Colxx xxs="12">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Card>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CardBody>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardTitle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="forms.top-labels-in-input" />
              </CardTitle>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Formik
                initialValues={{
                  email: 'test@test.com',
                  password: '',
                  tags: [],
                  date: null,
                  state: { value: 'reasonml', label: 'ReasonML' },
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
              >
                {({
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  isSubmitting,
                }) => (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Form className="av-tooltip tooltip-label-bottom">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-top-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.email-u" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Field className="form-control" name="email" />
                      {errors.email && touched.email ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      ) : null}
                    </FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-top-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.password-u" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Field
                        className="form-control"
                        name="password"
                        type="password"
                      />
                      {errors.password && touched.password ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.password}
                        </div>
                      ) : null}
                    </FormGroup>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-top-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label className="d-block">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.tags-u" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormikTagsInput
                        name="tags"
                        value={values.tags}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />

                      {errors.tags && touched.tags ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.tags}
                        </div>
                      ) : null}
                    </FormGroup>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-top-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label className="d-block">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.date-u" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormikDatePicker
                        name="date"
                        value={values.date}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />
                      {errors.date && touched.date ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.date}
                        </div>
                      ) : null}
                    </FormGroup>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup className="form-group has-top-label">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <IntlMessages id="forms.state-u" />
                      </Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormikReactSelect
                        name="state"
                        id="state"
                        value={values.state}
                        options={options}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />
                      {errors.state && touched.state ? (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="invalid-feedback d-block">
                          {errors.state}
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
    </div>
  );
};
export default FormikCustomWithTopLabels;
