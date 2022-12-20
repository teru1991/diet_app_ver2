/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'reactstrap';

const ApplicationMenu = ({
  children
}: any) => {
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div ref={containerRef} className={`app-menu ${isOpen ? 'shown' : ''}`}>
      {children}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavLink
        className="app-menu-button d-inline-block d-xl-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className="simple-icon-options" />
      </NavLink>
    </div>
  );
};

export default ApplicationMenu;
