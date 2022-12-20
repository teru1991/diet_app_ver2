/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/applications/Survey... Remove this comment to see the full error message
import SurveyQuota from 'components/applications/SurveyQuota';

import quotas from '../../data/survey.quotas';

const SurveyQuotas = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" lg="4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="list-item-heading mb-4">Quota</p>
          {quotas.map((quota, index) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <SurveyQuota
              key={`quota_${index}`}
              title={quota.title}
              data={quota.data}
            />
          ))}
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default SurveyQuotas;
