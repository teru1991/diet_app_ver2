import React, { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = (suggestion: any) => suggestion.name;

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

const ReactAutoSuggest = ({
  data,
  value,
  placeholder,
  onChange
}: any) => {
  const [valueState, setValueState] = useState(value);
  const [dataState] = useState(data || []);
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (val: any) => {
    if (val) {
      const inputValue = val.trim().toLowerCase();
      const inputLength = inputValue.length;

      return inputLength === 0
        ? []
        : dataState.filter(
            (d: any) => d.name.toLowerCase().slice(0, inputLength) === inputValue
          );
    }
    return dataState;
  };

  const changeInput = (event: any, {
    newValue
  }: any) => {
    setValueState(newValue);
    onChange(newValue);
  };

  // @ts-expect-error TS(7031): Binding element 'val' implicitly has an 'any' type... Remove this comment to see the full error message
  const onSuggestionsFetchRequested = ({ value: val }) => {
    setSuggestions(getSuggestions(val));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: placeholder || '',
    value: valueState,
    onChange: changeInput,
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{
        container: 'autosuggest',
        input: 'form-control',
        inputOpen: 'react-autosuggest__input--open',
        suggestionsContainer: 'react-autosuggest__suggestions-container',
        suggestionsContainerOpen:
          'react-autosuggest__suggestions-container--open',
        suggestionsList: `react-autosuggest__suggestions-list ${
          suggestions.length ? 'show' : ''
        }`,
        suggestionFocused: 'active',
        suggestion: 'react-autosuggest__suggestion',
      }}
    />
  );
};

export default ReactAutoSuggest;
