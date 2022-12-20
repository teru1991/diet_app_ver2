import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
// @ts-expect-error TS(6142): Module './components/common/ColorSwitcher' was res... Remove this comment to see the full error message
import ColorSwitcher from './components/common/ColorSwitcher';
import { NotificationContainer } from './components/common/react-notifications';
import { isMultiColorActive, adminRoot } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';

const ViewHome = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './views/home' was resolved to '/Users/itah... Remove this comment to see the full error message
  import(/* webpackChunkName: "views" */ './views/home')
);
const ViewApp = React.lazy(() =>
  // @ts-expect-error TS(2322): Type 'Promise<typeof import("/Users/itahashikeiji/... Remove this comment to see the full error message
  import(/* webpackChunkName: "views-app" */ './views/app')
);

const ViewError = React.lazy(() =>
  // @ts-expect-error TS(6142): Module './views/error' was resolved to '/Users/ita... Remove this comment to see the full error message
  import(/* webpackChunkName: "views-error" */ './views/error')
);

class App extends React.Component {
  constructor(props: any) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  render() {
    // @ts-expect-error TS(2339): Property 'locale' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { locale } = this.props;
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const currentAppLocale = AppLocale[locale];

    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="h-100">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NotificationContainer />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {isMultiColorActive && <ColorSwitcher />}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Suspense fallback={<div className="loading" />}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Router>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Switch>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Route
                    path={adminRoot}
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    render={(props) => <ViewApp {...props} />}
                  />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Route
                    path="/error"
                    exact
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    render={(props) => <ViewError {...props} />}
                  />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Route
                    path="/"
                    exact
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    render={(props) => <ViewHome {...props} />}
                  />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Redirect to="/error" />
                  {/*
                  <Redirect exact from="/" to={adminRoot} />
                  */}
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({
  settings
}: any) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
