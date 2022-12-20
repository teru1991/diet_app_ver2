/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const SwitchExamples = () => {
  const [checkedPrimary, setCheckedPrimary] = useState(false);
  const [checkedSecondary, setCheckedSecondary] = useState(true);
  const [checkedPrimaryInverse, setCheckedPrimaryInverse] = useState(true);
  const [checkedSecondaryInverse, setCheckedSecondaryInverse] = useState(false);

  const [checkedPrimarySmall, setCheckedPrimarySmall] = useState(false);
  const [checkedSecondarySmall, setCheckedSecondarySmall] = useState(true);
  const [checkedPrimaryInverseSmall, setCheckedPrimaryInverseSmall] = useState(
    true
  );
  const [
    checkedSecondaryInverseSmall,
    setCheckedSecondaryInverseSmall,
  ] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardTitle>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="form-components.switch" />
        </CardTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.primary" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-primary"
              checked={checkedPrimary}
              onChange={(primary) => setCheckedPrimary(primary)}
            />
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.secondary" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-secondary"
              checked={checkedSecondary}
              onChange={(secondary) => setCheckedSecondary(secondary)}
            />
          </Colxx>
        </Row>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.primary-inverse" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-primary-inverse"
              checked={checkedPrimaryInverse}
              onChange={(primaryInverse) =>
                setCheckedPrimaryInverse(primaryInverse)
              }
            />
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.secondary-inverse" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-secondary-inverse"
              checked={checkedSecondaryInverse}
              onChange={(secondaryInverse) =>
                setCheckedSecondaryInverse(secondaryInverse)
              }
            />
          </Colxx>
        </Row>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.primary" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-primary custom-switch-small"
              checked={checkedPrimarySmall}
              onChange={(primary) => setCheckedPrimarySmall(primary)}
            />
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.secondary" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={checkedSecondarySmall}
              onChange={(secondary) => setCheckedSecondarySmall(secondary)}
            />
          </Colxx>
        </Row>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.primary-inverse" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-primary-inverse custom-switch-small"
              checked={checkedPrimaryInverseSmall}
              onChange={(primaryInverse) =>
                setCheckedPrimaryInverseSmall(primaryInverse)
              }
            />
          </Colxx>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Colxx xxs="6">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IntlMessages id="form-components.secondary-inverse" />
            </label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Switch
              className="custom-switch custom-switch-secondary-inverse custom-switch-small"
              checked={checkedSecondaryInverseSmall}
              onChange={(secondaryInverse) =>
                setCheckedSecondaryInverseSmall(secondaryInverse)
              }
            />
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
};
export default SwitchExamples;
