import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import classnames from 'classnames';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const TabCardExamples = () => {
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Colxx xxs="12">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="cards.tab-card" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="12" xs="6" lg="3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardHeader>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav tabs className="card-header-tabs ">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavItem>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink
                      to="#"
                      // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '1',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('1');
                      }}
                    >
                      Tab 1
                    </NavLink>
                  </NavItem>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavItem>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink
                      to="#"
                      // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '2',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('2');
                      }}
                    >
                      Tab 2
                    </NavLink>
                  </NavItem>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavItem>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink
                      to="#"
                      // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '3',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('3');
                      }}
                    >
                      Tab 3
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TabContent activeTab={activeFirstTab}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TabPane tabId="1">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Colxx sm="12">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardBody>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CardTitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardTitle>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TabPane tabId="2">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Colxx sm="12">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardBody>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CardTitle className="mb-4">
                          Wedding Cake with Flowers Macarons and Blueberries
                        </CardTitle>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TabPane tabId="3">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Colxx sm="12">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardBody>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CardTitle className="mb-4">
                          Cheesecake with Chocolate Cookies and Cream Biscuits
                        </CardTitle>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="12" xs="6" lg="3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card className="mb-4">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardHeader className="pl-0 pr-0">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav tabs className=" card-header-tabs  ml-0 mr-0">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavItem className="w-50 text-center">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink
                      to="#"
                      // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                      location={{}}
                      className={classnames({
                        active: activeSecondTab === '1',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveSecondTab('1');
                      }}
                    >
                      Tab 1
                    </NavLink>
                  </NavItem>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NavItem className="w-50 text-center">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink
                      to="#"
                      // @ts-expect-error TS(2739): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                      location={{}}
                      className={classnames({
                        active: activeSecondTab === '2',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveSecondTab('2');
                      }}
                    >
                      Tab 2
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TabContent activeTab={activeSecondTab}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TabPane tabId="1">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Colxx sm="12">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardBody>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CardTitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardTitle>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TabPane tabId="2">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Colxx sm="12">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardBody>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CardTitle className="mb-4">
                          Wedding Cake with Flowers Macarons and Blueberries
                        </CardTitle>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <TabPane tabId="3">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Colxx sm="12">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <CardBody>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CardTitle className="mb-4">
                          Cheesecake with Chocolate Cookies and Cream Biscuits
                        </CardTitle>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default TabCardExamples;
