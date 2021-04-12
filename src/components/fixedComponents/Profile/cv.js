import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";

// Component links

// Assets links
import cvIcon from "../../../assets/icons/cvIcon.svg";
import CV from "../../../assets/imgs/description_profil/CV_BOCKELANDT_Amelie_webdesigner.pdf"


const cv = () =>
{
    return(
        <Cv>
            <ScrollAnimation animateIn="zoomInDown" offset={70} >
                <a href={CV} target="_blank" rel="noreferrer">
                    <p>Télécharger mon CV</p>
                    <img src={cvIcon} alt="icone d'un CV" />
                </a>
            </ScrollAnimation>
        </Cv>
    )
}

export default cv;


const Cv = styled.div`

    margin: 0px 0px 70px;

    a
    {
        padding: 2px 20px;
        border-radius: 5px;
        background-color: #FFC400;
        box-shadow: 0 0 10px #FFC400;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        max-width: 350px;
    }

    p
    {
        padding-top: 2px;
        font-family:"montserrat_bold";
        letter-spacing: 0.7px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #101437;
        margin-right: 20px;
    }

    img
    {
        width: 100%;
        max-width: 40px;
    }

    a:hover img
    {
        transform: scale(1.3);
    }

    a:hover
    {
        box-shadow: 0 0 15px #FFC400;
    }

    @media screen and (min-width:800px)
    {
        a
        {
            max-width: 400px;
        }
        
    }

    @media screen and (min-width:1200px)
    {
        margin: 40px 0px 70px;
    }
`;