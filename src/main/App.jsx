import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

export default function App() {

    const [themeState, setTheme] = useState(() => {

        const theme = JSON.parse(localStorage.getItem('theme'));

        if(theme){
    
            return theme;
    
        } else {
    
            localStorage.setItem('theme', JSON.stringify(lightTheme));
            return lightTheme;
        }
    });

    function switchTheme(){
        
        if(themeState.title === "light"){

            localStorage.setItem('theme', JSON.stringify(darkTheme));
            setTheme(darkTheme);

        } else {

            localStorage.setItem('theme', JSON.stringify(lightTheme));
            setTheme(lightTheme)
        }
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