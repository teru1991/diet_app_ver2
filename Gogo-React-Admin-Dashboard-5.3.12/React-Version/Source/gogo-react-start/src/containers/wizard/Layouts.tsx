/* eslint-disable no-param-reassign */
import React from 'react';
import { Card, CardBody, Row } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/wizard/BottomNaviga... Remove this comment to see the full error message
import BottomNavigation from 'components/wizard/BottomNavigation';
// @ts-expect-error TS(2307): Cannot find module 'components/wizard/TopNavigatio... Remove this comment to see the full error message
import TopNavigation from 'components/wizard/TopNavigation';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const Layouts = ({
  intl
}: any) => {
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
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12" xl="6" className="mb-5">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody className="wizard wizard-default">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Wizard>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TopNavigation
                className="justify-content-between"
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
                  <div className="wizard-basic-step text-center">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-1" />
                    </p>
                  </div>
                </Step>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Step
                  id="step2"
                  name={messages['wizard.step-name-2']}
                  desc={messages['wizard.step-desc-2']}
                >
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="wizard-basic-step text-center">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-2" />
                    </p>
                  </div>
                </Step>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Step
                  id="step3"
                  name={messages['wizard.step-name-3']}
                  desc={messages['wizard.step-desc-3']}
                  hideTopNav
                >
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
                      <IntlMessages id="wizard.content-3" />
                    </p>
                  </div>
                </Step>
              </Steps>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <BottomNavigation
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
                className="justify-content-between"
                prevLabel={messages['wizard.prev']}
                nextLabel={messages['wizard.next']}
              />
            </Wizard>
          </CardBody>
        </Card>
      </Colxx>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12" xl="6">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody className="wizard wizard-default">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Wizard>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TopNavigation
                className="justify-content-start"
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
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-1" />
                    </p>
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
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-2" />
                    </p>
                  </div>
                </Step>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Step
                  id="step3"
                  name={messages['wizard.step-name-3']}
                  desc={messages['wizard.step-desc-3']}
                  hideTopNav
                >
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="wizard-basic-step">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <h2 className="mb-2">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-thanks" />
                    </h2>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IntlMessages id="wizard.content-3" />
                    </p>
                  </div>
                </Step>
              </Steps>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <BottomNavigation
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
                className="justify-content-start"
                prevLabel={messages['wizard.prev']}
                nextLabel={messages['wizard.next']}
              />
            </Wizard>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};
export default injectIntl(Layouts);
