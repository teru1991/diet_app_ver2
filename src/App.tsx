import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import {
    getDirection
} from "./utils/utils";

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

}

const mapStateToProps = (
    {settings}: any) => {const { locale } = settings;
    return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);