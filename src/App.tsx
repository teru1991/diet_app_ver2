import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import ColorSwitcher from './components/ClorSwitcher';
import { NotificationContainer } from './components/react-notifications';
import { isMultiColorActive, adminRoot } from './stores/defaultValues';
import {
    getDirection
} from "./utils/Utils";
import {IntlProvider} from "react-intl";

const ViewTop = React.lazy(() =>

    import(/* webpackChunkName: "views" */ './views/Top')
);
// const ViewApp = React.lazy(() =>
//     import(/* webpackChunkName: "views-app" */ './views/app')
// );

const ViewError = React.lazy(() =>

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


        const {locale}: any = this.props;

        return (

            <div className="h-100">
                    <>
                        <NotificationContainer></NotificationContainer>
                        {isMultiColorActive && <ColorSwitcher/>}
                        <Suspense fallback={<div className="loading"/>}>
                            <Router>
                                <Switch>
                                    <Route
                                        path={adminRoot}
                                        render={(props) => <ViewApp {...props} />}
                                    />
                                    <Route
                                        path="/error"
                                        exact
                                        render={(props) => <ViewError {...props} />}
                                    />
                                    <Route
                                        path="/"
                                        exact
                                        render={(props) => <ViewTop {...props} />}
                                    />

                                    <Redirect to="/error"/>
                                    {/*
                      <Redirect exact from="/" to={adminRoot} />
                      */}

                                    <Redirect to="/error"/>
                                </Switch>
                            </Router>
                        </Suspense>
                    </>
            </div>
        );
    };
}
const mapStateToProps = (
    {settings}: any) => {const { locale } = settings;
    return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);