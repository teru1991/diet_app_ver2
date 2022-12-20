// @ts-expect-error TS(2307): Cannot find module 'helpers/Utils' or its correspo... Remove this comment to see the full error message
import { getCurrentLanguage } from 'helpers/Utils';
import { CHANGE_LOCALE } from '../constants';

const INIT_STATE = {
  locale: getCurrentLanguage(),
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };

    default:
      return { ...state };
  }
};
