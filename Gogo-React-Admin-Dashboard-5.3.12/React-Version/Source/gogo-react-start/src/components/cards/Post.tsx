/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import {
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
// @ts-expect-error TS(6142): Module '../pages/SingleLightbox' was resolved to '... Remove this comment to see the full error message
import SingleLightbox from '../pages/SingleLightbox';
// @ts-expect-error TS(6142): Module '../common/VideoPlayer' was resolved to '/U... Remove this comment to see the full error message
import VideoPlayer from '../common/VideoPlayer';
// @ts-expect-error TS(6142): Module '../pages/CommentWithLikes' was resolved to... Remove this comment to see the full error message
import CommentWithLikes from '../pages/CommentWithLikes';

const renderLikeAndCommentCount = (messages: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="mb-3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="post-icon mr-3 d-inline-block">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink to="#" location={{}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-heart mr-1" />
        </NavLink>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>125 {messages['pages.likes']}</span>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="post-icon mr-3 d-inline-block">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink to="#" location={{}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <i className="simple-icon-bubble mr-1" />
        </NavLink>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>6 {messages['pages.comments-title']}</span>
      </div>
    </div>
  );
};

const renderContent = (data: any) => {
  if (data.type === 'image') {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SingleLightbox
        thumb={data.image}
        large={data.image}
        className="img-fluid border-0 border-radius mb-3"
      />
    );
  }
  if (data.type === 'video') {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <VideoPlayer
        autoplay={false}
        controls
        className="video-js card-img video-content mb-3"
        poster={data.image}
        sources={[
          {
            src: data.video,
            type: 'video/mp4',
          },
        ]}
      />
    );
  }
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <></>;
};

const renderComments = (data: any) => {
  return data.comments.map((item: any, index: any) => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <CommentWithLikes data={item} key={index} />;
  });
};

const Post = ({
  data,
  className,
  intl
}: any) => {
  const { messages } = intl;
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className={className}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CardBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex flex-row mb-3">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavLink to="#" location={{}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img
              src={data.profilePic}
              alt="thumbnail"
              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
            />
          </NavLink>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="pl-3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to="#" location={{}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <p className="font-weight-medium mb-0 ">{data.name}</p>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <p className="text-muted mb-0 text-small">{data.date}</p>
            </NavLink>
          </div>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p>{data.detail}</p>
        {renderContent(data)}
        {renderLikeAndCommentCount(messages)}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mt-5 remove-last-border">{renderComments(data)}</div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputGroup className="comment-container">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Input placeholder={messages['pages.addComment']} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <InputGroupAddon addonType="append">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button color="primary">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span className="d-inline-block">{messages['pages.send']}</span>{' '}
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <i className="simple-icon-arrow-right ml-2" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </CardBody>
    </Card>
  );
};

export default injectIntl(React.memo(Post));
