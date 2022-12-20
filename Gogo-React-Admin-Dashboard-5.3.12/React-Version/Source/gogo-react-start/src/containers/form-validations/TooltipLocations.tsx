import React from 'react';

import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'avai... Remove this comment to see the full error message
} from 'availity-reactstrap-validation';
import { Button, Label, Card, CardBody, Row } from 'reactstrap';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const TooltipLocations = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="mb-5">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h6 className="mb-4">Locations</h6>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvForm className="av-tooltip mb-5" onSubmit={() => {}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="error-l-100 tooltip-label-right">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Label Right</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input1" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Label Right!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="tooltip-center-top">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Top Center</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input2" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Top Center!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="tooltip-center-bottom">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Bottom Center</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input3" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Bottom Center!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="tooltip-left-top">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Top Left</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input4" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Top Left!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="tooltip-right-top">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Top Right</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input5" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Top Right!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="tooltip-left-bottom">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Bottom Left</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input6" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Bottom Left!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AvGroup className="tooltip-right-bottom">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Label>Bottom Right</Label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvInput name="input7" required />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AvFeedback>Bottom Right!</AvFeedback>
          </AvGroup>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button color="primary">Submit</Button>
        </AvForm>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h6 className="mb-4">Label Right Position Helpers</h6>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvForm
          className="av-tooltip mb-5 tooltip-label-right"
          onSubmit={() => {}}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-0">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-0</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input8" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-0</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-25">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-25</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input9" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-25</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-50">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-50</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input10" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-50</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-75">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-75</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input11" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-75</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-100">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-100</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input12" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-100</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-125">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-125</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input13" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-125</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-150">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-150</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input14" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-150</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-175">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-175</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input15" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-175</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-200">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-200</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input16" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-200</AvFeedback>
              </AvGroup>
            </Colxx>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-225">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-225</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input17" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-225</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-250">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-250</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input18" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-250</AvFeedback>
              </AvGroup>
            </Colxx>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Colxx xxs="12" sm="6">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AvGroup className="error-l-275">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>error-l-275</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvInput name="input19" required />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AvFeedback>error-l-275</AvFeedback>
              </AvGroup>
            </Colxx>
          </Row>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button color="primary">Submit</Button>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default TooltipLocations;
