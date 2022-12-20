/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import { NavItem, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classnames from 'classnames';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/ApplicationM... Remove this comment to see the full error message
import ApplicationMenu from 'components/common/ApplicationMenu';

// @ts-expect-error TS(2307): Cannot find module 'redux/actions' or its correspo... Remove this comment to see the full error message
import { getSurveyListWithFilter } from 'redux/actions';

const SurveyApplicationMenu = ({
  surveyItems,
  filter,
  allSurveyItems,
  loading,
  labels,
  categories,
  getSurveyListWithFilterAction
}: any) => {
  const addFilter = (column: any, value: any) => {
    getSurveyListWithFilterAction(column, value);
  };

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
          <p className="text-muted text-small">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="survey.status" />
            Status
          </p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ul className="list-unstyled mb-5">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavItem className={classnames({ active: !filter })}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to="#" onClick={() => addFilter('', '')} location={{}}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <i className="simple-icon-reload" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="survey.all-surveys" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className="float-right">
                  {loading && allSurveyItems.length}
                </span>
              </NavLink>
            </NavItem>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavItem
              className={classnames({
                active:
                  filter &&
                  filter.column === 'status' &&
                  filter.value === 'ACTIVE',
              })}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink
                to="#"
                // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                location={{}}
                onClick={() => addFilter('status', 'ACTIVE')}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <i className="simple-icon-refresh" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="survey.active-surveys" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className="float-right">
                  {loading &&
                    surveyItems.filter((x: any) => x.status === 'ACTIVE').length}
                </span>
              </NavLink>
            </NavItem>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavItem
              className={classnames({
                active:
                  filter &&
                  filter.column === 'status' &&
                  filter.value === 'COMPLETED',
              })}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink
                to="#"
                // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                location={{}}
                onClick={() => addFilter('status', 'COMPLETED')}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <i className="simple-icon-check" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="survey.completed-surveys" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span className="float-right">
                  {loading &&
                    surveyItems.filter((x: any) => x.status === 'COMPLETED').length}
                </span>
              </NavLink>
            </NavItem>
          </ul>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="survey.categories" />
          </p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ul className="list-unstyled mb-5">
            {categories.map((c: any, index: any) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <NavItem key={index}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div onClick={() => addFilter('category', c)}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="custom-control custom-radio">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <input
                        type="radio"
                        className="custom-control-input"
                        defaultChecked={
                          filter &&
                          filter.column === 'category' &&
                          filter.value === c
                        }
                      />
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <label className="custom-control-label">{c}</label>
                    </div>
                  </div>
                </NavItem>
              );
            })}
          </ul>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="survey.labels" />
          </p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            {labels.map((l: any, index: any) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <p className="d-sm-inline-block mb-1" key={index}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavLink
                    to="#"
                    // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                    location={{}}
                    onClick={() => addFilter('label', l.label)}
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Badge
                      className="mb-1"
                      color={`${
                        filter &&
                        filter.column === 'label' &&
                        filter.value === l.label
                          ? l.color
                          : `outline-${l.color}`
                      }`}
                      pill
                    >
                      {l.label}
                    </Badge>
                  </NavLink>
                </p>
              );
            })}
          </div>
        </div>
      </PerfectScrollbar>
    </ApplicationMenu>
  );
};
const mapStateToProps = ({
  surveyListApp
}: any) => {
  const {
    surveyItems,
    filter,
    allSurveyItems,
    loading,
    labels,
    categories,
  } = surveyListApp;

  return {
    surveyItems,
    filter,
    allSurveyItems,
    loading,
    labels,
    categories,
  };
};
export default connect(mapStateToProps, {
  getSurveyListWithFilterAction: getSurveyListWithFilter,
})(SurveyApplicationMenu);
