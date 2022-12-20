/* eslint-disable no-unused-expressions */
// @ts-expect-error TS(7016): Could not find a declaration file for module 'mous... Remove this comment to see the full error message
import mousetrap from 'mousetrap';
import { useEffect, useRef } from 'react';

/**
 * Use mousetrap hook
 *
 * @param  {(string | string[])} handlerKey - A key, key combo or array of combos according to Mousetrap documentation.
 * @param  { function } handlerCallback - A function that is triggered on key combo catch.
 */
export default (handlerKey: any, handlerCallback: any) => {
  const actionRef = useRef(null);
  actionRef.current = handlerCallback;

  useEffect(() => {
    mousetrap.bind(handlerKey, (evt: any, combo: any) => {
      // @ts-expect-error TS(2349): This expression is not callable.
      typeof actionRef.current === 'function' && actionRef.current(evt, combo);
      evt.preventDefault();
    });
    return () => {
      mousetrap.unbind(handlerKey);
    };
  }, [handlerKey]);
};
