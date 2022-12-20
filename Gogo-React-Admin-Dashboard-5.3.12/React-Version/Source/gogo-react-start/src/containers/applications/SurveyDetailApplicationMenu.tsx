import React from 'react';
import { Badge, FormGroup, CustomInput } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';

// @ts-expect-error TS(2307): Cannot find module 'components/common/ApplicationM... Remove this comment to see the full error message
import ApplicationMenu from 'components/common/ApplicationMenu';

const SurveyDetailApplicationMenu = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ApplicationMenu>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PerfectScrollbar
        options={{ suppressScrollX: true, wheelPropagation: false }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="p-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small">Status</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ul className="list-unstyled mb-5">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <li className="active">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to="#" location={{}}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <i className="simple-icon-refresh" />
                Active Surveys
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className="float-right">12</span>
              </NavLink>
            </li>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <li>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to="#" location={{}}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <i className="simple-icon-check" />
                Completed Surveys
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className="float-right">24</span>{' '}
              </NavLink>
            </li>
          </ul>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small">Categories</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup className="mb-5">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              type="checkbox"
              id="developmentCheck"
              label="Development"
              className="mb-2"
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              type="checkbox"
              id="workplaceCheck"
              className="mb-2"
              label="Workplace"
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              type="checkbox"
              id="hardwareCheck"
              className="mb-2"
              label="Hardware"
            />
          </FormGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small">Labels</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to="#" location={{}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Badge className="mb-1" color="outline-primary" pill>
                NEW FRAMEWORK
              </Badge>{' '}
            </NavLink>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to="#" location={{}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Badge className="mb-1" color="outline-secondary" pill>
                EDUCATION
              </Badge>{' '}
            </NavLink>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to="#" location={{}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Badge className="mb-1" color="outline-dark" pill>
                PERSONAL
              </Badge>{' '}
            </NavLink>
          </div>
        </div>
      </PerfectScrollbar>
    </ApplicationMenu>
  );
};

export default SurveyDetailApplicationMenu;
