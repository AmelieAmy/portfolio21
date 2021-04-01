import React from "react";
import styled from "styled-components";

// Component links
import TxT from './texts'


const GameSelect = styled.button`
    border-radius: 5px 5px 0px 0px;
    border: solid 1px #e8f6fa;
    border-bottom: none;
    background-color: #0B0F2C;
    flex-basis: 32%;
    background-color: ${props => props.activGame ? "#e8f6fa" : "initial"};
    color: ${props => props.activGame ? "#0B0F2C" : "#DAEDF2"};
    font-weight: ${props => props.activGame ? "800" : "initial"};
    font-family: ${props => props.activGame ? "montserrat_medium" : "initial"};
    cursor: pointer;
`;

const CaseStudy = styled.div`
    display: inline-block;
    background-color: #FFCA19;
    position: absolute;
    padding: 10px 15px;
    transform: rotate(-15deg);
    border-radius: 5px;
    top: -10px;
    left: -30px;
    @media screen and (min-width: 1400px)
    {
        top: 5px;
        left: -30px;
    }

    p
    {
        font-family: "montserrat_Bold";
        color: #0B0F2C;
        margin: 0px;
        font-size: 1rem;
    }
`;

const ReStartButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 20px 0px 40px;
    background-color: #e8f6fa;
    font-family:"montserrat_medium";
    font-size: 1.1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #0B0F2C;
`;


const microCard = ({type, id, content, onClick}) =>
{
    return(
        type === "gameSelect" ? (

            <GameSelect onClick={onClick} id={id}>
                <TxT type="p__texts_original" content={content}/>
            </GameSelect>

        ) : type === "activGameSelect" ? (

            <GameSelect activGame>
                <p>{content}</p>
            </GameSelect>

        ) : type === "caseStudy" ? (
        
            <CaseStudy>
                <p>Case Study</p>
            </CaseStudy>

        ) : type === "reStartButton" ? (
        
            <ReStartButton onClick={onClick} id={id}> {content} </ReStartButton>

        ) : null
    )
}

export default microCard;