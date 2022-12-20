/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-classes-per-file */
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from 'react-select';
import { CustomInput } from 'reactstrap';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormikReactSelect = ({
  name,
  value,
  options,
  isMulti,
  className,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    onChange(name, val);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Select
      className={`react-select ${className}`}
      classNamePrefix="react-select"
      options={options}
      isMulti={isMulti}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
  );
};

const FormikCheckboxGroup = ({
  name,
  value,
  options,
  inline = false,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    const valueArray = [...value] || [];
    if (!valueArray.includes(val)) {
      valueArray.push(val);
    } else {
      valueArray.splice(valueArray.indexOf(val), 1);
    }
    onChange(name, valueArray);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {options.map((child: any, index: any) => {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div
          key={`${name}_${child.value}_${index}`}
          className={`position-relative form-check ${
            inline ? 'form-check-inline' : ''
          }`}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            name={name}
            type="checkbox"
            className="form-check-input"
            onChange={() => handleChange(child.value)}
            onBlur={handleBlur}
            defaultChecked={value.includes(child.value)}
            disabled={child.disabled}
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label className="form-check-label">{child.label}</label>
        </div>
      );
    })}
  </>;
};

const FormikCustomCheckboxGroup = ({
  name,
  value,
  options,
  inline = false,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    const valueArray = [...value] || [];
    if (!valueArray.includes(val)) {
      valueArray.push(val);
    } else {
      valueArray.splice(valueArray.indexOf(val), 1);
    }
    onChange(name, valueArray);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {options.map((child: any, index: any) => {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CustomInput
          key={`${name}_${child.value}_${index}`}
          id={`${name}_${child.value}_${index}`}
          type="checkbox"
          name={child.name}
          label={child.label}
          onChange={() => handleChange(child.value)}
          onBlur={handleBlur}
          checked={value.includes(child.value)}
          disabled={child.disabled}
          inline={inline}
        />
      );
    })}
  </>;
};

const FormikCheckbox = ({
  name,
  value,
  disabled,
  label,
  onChange,
  onBlur
}: any) => {
  const handleChange = (_event: any) => {
    onChange(name, !value);
  };
  const handleBlur = () => {
    onBlur(name, true);
  };
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="position-relative form-check form-check-inline">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <input
        name={name}
        type="checkbox"
        className="form-check-input"
        onChange={handleChange}
        onBlur={handleBlur}
        checked={value}
        disabled={disabled}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <label className="form-check-label">{label}</label>
    </div>
  );
};

const FormikCustomCheckbox = ({
  name,
  value,
  disabled,
  label,
  onChange,
  onBlur
}: any) => {
  const handleChange = (_event: any) => {
    onChange(name, !value);
  };
  const handleBlur = () => {
    onBlur(name, true);
  };
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CustomInput
      type="checkbox"
      id={name}
      name={name}
      label={label}
      onChange={handleChange}
      onBlur={handleBlur}
      checked={value}
      disabled={disabled}
      inline
    />
  );
};

const FormikRadioButtonGroup = ({
  name,
  value,
  options,
  inline = false,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    onChange(name, val);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {options.map((child: any, index: any) => {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div
          key={`${name}_${child.value}_${index}`}
          className={`position-relative form-check ${
            inline ? 'form-check-inline' : ''
          }`}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            id={child.value}
            name={name}
            type="radio"
            className="form-check-input"
            onChange={() => handleChange(child.value)}
            onBlur={handleBlur}
            defaultChecked={value === child.value}
            disabled={child.disabled}
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label className="form-check-label">{child.label}</label>
        </div>
      );
    })}
  </>;
};

const FormikCustomRadioGroup = ({
  name,
  value,
  options,
  inline = false,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    onChange(name, val);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {options.map((child: any, index: any) => {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CustomInput
          key={`${name}_${child.value}_${index}`}
          type="radio"
          id={`${name}_${child.value}_${index}`}
          name={child.name}
          label={child.label}
          onChange={() => handleChange(child.value)}
          onBlur={handleBlur}
          checked={value === child.value}
          disabled={child.disabled}
          inline={inline}
        />
      );
    })}
  </>;
};

const FormikTagsInput = ({
  name,
  value,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    onBlur(name, true);
    onChange(name, val);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <TagsInput name={name} value={value} onChange={handleChange} />;
};

const FormikSwitch = ({
  name,
  value,
  className,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    onBlur(name, true);
    onChange(name, val);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Switch
      // @ts-expect-error TS(2322): Type '{ name: any; className: any; checked: any; o... Remove this comment to see the full error message
      name={name}
      className={className}
      checked={value}
      onChange={handleChange}
    />
  );
};

const FormikDatePicker = ({
  name,
  value,
  className,
  onChange,
  onBlur
}: any) => {
  const handleChange = (val: any) => {
    onChange(name, val);
  };

  const handleBlur = (_val: any) => {
    onBlur(name, true);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DatePicker
      name={name}
      className={className}
      selected={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export {
  FormikReactSelect,
  FormikCheckboxGroup,
  FormikCustomCheckboxGroup,
  FormikCheckbox,
  FormikCustomCheckbox,
  FormikRadioButtonGroup,
  FormikCustomRadioGroup,
  FormikTagsInput,
  FormikSwitch,
  FormikDatePicker,
};
