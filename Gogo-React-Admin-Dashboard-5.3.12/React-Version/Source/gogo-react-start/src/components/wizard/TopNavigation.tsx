/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { WithWizard } from 'react-albus';
import { NavLink } from 'react-router-dom';

const TopNavigation = ({
  className,
  disableNav,
  topNavClick
}: any) => {
  const getClassName = (steps: any, step: any, index: any, stepItem: any) => {
    if (steps.indexOf(step) === index) {
      return 'step-doing';
    }
    if (steps.indexOf(step) > index || stepItem.isDone) {
      stepItem.isDone = true;
      return 'step-done';
    }
    return 'step';
  };

  const itemClick = (stepItem: any, push: any) => {
    if (disableNav) {
      return;
    }
    topNavClick(stepItem, push);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <WithWizard
      render={({
        next,
        previous,
        step,
        steps,
        go,
        push
      }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ul
          className={`nav nav-tabs ${className}${
            disableNav ? ' disabled' : ''
          }`}
        >
          {steps.map((stepItem: any, index: any) => {
            if (!stepItem.hideTopNav) {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <li
                  key={`topNavStep_${index}`}
                  className={`nav-item ${getClassName(
                    steps,
                    step,
                    index,
                    stepItem
                  )}`}
                >
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink
                    to="#"
                    // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                    location={{}}
                    className="nav-link"
                    onClick={() => itemClick(stepItem, push)}
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span>{stepItem.name}</span>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <small>{stepItem.desc}</small>
                  </NavLink>
                </li>
              );
            }
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <span key={`topNavStep_${index}`} />;
          })}
        </ul>
      )}
    />
  );
};

export default TopNavigation;
