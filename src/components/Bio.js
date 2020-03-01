import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import fotoPerfil from '../assets/img/bruno.jpg';
import cv from '../assets/pdf/bruno-zutim-cv.pdf';

export default function Bio() {

    useEffect( () => {

        document.getElementById('tel').innerHTML = '(19) 9-9253-0189';
        document.getElementById('eaddr').innerHTML = 'bzutim@gmail.com';

    }, []);

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
                    <h1 className="name">Bruno Zutim</h1>
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
                            <p id='tel' />
                            <div className="border-values" />
                            <p id='eaddr' />
                        </div>
                    </div>
                </div>

                <div className="networks">
                    <ul>
                        <li>
                            <button type='button' onClick={() => window.open(cv)}>
                                Download CV
                            </button>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/bruno-zutim-40877010a/" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                                <FontAwesomeIcon className='fai' icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/bruzt" target="_blank" rel="noopener noreferrer" title='Github'>
                                <FontAwesomeIcon className='fai' icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/brunozutim" target="_blank" rel="noopener noreferrer" title='Twitter'>
                                <FontAwesomeIcon className='fai' icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/bzutim" target="_blank" rel="noopener noreferrer" title='Facebook'>
                                <FontAwesomeIcon className='fai' icon={faFacebook} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    max-width: 800px;
    height: 510px;
    margin: 50px auto 0 auto;
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
                line-height: 22px;
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

                    .d-none {
                        display: none;
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
                    
                    .fai {
                        color: ${(props) => props.theme.text};
                        font-size: 30px;
                    }

                    button {
                        padding: 5px 10px;
                        border: none;
                        background: ${(props) => props.theme.primary};
                        color: ${(props) => props.theme.background};

                        :hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 450px 450px;
        margin: 10px 0 0 0;
        border: none;

        .photo-bio {
            border: none;
            border-bottom: 2px solid ${(props) => props.theme.secondary};
        }

        .data-networks {
            border: none;
            border-bottom: 2px solid ${(props) => props.theme.secondary};

            .data {
                padding: 10px;

                .name {
                    margin: 30px 0 0 0;
                }
            }
        }
    }
`;
