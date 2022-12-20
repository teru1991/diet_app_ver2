/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Row,
  Button,
  ButtonDropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
  Collapse,
} from 'reactstrap';
import { injectIntl } from 'react-intl';

// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx, Separator } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

// @ts-expect-error TS(2307): Cannot find module 'components/svg' or its corresp... Remove this comment to see the full error message
import { DataListIcon, ThumbListIcon, ImageListIcon } from 'components/svg';
// @ts-expect-error TS(6142): Module '../navs/Breadcrumb' was resolved to '/User... Remove this comment to see the full error message
import Breadcrumb from '../navs/Breadcrumb';

const ListPageHeading = ({
  intl,
  displayMode,
  changeDisplayMode,
  handleChangeSelectAll,
  changeOrderBy,
  changePageSize,
  selectedPageSize,
  totalItemCount,
  selectedOrderOption,
  match,
  startIndex,
  endIndex,
  selectedItemsLength,
  itemsLength,
  onSearchKey,
  orderOptions,
  pageSizes,
  toggleModal,
  heading
}: any) => {
  const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const { messages } = intl;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mb-2">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h1>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id={heading} />
          </h1>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="text-zero top-right-button-container">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button
              color="primary"
              size="lg"
              className="top-right-button"
              onClick={() => toggleModal()}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="pages.add-new" />
            </Button>
            {'  '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ButtonDropdown
              isOpen={dropdownSplitOpen}
              toggle={() => setDropdownSplitOpen(!dropdownSplitOpen)}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="btn btn-primary btn-lg pl-4 pr-0 check-button check-all">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CustomInput
                  className="custom-checkbox mb-0 d-inline-block"
                  type="checkbox"
                  id="checkAll"
                  checked={selectedItemsLength >= itemsLength}
                  onChange={() => handleChangeSelectAll(true)}
                  label={
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span
                      className={`custom-control-label ${
                        selectedItemsLength > 0 &&
                        selectedItemsLength < itemsLength
                          ? 'indeterminate'
                          : ''
                      }`}
                    />
                  }
                />
              </div>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownToggle
                caret
                color="primary"
                className="dropdown-toggle-split btn-lg"
              />
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DropdownMenu right>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DropdownItem>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <IntlMessages id="pages.delete" />
                </DropdownItem>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DropdownItem>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <IntlMessages id="pages.another-action" />
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Breadcrumb match={match} />
        </div>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mb-2">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IntlMessages id="pages.display-options" />{' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-arrow-down align-middle" />
          </Button>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="mr-3 d-inline-block float-md-left">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <a
                href="#/"
                className={`mr-2 view-icon ${
                  displayMode === 'list' ? 'active' : ''
                }`}
                onClick={() => changeDisplayMode('list')}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DataListIcon />
              </a>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <a
                href="#/"
                className={`mr-2 view-icon ${
                  displayMode === 'thumblist' ? 'active' : ''
                }`}
                onClick={() => changeDisplayMode('thumblist')}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ThumbListIcon />
              </a>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <a
                href="#/"
                className={`mr-2 view-icon ${
                  displayMode === 'imagelist' ? 'active' : ''
                }`}
                onClick={() => changeDisplayMode('imagelist')}
              >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ImageListIcon />
              </a>
            </span>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="d-block d-md-inline-block pt-1">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DropdownToggle caret color="outline-dark" size="xs">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <IntlMessages id="pages.orderby" />
                  {selectedOrderOption.label}
                </DropdownToggle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DropdownMenu>
                  {orderOptions.map((order: any, index: any) => {
                    return (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <DropdownItem
                        key={index}
                        onClick={() => changeOrderBy(order.column)}
                      >
                        {order.label}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <input
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={messages['menu.search']}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="float-md-right pt-1">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span className="text-muted text-small mr-1">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="pages.viewing" />
                {startIndex + 1}-
                {totalItemCount >= endIndex ? endIndex : totalItemCount}
                {` | `}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IntlMessages id="pages.total" />
                {totalItemCount}
              </span>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <UncontrolledDropdown className="d-inline-block">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedPageSize}
                </DropdownToggle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DropdownMenu right>
                  {pageSizes.map((size: any, index: any) => {
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
          </Collapse>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default injectIntl(ListPageHeading);
