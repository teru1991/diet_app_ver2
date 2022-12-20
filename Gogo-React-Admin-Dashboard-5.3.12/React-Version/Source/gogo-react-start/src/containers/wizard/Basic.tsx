/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/wizard/BottomNaviga... Remove this comment to see the full error message
import BottomNavigation from 'components/wizard/BottomNavigation';
// @ts-expect-error TS(2307): Cannot find module 'components/wizard/TopNavigatio... Remove this comment to see the full error message
import TopNavigation from 'components/wizard/TopNavigation';

const Basic = ({
  intl
}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const topNavClick = (stepItem: any, push: any) => {
    push(stepItem.id);
  };

  const onClickNext = (goToNext: any, steps: any, step: any) => {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
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
          <TopNavigation
            className="justify-content-center"
            disableNav={false}
            topNavClick={topNavClick}
          />
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
                <Form>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="forms.name" />
                    </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Input
                      type="text"
                      name="name"
                      placeholder={messages['forms.name']}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                </Form>
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
                <Form>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="forms.email" />
                    </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Input
                      type="email"
                      name="email"
                      placeholder={messages['forms.email']}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Form>
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
                <Form>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FormGroup>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Label>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="forms.password" />
                    </Label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Input
                      type="password"
                      name="password"
                      placeholder={messages['forms.password']}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </Form>
              </div>
            </Step>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Step id="step4" hideTopNav>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="wizard-basic-step text-center">
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
            </Step>
          </Steps>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className="justify-content-center"
            prevLabel={messages['wizard.prev']}
            nextLabel={messages['wizard.next']}
          />
        </Wizard>
      </CardBody>
    </Card>
  );
};
export default injectIntl(Basic);
