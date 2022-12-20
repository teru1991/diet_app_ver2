import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const Pagination = ({
  totalPage = 0,
  currentPage = 1,
  numberLimit = 5,
  lastIsActive = true,
  firstIsActive = true,
  onChangePage
}: any) => {
  let startPoint = 1;
  let endPoint = numberLimit;

  if (numberLimit > totalPage) {
    startPoint = 1;
    endPoint = totalPage;
  // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
  } else if (currentPage <= parseInt(numberLimit / 2, 10)) {
    startPoint = 1;
    endPoint = numberLimit;
  // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
  } else if (currentPage + parseInt(numberLimit / 2, 10) <= totalPage) {
    // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
    startPoint = currentPage - parseInt(numberLimit / 2, 10);
    // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
    endPoint = currentPage + parseInt(numberLimit / 2, 10);
  } else {
    startPoint = totalPage - (numberLimit - 1);
    endPoint = totalPage;
  }
  startPoint = startPoint === 0 ? 1 : startPoint;
  const points = [];
  for (let i = startPoint; i <= endPoint; i += 1) {
    points.push(i);
  }

  const firstPageButtonClassName = currentPage <= 1 ? 'disabled' : '';
  const lastPageButtonClassName = currentPage >= totalPage ? 'disabled' : '';
  const prevPageButtonClassName = currentPage <= 1 ? 'disabled' : '';
  const nextPageButtonClassName = currentPage >= totalPage ? 'disabled' : '';
  return totalPage > 1 ? (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" className="mt-3 mb-3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Nav className="pagination justify-content-center">
        {firstIsActive && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavItem className={`page-item ${firstPageButtonClassName}`}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink
              className="page-link first c-pointer"
              onClick={() => onChangePage(1)}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i className="simple-icon-control-start" />
            </NavLink>
          </NavItem>
        )}

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavItem className={`page-item ${prevPageButtonClassName}`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink
            className="page-link prev c-pointer"
            onClick={() => onChangePage(currentPage - 1)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-arrow-left" />
          </NavLink>
        </NavItem>
        {points.map((i) => {
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavItem
              key={i}
              className={`page-item ${currentPage === i && 'active'}`}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NavLink
                className="page-link c-pointer"
                onClick={() => onChangePage(i)}
              >
                {i}
              </NavLink>
            </NavItem>
          );
        })}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavItem className={`page-item ${nextPageButtonClassName}`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink
            className="page-link next c-pointer"
            onClick={() => onChangePage(currentPage + 1)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-arrow-right" />
          </NavLink>
        </NavItem>
        {lastIsActive && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavItem className={`page-item ${lastPageButtonClassName}`}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink
              className="page-link last c-pointer"
              onClick={() => onChangePage(totalPage)}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i className="simple-icon-control-end" />
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </Colxx>
  ) : (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" className="mt-2" />
  );
};

export default Pagination;
