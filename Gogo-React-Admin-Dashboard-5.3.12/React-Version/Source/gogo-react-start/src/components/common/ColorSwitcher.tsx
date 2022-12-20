/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { FormGroup, Label, CustomInput } from 'reactstrap';
import {
  getCurrentColor,
  setCurrentColor,
  getCurrentRadius,
  setCurrentRadius,
// @ts-expect-error TS(2307): Cannot find module 'helpers/Utils' or its correspo... Remove this comment to see the full error message
} from 'helpers/Utils';
// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { colors } from 'constants/defaultValues';

const ColorSwitcher = () => {
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor] = useState(getCurrentColor());
  const [radius, setRadius] = useState(getCurrentRadius());

  useEffect(() => {
    if (radius === 'flat') {
      document.body.classList.remove('rounded');
    } else {
      document.body.classList.add('rounded');
    }
    setCurrentRadius(radius);
    if (isOpen) setIsOpen(false);
  }, [radius]);

  const handleDocumentClick = (e: any) => {
    if (isOpen) {
      const container = containerRef.current;
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      if (container.contains(e.target) || container === e.target) {
        return;
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    ['click', 'touchstart'].forEach((event) =>
      document.addEventListener(event, handleDocumentClick, false)
    );

    return () => {
      ['click', 'touchstart'].forEach((event) =>
        document.removeEventListener(event, handleDocumentClick, false)
      );
    };
  }, [isOpen]);

  const changeThemeColor = (e: any, color: any) => {
    e.preventDefault();
    setCurrentColor(color);
    setIsOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div ref={containerRef} className={`theme-colors ${isOpen ? 'shown' : ''}`}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="p-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className="text-muted mb-2">Light Theme</p>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex flex-row justify-content-between mb-3">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {colors.slice(0, 5).map((color: any) => <a
            key={`light.${color}`}
            href={`#light.${color}`}
            className={`theme-color theme-color-${color} ${
              selectedColor === `light.${color}` ? 'active' : ''
            }`}
            onClick={(e) => changeThemeColor(e, `light.${color}`)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>{` `}</span>
          </a>)}
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex flex-row justify-content-between mb-4">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {colors.slice(5, 10).map((color: any) => <a
            key={`light.${color}`}
            href={`#light.${color}`}
            className={`theme-color theme-color-${color} ${
              selectedColor === `light.${color}` ? 'active' : ''
            }`}
            onClick={(e) => changeThemeColor(e, `light.${color}`)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>{` `}</span>
          </a>)}
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className="text-muted mb-2">Dark Theme</p>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex flex-row justify-content-between mb-3">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {colors.slice(0, 5).map((color: any) => <a
            key={`dark.${color}`}
            href={`#dark.${color}`}
            className={`theme-color theme-color-${color} ${
              selectedColor === `dark.${color}` ? 'active' : ''
            }`}
            onClick={(e) => changeThemeColor(e, `dark.${color}`)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>{` `}</span>
          </a>)}
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex flex-row justify-content-between">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {colors.slice(5, 10).map((color: any) => <a
            key={`dark.${color}`}
            href={`#dark.${color}`}
            className={`theme-color theme-color-${color} ${
              selectedColor === `dark.${color}` ? 'active' : ''
            }`}
            onClick={(e) => changeThemeColor(e, `dark.${color}`)}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>{` `}</span>
          </a>)}
        </div>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className=" pb-0 pl-4 pt-4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FormGroup>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Label for="radiusRadio">Border Radius </Label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              type="radio"
              name="radiusRadio"
              id="rounded"
              label="Rounded"
              inline
              defaultChecked={radius === 'rounded'}
              onChange={() => setRadius('rounded')}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomInput
              type="radio"
              name="radiusRadio"
              id="flat"
              label="Flat"
              inline
              defaultChecked={radius === 'flat'}
              onChange={() => setRadius('flat')}
            />
          </div>
        </FormGroup>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <a
        href="#section"
        className="theme-button"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className="simple-icon-magic-wand" />{' '}
      </a>
    </div>
  );
};

export default ColorSwitcher;
