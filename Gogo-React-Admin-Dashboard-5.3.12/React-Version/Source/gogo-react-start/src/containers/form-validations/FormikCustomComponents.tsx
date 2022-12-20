/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import {
  FormikReactSelect,
  FormikCheckboxGroup,
  FormikCheckbox,
  FormikRadioButtonGroup,
  FormikCustomCheckbox,
  FormikCustomCheckboxGroup,
  FormikCustomRadioGroup,
  FormikTagsInput,
  FormikSwitch,
  FormikDatePicker,
// @ts-expect-error TS(6142): Module './FormikFields' was resolved to '/Users/it... Remove this comment to see the full error message
} from './FormikFields';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  select: Yup.string().required('A select option is required!'),
  reactSelect: Yup.array()
    .min(3, 'Pick at least 3 tags')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  checkboxSingle: Yup.bool().oneOf([true], 'Must agree to something'),
  checkboxCustomSingle: Yup.bool().oneOf([true], 'Must agree to something'),
  checkboxGroup: Yup.array()
    .min(2, 'Pick at least 2 tags')
    .required('At least one checkbox is required'),

  customCheckGroup: Yup.array()
    .min(2, 'Pick at least 2 tags')
    .required('At least one checkbox is required'),

  radioGroup: Yup.string().required('A radio option is required'),
  customRadioGroup: Yup.string().required('A radio option is required'),
  tags: Yup.array()
    .min(3, 'Pick at least 3 tags')
    .required('At least one checkbox is required'),
  switch: Yup.bool().oneOf([true], 'Must agree to something'),
  date: Yup.date().nullable().required('Date required'),
});

const options = [
  { value: 'food', label: 'Food' },
  { value: 'beingfabulous', label: 'Being Fabulous', disabled: true },
  { value: 'reasonml', label: 'ReasonML' },
  { value: 'unicorns', label: 'Unicorns' },
  { value: 'kittens', label: 'Kittens' },
];

const FormikCustomComponents = () => {
  const onSubmit = (values: any, {
    setSubmitting
  }: any) => {
    const payload = {
      ...values,
      reactSelect: values.reactSelect.map((t: any) => t.value),
    };
    setTimeout(() => {
      console.log(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
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
            <h6 className="mb-4">Custom Components and Layouts with Yup</h6>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Formik
              initialValues={{
                email: 'test@test.com',
                select: '3',
                reactSelect: [{ value: 'reasonml', label: 'ReasonML' }],
                checkboxGroup: ['kittens'],
                customCheckGroup: ['unicorns'],
                checkboxSingle: true,
                checkboxCustomSingle: false,
                radioGroup: '',
                customRadioGroup: '',
                tags: ['cake', 'dessert'],
                switch: false,
                date: null,
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
                <Form className="av-tooltip tooltip-label-right">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-100">
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
                  <FormGroup className="error-l-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>Select </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <select
                      name="select"
                      className="form-control"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <option value="">Select an option..</option>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <option value="1">1</option>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <option value="2">2</option>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <option value="3">3</option>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <option value="4">4</option>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <option value="5">5</option>
                    </select>

                    {errors.select && touched.select ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.select}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>React Select </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikReactSelect
                      name="reactSelect"
                      id="reactSelect"
                      value={values.reactSelect}
                      isMulti
                      options={options}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.reactSelect && touched.reactSelect ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.reactSelect}
                      </div>
                    ) : null}
                  </FormGroup>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-150">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">Single Checkbox </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikCheckbox
                      name="checkboxSingle"
                      value={values.checkboxSingle}
                      label="Agree to something"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.checkboxSingle && touched.checkboxSingle ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.checkboxSingle}
                      </div>
                    ) : null}
                  </FormGroup>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-150">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">Custom Single Checkbox </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikCustomCheckbox
                      name="checkboxCustomSingle"
                      value={values.checkboxCustomSingle}
                      label="Agree to something"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.checkboxCustomSingle &&
                    touched.checkboxCustomSingle ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.checkboxCustomSingle}
                      </div>
                    ) : null}
                  </FormGroup>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-150 ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">Checkbox Group</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikCheckboxGroup
                      inline
                      name="checkboxGroup"
                      id="checkboxGroup"
                      label="Which of these?"
                      value={values.checkboxGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.checkboxGroup && touched.checkboxGroup ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.checkboxGroup}
                      </div>
                    ) : null}
                  </FormGroup>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-175 ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">Custom Checkbox Group</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikCustomCheckboxGroup
                      inline
                      name="customCheckGroup"
                      id="customCheckGroup"
                      label="Which of these?"
                      value={values.customCheckGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.customCheckGroup && touched.customCheckGroup ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.customCheckGroup}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-150">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">Radio Group </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikRadioButtonGroup
                      inline
                      name="radioGroup"
                      id="radioGroup"
                      label="One of these please"
                      value={values.radioGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.radioGroup && touched.radioGroup ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.radioGroup}
                      </div>
                    ) : null}
                  </FormGroup>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-175">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">Custom Radio Group</Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikCustomRadioGroup
                      inline
                      name="customRadioGroup"
                      id="customRadioGroup"
                      label="Which of these?"
                      value={values.customRadioGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.customRadioGroup && touched.customRadioGroup ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.customRadioGroup}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-175">
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
                  <FormGroup className="error-l-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="form-components.switch" />
                    </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormikSwitch
                      name="switch"
                      className="custom-switch custom-switch-primary"
                      value={values.switch}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.switch && touched.switch ? (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="invalid-feedback d-block">
                        {errors.switch}
                      </div>
                    ) : null}
                  </FormGroup>

                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup className="error-l-100">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label className="d-block">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="form-components.date-picker" />
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
export default FormikCustomComponents;
