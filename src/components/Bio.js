import React from 'react';
import styled from 'styled-components';

import fotoPerfil from '../assets/img/bruno.jpg';
import cv from '../assets/pdf/bruno-zutim-cv.pdf';

export default function Bio() {

    return (
        <Container>

            <div className='photo-bio'>
                <div className='photo'>
                    <img src={fotoPerfil} alt="foto prefil"/>
                </div>
                <div className='bio'>
                    <p>
                        Concluí o ultimo semestre de Ciência da Computação em dezembro/2018 na UNIP-
                        Limeira e busco uma oportunidade de trabalho na área de desenvolvimento de software.
                        Tenho interesse e estudo desenvolvimento de aplicações backend e frontend em Javascript
                        com as bibliotecas React (Web), React Native (Mobile), e os frameworks Electron (Desktop)
                        e Express.js (Node.js).
                    </p>
                </div>
            </div>

            <div className='data-networks'>

                <div className="data">
                    <p className="name">Bruno Zutim</p>
                    <div className="infos">
                        <div>
                            <p>Cidade</p>        
                            <p>Telefone</p>        
                            <p>e-mail</p>        
                        </div>

                        <div>
                            <p>:</p>        
                            <p>:</p>        
                            <p>:</p>        
                        </div>

                        <div className='values'>
                            <p>Cordeirópolis</p>
                            <div className="border-values" />
                            <p>(19) 9-9253-0189</p>  
                            <div className="border-values" />
                            <p>bzutim@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="networks">
                    <ul>
                        <li>
                            <button onClick={() => window.open(cv)}>
                                Download CV
                            </button>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/bruno-zutim-40877010a/" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/bruzt" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-github'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/brunozutim" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/bzutim" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-facebook'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: 510px;
    margin: 0 auto;
    border: 2px solid ${(props) => props.theme.secondary};

    display: grid;
    grid-template-columns: 279px 1fr;

    .photo-bio {
        display: grid;
        grid-template-rows: 1fr 1fr;
        border-right: 2px solid ${(props) => props.theme.secondary};
    
        .photo {
            margin: 0 auto;

            img {
                max-width:298px;
                max-height:248px;
                width: auto;
                height: auto;
            }
        }

        .bio {
            p {
                text-align: justify;
                padding: 10px;
            }
        } 
    }

    .data-networks {
        display: grid;
        grid-template-rows: 1fr 50px;

        .data {
            padding: 10px 10px 10px 50px;

            .name {
                font-size: 30px;
                font-weight: bold;
                margin: 50px 0 0 0;
                color: ${(props) => props.theme.primary};
            }

            .infos {
                display: grid;
                grid-template-columns: 100px 50px 1fr;
                font-size: 20px;
                
                div {
                    margin: 50px 0 0 0;

                    p {
                        padding: 25px 0 25px 0;
                        
                    }
                }

                .values {
                    .border-values {
                        margin: 0;
                        border-bottom: 2px solid ${(props) => props.theme.secondary};
                    }
                }
            }
        }

        .networks {
            border-top: 2px solid ${(props) => props.theme.secondary};

            ul {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin: 8px 0 0 0;

                li {
                    
                    i {
                        color: ${(props) => props.theme.text};
                        font-size: 30px;
                    }

                    button {
                        padding: 5px 10px;
                        border: none;
                        background: ${(props) => props.theme.primary};
                        color: ${(props) => props.theme.background};
                    }
                }
            }
        }
    }
`;
