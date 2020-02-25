import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import '../dependencies/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import GlobalStyle from './GlobalStyle';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import Routes from './Routes';

export default function App() {

    const [themeState, setTheme] = useState(lightTheme);

    function switchTheme(){

        if(themeState.title === "light") setTheme(darkTheme);
        else setTheme(lightTheme);
    }

    return (
            <ThemeProvider theme={themeState}>
                <>

                    <GlobalStyle />

                    <Routes switchTheme={switchTheme} />

                </>
            </ThemeProvider>

    );
}