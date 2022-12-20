import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomBootst... Remove this comment to see the full error message
import { Colxx } from 'components/common/CustomBootstrap';

const ImageListView = ({
  product,
  isSelect,
  collect,
  onCheckItem
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product.id}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
          onClick={(event) => onCheckItem(event, product.id)}
          className={classnames({
            active: isSelect,
          })}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="position-relative">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CardImg top alt={product.title} src={product.img} />
            </NavLink>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Badge
              color={product.statusColor}
              pill
              className="position-absolute badge-top-left"
            >
              {product.status}
            </Badge>
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardBody>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Colxx xxs="2">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CustomInput
                  className="item-check mb-0"
                  type="checkbox"
                  id={`check_${product.id}`}
                  checked={isSelect}
                  onChange={() => {}}
                  label=""
                />
              </Colxx>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Colxx xxs="10" className="mb-3">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardSubtitle>{product.title}</CardSubtitle>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {product.date}
                </CardText>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
