/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/DatatablePagination... Remove this comment to see the full error message
import DatatablePagination from 'components/DatatablePagination';

import products from '../../data/products';

function Table({
  columns,
  data,
  divided = false,
  defaultPageSize = 6
}: any) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <table
      {...getTableProps()}
      className={`r-table table ${classnames({ 'table-divided': divided })}`}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <thead>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {headerGroups.map((headerGroup: any) => <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any, columnIndex: any) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <th
              key={`th_${columnIndex}`}
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={
                column.isSorted
                  ? column.isSortedDesc
                    ? 'sorted-desc'
                    : 'sorted-asc'
                  : ''
              }
            >
              {column.render('Header')}
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span />
            </th>
          ))}
        </tr>)}
      </thead>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <tbody {...getTableBodyProps()}>
        {page.map((row: any) => {
          prepareRow(row);
          return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any, cellIndex: any) => (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <td
                  key={`td_${cellIndex}`}
                  {...cell.getCellProps({
                    className: cell.column.cellClass,
                  })}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DatatablePagination
      page={pageIndex}
      pages={pageCount}
      canPrevious={canPreviousPage}
      canNext={canNextPage}
      pageSizeOptions={[4, 10, 20, 30, 40, 50]}
      showPageSizeOptions={false}
      showPageJump={false}
      defaultPageSize={pageSize}
      onPageChange={(p: any) => gotoPage(p)}
      onPageSizeChange={(s: any) => setPageSize(s)}
      paginationMaxSize={pageCount}
    />
  </>;
}

export const ReactTableWithPaginationCard = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'title',
        cellClass: 'list-item-heading w-40',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
      {
        Header: 'Sales',
        accessor: 'sales',
        cellClass: 'text-muted w-10',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
      {
        Header: 'Stock',
        accessor: 'stock',
        cellClass: 'text-muted w-10',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
      {
        Header: 'Category',
        accessor: 'category',
        cellClass: 'text-muted w-40',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
    ],
    []
  );

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="table.react-pagination" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Table columns={cols} data={products} />
      </CardBody>
    </Card>
  );
};

export const ReactTableDivided = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'title',
        cellClass: 'list-item-heading w-40',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
      {
        Header: 'Sales',
        accessor: 'sales',
        cellClass: 'text-muted  w-10',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
      {
        Header: 'Stock',
        accessor: 'stock',
        cellClass: 'text-muted  w-10',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
      {
        Header: 'Category',
        accessor: 'category',
        cellClass: 'text-muted  w-40',
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        Cell: (props: any) => <>{props.value}</>,
      },
    ],
    []
  );
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IntlMessages id="table.divided" />
      </CardTitle>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Table columns={cols} data={products} divided />
    </div>
  );
};
