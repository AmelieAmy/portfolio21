import React from "react";
import styled from "styled-components";


const P__ORIGINAL = styled.p`
    color: #DAEDF2;
    text-align: center;
    font-family:"montserrat_light";
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.3px;
    margin: 10px 0px;
`;

const P__CLASSIC = styled.p`
    font-family:"montserrat_medium";
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.2;
`;

const P__MEDIUM = styled.p`
    font-family:"montserrat_medium";
    letter-spacing: 0.7px;
    font-size: 1rem;
    font-weight: 600;
    @media screen and (min-width:800px)
    {
        font-size: 1.1rem;
    }
`;

const P__GLOWY = styled.p`
    font-family: "montserrat_medium";
    font-size: 1rem;
    font-weight: normal;
    text-shadow: 0 0 5px #DAEDF2;
    @media screen and (min-width:800px)
    {
        font-size: 1.1rem;
    }
`;

const P__MEDIUMSUBTITLE = styled.p`
    font-family: "montserrat_medium";
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    @media screen and (min-width:800px)
    {
        font-size: 1.1rem;
    }
`;

const P__MEDIUMCOLOR = styled.p`
    font-family:"montserrat_medium";
    font-size: 1rem;
    font-weight: 600;
    color: #FFC400;
    letter-spacing: 0.5px;
    @media screen and (min-width:800px)
    {
        font-size: 1.1rem;
    }
`;

const P__HEADERLINK = styled.p`
    font-family: "neon_absolute_sans_regular";
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.5rem;
    letter-spacing: 1px;
    @media screen and (min-width:800px)
    {
        text-transform: capitalize;
        font-size: 1.2rem;
    }
`;

const P__HEADERLINKCOLORED = styled.p`
    font-family: "neon_absolute_sans_regular";
    text-transform: capitalize;
    font-weight: normal;
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: #FFC400;
`;


const txts = ({type, content}) =>
{
    return(
        type === "p__texts_original" ?
        (
            <P__ORIGINAL>{content}</P__ORIGINAL>

        ) : type === "p__texts_classic" ? (

            <P__CLASSIC>{content}</P__CLASSIC>

        ) : type === "p__texts_medium" ? (

            <P__MEDIUM>{content}</P__MEDIUM>

        ) : type === "p__texts_glowy" ? (

            <P__GLOWY>{content}</P__GLOWY>

        ) : type === "p__texts_mediumSubtitle" ? (

            <P__MEDIUMSUBTITLE>{content}</P__MEDIUMSUBTITLE>

        ) : type === "p__texts_mediumColor" ? (

            <P__MEDIUMCOLOR>{content}</P__MEDIUMCOLOR>

        ) : type === "p__texts_headerLink" ? (

            <P__HEADERLINK>{content}</P__HEADERLINK>

        ) : type === "p__texts_headerLinkColored" ? (

            <P__HEADERLINKCOLORED>{content}</P__HEADERLINKCOLORED>

        ) : null
    )
}

export default txts;