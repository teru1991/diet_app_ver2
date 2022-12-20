import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// eslint-disable-next-line import/prefer-default-export
export function configureStore(initialState: any) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  // @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
  if (module.hot) {
    // @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
    module.hot.accept('./reducers', () => {
      // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
