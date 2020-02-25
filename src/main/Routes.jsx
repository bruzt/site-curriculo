import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes(props) {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Home} switchTheme={props.switchTheme}  />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}