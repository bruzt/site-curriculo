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
                <div className="progress-b" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>React</p>
                <div className="progress-b" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>React Native</p>
                <div className="progress-b" style={{ width: '60%' }}>
                    <span>60%</span>
                </div>
                <p>Electron</p>
                <div className="progress-b" style={{ width: '50%' }}>
                    <span>50%</span>
                </div>
                <p>HTML5</p>
                <div className="progress-b" style={{ width: '90%' }}>
                    <span>90%</span>
                </div>
                <p>CSS3</p>
                <div className="progress-b" style={{ width: '70%' }}>
                    <span>60%</span>
                </div>
                <p>CSS Animations</p>
                <div className="progress-b" style={{ width: '40%' }}>
                    <span>40%</span>
                </div>
                <p>Node.js</p>
                <div className="progress-b" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>Express.js</p>
                <div className="progress-b" style={{ width: '80%' }}>
                    <span>80%</span>
                </div>
                <p>SQL</p>
                <div className="progress-b" style={{ width: '60%' }}>
                    <span>60%</span>
                </div>
                <p>MongoDB</p>
                <div className="progress-b" style={{ width: '70%' }}>
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
            margin: 0;
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
    }

    @media (max-width: ${(props) => props.theme.maxWidth}) {
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
`;