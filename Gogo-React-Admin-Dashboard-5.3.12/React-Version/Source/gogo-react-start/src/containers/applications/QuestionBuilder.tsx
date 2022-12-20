/* eslint-disable consistent-return */
import React, { useState } from 'react';
import {
  Card,
  Button,
  Collapse,
  FormGroup,
  Label,
  Form,
  Input,
  Badge,
  CustomInput,
} from 'reactstrap';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from 'react-select';
import { ReactSortable } from 'react-sortablejs';

// @ts-expect-error TS(2307): Cannot find module 'components/common/CustomSelect... Remove this comment to see the full error message
import CustomSelectInput from 'components/common/CustomSelectInput';

const answerTypes = [
  { label: 'Text Area', value: '1', id: 1 },
  { label: 'Checkbox', value: '2', id: 2 },
  { label: 'Radiobutton', value: '3', id: 3 },
];

const SurveyQuestionBuilder = ({
  expanded,
  id,
  title,
  question,
  answerType,
  answers,
  order,
  deleteClick
}: any) => {
  const [collapse, setCollapse] = useState(expanded || false);
  const [mode, setMode] = useState('edit-quesiton');
  const [qId] = useState(id);
  const [qTitle, setQTitle] = useState(title);
  const [qQuestion, setQQuestion] = useState(question || '');
  const [qAnswerType, setQAnswerType] = useState(
    answerType
      ? answerTypes.find((item) => {
          return item.id === answerType;
        })
      : null
  );
  const [qAnswers, setQAnswers] = useState(answers || []);

  const editClick = () => {
    setMode('edit-quesiton');
    setCollapse(true);
  };

  const viewClick = () => {
    setMode('view-quesiton');
    setCollapse(true);
  };

  const typeChange = (aType: any) => {
    if (qAnswerType) {
      if ((qAnswerType.id === 2 || qAnswerType.id === 3) && aType.id === 1) {
        setQAnswers([]);
      }
    }
    setQAnswerType(aType);
  };

  const removeAnswer = (answerId: any) => {
    setQAnswers(qAnswers.filter((item: any) => item.id !== answerId));
  };

  const addAnswer = () => {
    let nextId = 0;
    if (qAnswers.length > 0) {
      const orderedAnswers = qAnswers.slice().sort((a: any, b: any) => {
        return a.id < b.id;
      });
      nextId = orderedAnswers[0].id + 1;
    }
    setQAnswers([...qAnswers, { id: nextId, label: '' }]);
  };

  const updateAnswer = (answerId: any, event: any) => {
    const answerIndex = qAnswers.findIndex((item: any) => item.id === answerId);
    const tempAnswers = [...qAnswers];
    tempAnswers[answerIndex].label = event.target.value;
    setQAnswers(tempAnswers);
  };

  const renderViewModeAnswers = () => {
    if (!qAnswerType) {
      return;
    }
    switch (qAnswerType.id) {
      case 1:
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Input type="text" />;
      case 2:
        return (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup>
            {qAnswers.map((answer: any) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CustomInput
                  key={answer.id}
                  type="checkbox"
                  id={`checkbox${qId}_${answer.id}`}
                  name={`checkbox${qId}`}
                  label={answer.label}
                />
              );
            })}
          </FormGroup>
        );
      case 3:
        return (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormGroup>
            {qAnswers.map((answer: any) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CustomInput
                  key={answer.id}
                  type="radio"
                  name={`radio${qId}`}
                  id={`radio${qId}_${answer.id}`}
                  label={answer.label}
                />
              );
            })}
          </FormGroup>
        );
      default:
        return (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Input type="text" placeholder="" value="" onChange={() => {}} />
        );
    }
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className={`question d-flex mb-4 ${mode}`}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex flex-grow-1 min-width-zero">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="heading-number d-inline-block">{order + 1}</span>
            {qTitle}
          </div>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            outline
            color="theme-3"
            className="icon-button ml-1 edit-button"
            onClick={() => editClick()}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-pencil" />
          </Button>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            outline
            color="theme-3"
            className="icon-button ml-1 view-button no-border"
            onClick={() => viewClick()}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-eye" />
          </Button>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            outline
            color="theme-3"
            className={`icon-button ml-1 rotate-icon-click ${
              collapse ? 'rotate' : ''
            }`}
            onClick={() => setCollapse(!collapse)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-arrow-down" />
          </Button>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            outline
            color="theme-3"
            className="icon-button ml-1"
            onClick={() => deleteClick(qId)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <i className="simple-icon-ban" />
          </Button>
        </div>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Collapse isOpen={collapse}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="card-body pt-0">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="edit-mode">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Form>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormGroup>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>Title</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Input
                  type="text"
                  value={qTitle}
                  onChange={(event) => setQTitle(event.target.value)}
                />
              </FormGroup>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormGroup>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>Question</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Input
                  type="text"
                  value={qQuestion}
                  onChange={(event) => setQQuestion(event.target.value)}
                />
              </FormGroup>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="separator mb-4 mt-4" />

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormGroup>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Label>Answer Type</Label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Select
                  components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  value={qAnswerType}
                  onChange={(t: any) => typeChange(t)}
                  options={answerTypes}
                />
              </FormGroup>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {qAnswers.length > 0 && <Label>Answers</Label>}

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ReactSortable
                list={qAnswers}
                setList={(newState) => setQAnswers(newState)}
                className="answers"
                options={{
                  handle: '.handle',
                }}
              >
                {qAnswers.map((item: any) => {
                  return (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormGroup data-id={item.id} key={item.id} className="mb-1">
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Input
                        type="text"
                        value={item.label}
                        autoFocus
                        onChange={(event) => {
                          updateAnswer(item.id, event);
                        }}
                      />
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="input-icons">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Badge className="handle" color="empty" pill>
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <i className="simple-icon-cursor-move" />
                        </Badge>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Badge
                          color="empty"
                          pill
                          onClick={() => removeAnswer(item.id)}
                        >
                          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <i className="simple-icon-close" />
                        </Badge>
                      </div>
                    </FormGroup>
                  );
                })}
              </ReactSortable>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="text-center">
                {qAnswerType && qAnswerType.id !== 1 && (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Button
                    outline
                    color="primary"
                    className="mt-3"
                    onClick={() => addAnswer()}
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <i className="simple-icon-plus btn-group-icon" /> Add Answer
                  </Button>
                )}
              </div>
            </Form>
          </div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="view-mode">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormGroup>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Label>{qQuestion}</Label>
              {renderViewModeAnswers()}
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </Card>
  );
};
export default SurveyQuestionBuilder;
