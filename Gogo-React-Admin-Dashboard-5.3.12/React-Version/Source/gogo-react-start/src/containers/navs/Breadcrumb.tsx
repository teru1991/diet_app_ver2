/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { adminRoot } from 'constants/defaultValues';

const getMenuTitle = (sub: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  if (`/${sub}` === adminRoot) return <IntlMessages id="menu.home" />;
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <IntlMessages id={`menu.${sub}`} />;
};

const getUrl = (path: any, sub: any) => {
  return path.split(sub)[0] + sub;
};

const BreadcrumbContainer = ({
  heading,
  match
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {heading && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id={heading} />
        </h1>
      )}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BreadcrumbItems match={match} />
    </>
  );
};

const BreadcrumbItems = ({
  match
}: any) => {
  const path = match.path.substr(1);
  let paths = path.split('/');
  if (paths[paths.length - 1].indexOf(':') > -1) {
    paths = paths.filter((x: any) => x.indexOf(':') === -1);
  }
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
      {paths.map((sub: any, index: any) => {
        return (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <BreadcrumbItem key={index} active={paths.length === index + 1}>
            {paths.length !== index + 1 ? (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink to={`/${getUrl(path, sub, index)}`}>
                {getMenuTitle(sub)}
              </NavLink>
            ) : (
              getMenuTitle(sub)
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  </>;
};

export default BreadcrumbContainer;
