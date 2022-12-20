/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import 'dropzone/dist/min/dropzone.min.css';

// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const ReactDOMServer = require('react-dom/server');

const dropzoneComponentConfig = {
  postUrl: 'https://httpbin.org/post',
};
const dropzoneConfig = {
  thumbnailHeight: 160,
  maxFilesize: 2,
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="dz-preview dz-file-preview mb-3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex flex-row ">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="p-0 w-30 position-relative">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="dz-error-mark">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i />{' '}
            </span>
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="dz-success-mark">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i />
            </span>
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="preview-container">
            {/*  eslint-disable-next-line jsx-a11y/alt-text */}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img data-dz-thumbnail className="img-thumbnail border-0" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-doc preview-icon" />
          </div>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            {' '}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span data-dz-name />{' '}
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="text-primary text-extra-small" data-dz-size />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="dz-progress">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="dz-upload" data-dz-uploadprogress />
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="dz-error-message">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span data-dz-errormessage />
          </div>
        </div>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <a href="#/" className="remove" data-dz-remove>
        {' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className="glyph-icon simple-icon-trash" />{' '}
      </a>
    </div>
  ),
  headers: { 'My-Awesome-Header': 'header value' },
};

export default class DropzoneExample extends Component {
  myDropzone: any;
  clear() {
    this.myDropzone.removeAllFiles(true);
  }

  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DropzoneComponent
        config={dropzoneComponentConfig}
        djsConfig={dropzoneConfig}
        eventHandlers={{
          init: (dropzone: any) => {
            this.myDropzone = dropzone;
          },
        }}
      />
    );
  }
}
