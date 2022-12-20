/* eslint-disable react/no-danger */
import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
// @ts-expect-error TS(6142): Module '../common/CustomBootstrap' was resolved to... Remove this comment to see the full error message
import { Colxx } from '../common/CustomBootstrap';

const SurveyDetailCard = ({
  survey
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx xxs="12" lg="4" className="mb-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className="mb-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CardBody>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="list-item-heading mb-4">Summary</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small mb-2">Name</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="mb-3">{survey.title}</p>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small mb-2">Details</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p
            className="mb-3"
            dangerouslySetInnerHTML={{
              __html: survey.detail,
            }}
          />

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small mb-2">Category</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="mb-3">{survey.category}</p>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p className="text-muted text-small mb-2">Label</p>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="d-sm-inline-block mb-1">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Badge color={survey.labelColor} pill>
                {survey.label}
              </Badge>
            </p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="d-sm-inline-block  mb-1" />
          </div>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default React.memo(SurveyDetailCard);
