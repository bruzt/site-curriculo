import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {

    return (
        <Container>

            <div className="skills">
                <p className='title'>SKILLS</p>
                <div className="scopes">
                    <p><FontAwesomeIcon className='fai' icon={faPlus} /> Desenvolvimento Web</p>
                    <p><FontAwesomeIcon className='fai' icon={faPlus} /> Desenvolvimento Mobile</p>
                    <p><FontAwesomeIcon className='fai' icon={faPlus} /> Desenvolvimento Desktop</p>
                    <p><FontAwesomeIcon className='fai' icon={faPlus} /> Desenvolvimento Backend</p>
                </div>
            </div>

            <div className="techs">
                <p>Javascript</p>
                <div className="progress-b pb80" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>React</p>
                <div className="progress-b pb80" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>React Native</p>
                <div className="progress-b pb60" style={{ width: '60%' }}>
                    <span>60%</span>
                </div>
                <p>Electron</p>
                <div className="progress-b pb50" style={{ width: '50%' }}>
                    <span>50%</span>
                </div>
                <p>HTML5</p>
                <div className="progress-b pb90" style={{ width: '90%' }}>
                    <span>90%</span>
                </div>
                <p>CSS3</p>
                <div className="progress-b pb70" style={{ width: '70%' }}>
                    <span>70%</span>
                </div>
                <p>CSS Animations</p>
                <div className="progress-b pb40" style={{ width: '40%' }}>
                    <span>40%</span>
                </div>
                <p>Node.js</p>
                <div className="progress-b pb80" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>Express.js</p>
                <div className="progress-b pb80" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>SQL</p>
                <div className="progress-b pb60" style={{ width: '60%' }}>
                    <span>60%</span>
                </div>
                <p>MongoDB</p>
                <div className="progress-b pb70" style={{ width: '70%' }}>
                    <span>70%</span>
                </div>
            </div>

        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    max-width: 800px;
    height: 510px;
    margin: 50px auto 0 auto;
    border: 2px solid ${(props) => props.theme.secondary};

    display: grid;
    grid-template-columns: 279px 1fr;

    .skills {
        border-right: 2px solid ${(props) => props.theme.secondary};
        padding: 10px;
        
        .title {
            color: ${(props) => props.theme.primary};
            text-align: center;
            font-weight: bold;
            font-size: 20px;
        }

        .scopes {
            font-size: 18px;
            padding: 0 0 0 10px;

            p {
                margin: 70px 0 0 0;

                .fai {
                    color: ${(props) => props.theme.primary};
                }
            }
        }
    }

    .techs {
        padding: 10px;

        p {
            margin: 0 0 0 5px;;
        }

        .progress-b {
            height: 20px;
            padding: 0 5px;
            border-radius: 10px;
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.background};
            margin: 0 0 5px 0;

            span {
                float: right;
            }
        }

        .pb10 {
            animation: pb10 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb20 {
            animation: pb20 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb30 {
            animation: pb30 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb40 {
            animation: pb40 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb50 {
            animation: pb50 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb60 {
            animation: pb60 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb70 {
            animation: pb70 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb80 {
            animation: pb80 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb90 {
            animation: pb90 1s ease-in-out;
            animation-fill-mode: both;
        }
        .pb100 {
            animation: pb100 1s ease-in-out;
            animation-fill-mode: both;
        }
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 450px 450px;
        margin: 480px 0 0 0;
        border: none;


        .skills {
            border: none;
            border-bottom: 2px solid ${(props) => props.theme.secondary};

            .scopes {
                text-align: center;
            }
        }

        .techs {
            border: none;
        }        
    }

    @keyframes pb10 {
        0% { width: 0%; }
        100% { width: 10%; }
    }
    @keyframes pb20 {
        0% { width: 0%; }
        100% { width: 20%; }
    }
    @keyframes pb30 {
        0% { width: 0%; }
        100% { width: 30%; }
    }
    @keyframes pb40 {
        0% { width: 0%; }
        100% { width: 40%; }
    }
    @keyframes pb50 {
        0% { width: 0%; }
        100% { width: 50%; }
    }
    @keyframes pb60 {
        0% { width: 0%; }
        100% { width: 60%; }
    }
    @keyframes pb70 {
        0% { width: 0%; }
        100% { width: 70%; }
    }
    @keyframes pb80 {
        0% { width: 0%; }
        100% { width: 80%; }
    }
    @keyframes pb90 {
        0% { width: 0%; }
        100% { width: 90%; }
    }
    @keyframes pb100 {
        0% { width: 0%; }
        100% { width: 100%; }
    }
`;