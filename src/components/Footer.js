import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props) {

    return (
        <Container>
            <p>Bruno Zutim, 2020</p>
            <p>Este site foi feito em React por mim</p>
            <p>Você pode ver o código fonte <a href="https://github.com/bruzt/site-curriculo" target="_blank" rel="noopener noreferrer">aqui</a></p>
        
            <div className="theme-button">
                <button type='button' onClick={props.switchTheme} title='Tema'>
                    <FontAwesomeIcon className='fai' icon={faPalette} />
                </button>
            </div>
        </Container>
    );
}

const Container = styled.footer`
    border-top: 2px solid ${(props) => props.theme.secondary};
    margin: 50px auto 0 auto;
    padding: 10px;
    width: 100%;
    height: 120px;
    text-align: center;

    p {
        line-height: 30px;

        a {
            color: ${(props) => props.theme.primary};
            text-decoration: none;
        }
    }

    .theme-button {
        position: relative;
        
        button {
            position: absolute;
            bottom: 5px;
            right: 5px;
            background: transparent;
            border: none;
            outline: none !important;
        }

        .fai {
            font-size: 30px;
            color: ${(props) => props.theme.text}
        }
    }

    @media (max-width: 700px){
        margin: 470px 0 0 0;
    }
`;