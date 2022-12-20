/* eslint-disable no-param-reassign */
import React, { createRef, useState } from 'react';
import { Card, CardBody, FormGroup, Label, Spinner } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { Formik, Form, Field } from 'formik';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/wizard/BottomNaviga... Remove this comment to see the full error message
import BottomNavigation from 'components/wizard/BottomNavigation';
// @ts-expect-error TS(2307): Cannot find module 'components/wizard/TopNavigatio... Remove this comment to see the full error message
import TopNavigation from 'components/wizard/TopNavigation';

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

const validatePassword = (value: any) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 6) {
    error = 'Password must be longer than 6 characters';
  }
  return error;
};

const Validation = ({
  intl
}: any) => {
  // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
  const forms = [createRef(null), createRef(null), createRef(null)];
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState([
    {
      valid: false,
      name: 'name',
      value: '',
    },
    {
      valid: false,
      name: 'email',
      value: '',
    },
    {
      valid: false,
      name: 'password',
      value: '',
    },
  ]);

  const asyncLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const onClickNext = (goToNext: any, steps: any, step: any) => {
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    const formIndex = steps.indexOf(step);
    const form = forms[formIndex].current;
    const { name } = fields[formIndex];
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    form.submitForm().then(() => {
      const newFields = [...fields];

      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      newFields[formIndex].value = form.values[name];
      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      newFields[formIndex].valid = !form.errors[name];
      setFields(newFields);

      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      if (!form.errors[name] && form.touched[name]) {
        goToNext();
        step.isDone = true;
        if (steps.length - 2 <= steps.indexOf(step)) {
          setBottomNavHidden(true);
          asyncLoading();
        }
      }
    });
  };

  const onClickPrev = (goToPrev: any, steps: any, step: any) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const { messages } = intl;
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody className="wizard wizard-default">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Wizard>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TopNavigation className="justify-content-center" disableNav />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Steps>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Step
              id="step1"
              name={messages['wizard.step-name-1']}
              desc={messages['wizard.step-desc-1']}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="wizard-basic-step">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Formik
                  // @ts-expect-error TS(2322): Type 'RefObject<unknown>' is not assignable to typ... Remove this comment to see the full error message
                  innerRef={forms[0]}
                  initialValues={{
                    name: fields[0].value,
                  }}
                  onSubmit={() => {}}
                >
                  {({ errors, touched }) => (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form className="av-tooltip tooltip-label-right">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormGroup>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Label>{messages['forms.name']}</Label>
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
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Step
              id="step2"
              name={messages['wizard.step-name-2']}
              desc={messages['wizard.step-desc-2']}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="wizard-basic-step">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Formik
                  // @ts-expect-error TS(2322): Type 'RefObject<unknown>' is not assignable to typ... Remove this comment to see the full error message
                  innerRef={forms[1]}
                  initialValues={{
                    email: fields[1].value,
                  }}
                  onSubmit={() => {}}
                >
                  {({ errors, touched }) => (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form className="av-tooltip tooltip-label-right">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormGroup>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Label>{messages['forms.email']}</Label>
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
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Step
              id="step3"
              name={messages['wizard.step-name-3']}
              desc={messages['wizard.step-desc-3']}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="wizard-basic-step">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Formik
                  // @ts-expect-error TS(2322): Type 'RefObject<unknown>' is not assignable to typ... Remove this comment to see the full error message
                  innerRef={forms[2]}
                  initialValues={{
                    password: fields[2].value,
                  }}
                  onSubmit={() => {}}
                >
                  {({ errors, touched }) => (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form className="av-tooltip tooltip-label-right error-l-75">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormGroup>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Label>{messages['forms.password']}</Label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                          className="form-control"
                          name="password"
                          type="password"
                          validate={validatePassword}
                        />
                        {errors.password && touched.password && (
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <div className="invalid-feedback d-block">
                            {errors.password}
                          </div>
                        )}
                      </FormGroup>
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Step id="step4" hideTopNav>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="wizard-basic-step text-center pt-3">
                {loading ? (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Spinner color="primary" className="mb-1" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.async" />
                    </p>
                  </div>
                ) : (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <h2 className="mb-2">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-thanks" />
                    </h2>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.registered" />
                    </p>
                  </div>
                )}
              </div>
            </Step>
          </Steps>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className={`justify-content-center ${
              bottomNavHidden && 'invisible'
            }`}
            prevLabel={messages['wizard.prev']}
            nextLabel={messages['wizard.next']}
          />
        </Wizard>
      </CardBody>
    </Card>
  );
};
export default injectIntl(Validation);
