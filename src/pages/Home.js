import React from 'react';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Skills from '../components/Skills';

export default function Home() {

    return (
        <Container>

            <Bio />

            <Skills />

        </Container>
    );
}

const Container = styled.div`
    margin: 50px 0 0 0;
`;
