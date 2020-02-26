import React from 'react';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home(props) {

    return (
        <Container>

            <Bio />

            <Skills />

            <Footer switchTheme={props.switchTheme} />

        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
`;
