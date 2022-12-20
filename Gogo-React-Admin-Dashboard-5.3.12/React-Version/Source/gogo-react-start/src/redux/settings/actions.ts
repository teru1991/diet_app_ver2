// @ts-expect-error TS(2307): Cannot find module 'helpers/Utils' or its correspo... Remove this comment to see the full error message
import { setCurrentLanguage } from 'helpers/Utils';
import { CHANGE_LOCALE } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const changeLocale = (locale: any) => {
  setCurrentLanguage(locale);
  return {
    type: CHANGE_LOCALE,
    payload: locale,
  };
};
