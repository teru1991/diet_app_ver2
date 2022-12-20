import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from 'react-select';
// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomSelect... Remove this comment to see the full error message
import CustomSelectInput from 'components/common/CustomSelectInput';
// @ts-expect-error TS(2307): Cannot find module 'helpers/IntlMessages' or its c... Remove this comment to see the full error message
import IntlMessages from 'helpers/IntlMessages';

// @ts-expect-error TS(2307): Cannot find module 'redux/actions' or its correspo... Remove this comment to see the full error message
import { addTodoItem } from 'redux/actions';

const initialState = {
  title: '',
  detail: '',
  label: {},
  category: {},
  status: 'PENDING',
};

const AddNewTodoModal = ({
  modalOpen,
  toggleModal,
  labels,
  categories,
  addTodoItemAction
}: any) => {
  const [state, setState] = useState(initialState);

  const addNetItem = () => {
    const newItem = {
      title: state.title,
      detail: state.detail,
      // @ts-expect-error TS(2339): Property 'value' does not exist on type '{}'.
      label: state.label.value,
      // @ts-expect-error TS(2339): Property 'color' does not exist on type '{}'.
      labelColor: state.label.color,
      // @ts-expect-error TS(2339): Property 'value' does not exist on type '{}'.
      category: state.category.value,
      status: state.status,
    };
    addTodoItemAction(newItem);
    toggleModal();
    setState(initialState);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalHeader toggle={toggleModal}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IntlMessages id="todo.add-new-title" />
      </ModalHeader>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalBody>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Label className="mt-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.title" />
        </Label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Input
          type="text"
          defaultValue={state.title}
          onChange={(event) =>
            setState({ ...state, title: event.target.value })
          }
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Label className="mt-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.detail" />
        </Label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Input
          type="textarea"
          defaultValue={state.detail}
          onChange={(event) =>
            setState({ ...state, detail: event.target.value })
          }
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Label className="mt-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.category" />
        </Label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories.map((x: any, i: any) => {
            return { label: x, value: x, key: i };
          })}
          value={state.category}
          onChange={(val: any) => setState({ ...state, category: val })}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Label className="mt-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.label" />
        </Label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={labels.map((x: any, i: any) => {
            return {
              label: x.label,
              value: x.label,
              key: i,
              color: x.color,
            };
          })}
          value={state.label}
          onChange={(val: any) => setState({ ...state, label: val })}
        />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Label className="mt-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.status" />
        </Label>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CustomInput
          type="radio"
          id="exCustomRadio"
          name="customRadio"
          label="COMPLETED"
          checked={state.status === 'COMPLETED'}
          onChange={(event) =>
            setState({
              ...state,
              status: event.target.value === 'on' ? 'COMPLETED' : 'PENDING',
            })
          }
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CustomInput
          type="radio"
          id="exCustomRadio2"
          name="customRadio2"
          label="PENDING"
          defaultChecked={state.status === 'PENDING'}
          onChange={(event) =>
            setState({
              ...state,
              status: event.target.value !== 'on' ? 'COMPLETED' : 'PENDING',
            })
          }
        />
      </ModalBody>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalFooter>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button color="secondary" outline onClick={toggleModal}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.cancel" />
        </Button>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button color="primary" onClick={() => addNetItem()}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IntlMessages id="todo.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({
  todoApp
}: any) => {
  const { labels, categories } = todoApp;
  return {
    labels,
    categories,
  };
};
export default connect(mapStateToProps, {
  addTodoItemAction: addTodoItem,
})(AddNewTodoModal);
