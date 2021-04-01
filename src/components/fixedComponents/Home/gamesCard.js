import React, { useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";

// Component links
import Title from '../../sharedComponents/titles'
import TicTacToe from './games/tic_tac_toe/tttGame'
import Snake from './games/snake/snakeGame'

const Tab = styled.button`

    color: #DAEDF2;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.3px;
    padding: 10px 0px;
    
    border-radius: 5px 5px 0px 0px;
    border: solid 1px #e8f6fa;
    border-bottom: none;
    background-color: #0B0F2C;
    flex-basis: 49%;

    transition: background-color 0.2s ease-in-out;
    background-color: ${props => props.active ? "#e8f6fa" : "initial"};
    color: ${props => props.active ? "#0B0F2C" : "#DAEDF2"};
    font-weight: ${props => props.active ? "800" : "initial"};

    :hover
    {
        background-color: rgba(232, 246, 250, 0.9);
        color: #0B0F2C;
        font-weight: 800;
    }
`;

const Content = styled.div`
    ${props => (props.active ? "" : "display:none")}
`;

const GamesCard = () =>
{
    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };


    return(
        <GamesCardStyle>
            <ScrollAnimation animateIn="fadeInUp" offset={70}>
                <Title type="H2" theme="h2__homeQuestionTitle" content="Un mini-jeu ça vous tente ?" />
            </ScrollAnimation>
            <div className="games">
                <div>
                    <Tab onClick={handleClick} active={active === 0} id={0}>
                        Moripon
                    </Tab>
                    <Tab onClick={handleClick} active={active === 1} id={1}>
                        Snake
                    </Tab>
                </div>

                <Content active={active === 0}>
                    <TicTacToe />
                </Content>

                <Content active={active === 1}>
                    <Snake />
                </Content>

            </div>
        </GamesCardStyle>
    )
}

export default GamesCard;


const GamesCardStyle = styled.div`

    flex-basis: 48%;
    margin: 50px 0px 0px;

    .games
    {
        max-width: 480px;
        margin: 0 auto;
    }

    .games > div:first-of-type
    {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        overflow: hidden;
    }

    .games > div:first-of-type button
    {
        font-family:"montserrat_medium";
    }

    @media screen and (min-width:1200px)
    {
        flex-basis: 55%;
        margin: 100px 0px 0px;
    }

`;