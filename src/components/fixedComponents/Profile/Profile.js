import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";

// Component links
import Title from '../../sharedComponents/titles';
import Header from "../../sharedComponents/header/header";
import History from "./history";
import Hobbies from "./hobbies";
import Skills from "./skills";
import Softs from "./softs";
import CV from "./cv";

// Assets links
import home_mobile_bg from '../../../assets/imgs/backgrounds/home_mobile_bg.png';
import home_desktop_bg from '../../../assets/imgs/backgrounds/home_desktop_bg.png';


const profil = ({pageLink}) =>
{
    return(
        <Profil>
            <Header pLink={pageLink} />
            <div className="container">
                <Title type="H1" theme="h1__mobileTitle" content="Profil" />
                <ScrollAnimation animateIn="slideInDown" offset={70}>
                    <p className="intro" >
                        Curiosité, Motivation et Sociabilité.
                    </p>
                    <p className="intro">
                        Ces trois mots gèrent mon quotidien. J'aime apprendre et relever de nouveaux challenges. 
                        Concernent le web, j'affectionne particulièrement le travail en équipe lors de l'éllaboration d'un nouveau projet, que ce soit côté design ou développement.
                        Contribuer à la réussite d'un client est pour moi une vrai source de fierté et de motivation.
                    </p>
                </ScrollAnimation>
                <Skills />
                <Softs />
                <History />
                <Hobbies />
                <CV />
            </div>
        </Profil>
    )
}

export default profil;


const Profil = styled.div`

    background-image: url(${home_mobile_bg});
    background-position: 50% -10.5%;
    background-repeat: no-repeat;
    margin-bottom: 50px;

    .intro
    {
        font-family:"montserrat_medium";
        letter-spacing: 0.7px;
        font-size: 1rem;
        font-weight: 600;
    }

    div.container
    {
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (min-width:800px)
    {
        background-position: 50% -35%;
        
        .skills > div:last-of-type .div__line_skillsLine
        {
            display: none;
        }

        .intro
        {
            font-size: 1.1rem;
        }
    }

    @media screen and (min-width:1200px)
    {
        background-image: url(${home_desktop_bg});
        background-position: top center;
        background-repeat: no-repeat;

        .intro:first-of-type
        {
            padding-top: 60px;
            width: 90%;
            margin: 0 auto;
        }
    }
`;