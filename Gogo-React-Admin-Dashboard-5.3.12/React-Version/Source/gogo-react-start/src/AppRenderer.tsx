import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import reportWebVitals from './reportWebVitals';

// @ts-expect-error TS(6142): Module './App' was resolved to '/Users/itahashikei... Remove this comment to see the full error message
const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

const Main = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Provider store={configureStore()}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suspense fallback={<div className="loading" />}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <App />
      </Suspense>
    </Provider>
  );
};

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
reportWebVitals();
