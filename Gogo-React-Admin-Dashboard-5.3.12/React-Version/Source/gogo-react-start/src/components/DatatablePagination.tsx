/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

const DataTablePagination = ({
  page,
  pages,
  canPrevious,
  canNext,
  pageSizeOptions,
  showPageSizeOptions,
  showPageJump,
  defaultPageSize,
  onPageChange,
  onPageSizeChange,
  paginationMaxSize
}: any) => {
  const [pageState, setPageState] = useState(page);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  useEffect(() => {
    setPageState(page);
  }, [page]);
  const getSafePage = (_page: any) => {
    let p = _page;
    if (Number.isNaN(_page)) {
      p = page;
    }
    return Math.min(Math.max(p, 0), pages - 1);
  };

  const changePageSize = (size: any) => {
    onPageSizeChange(size);
    setPageSize(size);
  };

  const changePage = (_page: any) => {
    const p = getSafePage(_page);

    if (p !== pageState) {
      setPageState(p);
      onPageChange(p);
    }
  };

  const pageClick = (pageIndex: any) => {
    changePage(pageIndex);
  };

  const renderPages = () => {
    const totalPages = pages;
    let endPage = pages;
    const currentPage = pageState;
    let startPage = 0;
    const maxSize = paginationMaxSize;

    if (maxSize) {
      if (endPage > maxSize) {
        startPage = Math.max(currentPage + 1 - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
        startPage -= 1;
      }
    }

    const pageButtons = [];
    for (let i = startPage; i < endPage; i += 1) {
      const active = currentPage === i;
      pageButtons.push(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PaginationItem key={i} active={active}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PaginationLink onClick={() => pageClick(i)}>{i + 1}</PaginationLink>
        </PaginationItem>
      );
    }
    return pageButtons;
  };

  const renderPageJump = () => {
    const pageNumbers = [];
    for (let i = 0; i < pages; i += 1) {
      pageNumbers.push(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownItem key={i} onClick={() => changePage(i)}>
          {i + 1}
        </DropdownItem>
      );
    }
    return pageNumbers;
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="text-center">
      {showPageJump && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="float-left pt-2">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>Page </span>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <UncontrolledDropdown className="d-inline-block">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownToggle caret color="outline-primary" size="xs">
              {pageState + 1}
            </DropdownToggle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownMenu direction="left">{renderPageJump()}</DropdownMenu>
          </UncontrolledDropdown>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span> of </span>
          {pages}
        </div>
      )}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Pagination
        className="d-inline-block"
        size="sm"
        listClassName="justify-content-center"
        aria-label="Page navigation example"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PaginationItem className={`${!canPrevious && 'disabled'}`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PaginationLink
            className="prev"
            onClick={() => {
              if (!canPrevious) return;
              changePage(page - 1);
            }}
            disabled={!canPrevious}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-arrow-left" />
          </PaginationLink>
        </PaginationItem>

        {renderPages()}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PaginationItem className={`${!canNext && 'disabled'}`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PaginationLink
            className="next"
            onClick={() => {
              if (!canNext) return;
              changePage(page + 1);
            }}
            disabled={!canNext}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-arrow-right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      {showPageSizeOptions && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="float-right pt-2">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="text-muted text-small mr-1">Items </span>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <UncontrolledDropdown className="d-inline-block">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownToggle caret color="outline-primary" size="xs">
              {pageSize}
            </DropdownToggle>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DropdownMenu right>
              {pageSizeOptions.map((size: any, index: any) => {
                return (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <DropdownItem
                    key={index}
                    onClick={() => changePageSize(size)}
                  >
                    {size}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )}
    </div>
  </>;
};
export default DataTablePagination;
