import React from "react";
import styled from "styled-components";


const H1__HEADER = styled.h1`
    font-family: "neon_absolute_sans_regular";
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin: 10px 0px;
    opacity: 50%;
    @media screen and (min-width:800px)
    {
        text-transform: capitalize;
        font-size: 1.2rem;
    }
`;

const H1__MOBILE = styled.p`
    font-family:"neon_absolute_sans_regular";
    font-weight: normal;
    letter-spacing: 0.7px;
    font-size: 1.6rem;
    text-transform: uppercase;
    margin: 45px 0px 25px;
    color : #DAEDF2;
    @media screen and (min-width: 1200px)
    {
        display: none;
    }
`;

const H1__PROJECTDETAILS = styled.h1`
    font-family:"neon_absolute_sans_regular";
    font-weight: normal;
    letter-spacing: 0.7px;
    font-size: 1.6rem;
    text-transform: uppercase;
    margin: ${props => props.mobileTitle ? "45px 0px 35px" : props => props.visitCardTitle ? "15px 0px" : "45px 0px 35px"};
    color : ${props => props.mobileTitle ? "#DAEDF2" : props => props.visitCardTitle ? "#DAEDF2" : "#FF6600"};
    text-shadow: ${props => props.mobileTitle ? "none" : props => props.visitCardTitle ? "none" : "0 0 10px #FF6600"};
    @media screen and (min-width: 1200px)
    {
        display: ${props => props.mobileTitle ? "none" : "block"};
    }
`;

const H2__PROJECTSCARD = styled.h2`
    font-family:"neon_absolute_sans_regular";
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #FF7700;
    text-align: left;
    margin: 5px 0px 10px;
    font-weight: normal;
    letter-spacing: 0.08rem;
    @media screen and (min-width: 800px)
    {
        font-size: 1.7rem;
    }
`;

const H2__HOMEQUESTION = styled.h2`
    font-size: 1.3rem;
    margin: 0px 0px 25px;
    @media screen and (min-width: 1200px)
    {
        font-size: 1.6rem;
    }
`;

const H2__SEPARATORGLOWY = styled.h2`
    font-weight: normal;
    letter-spacing: 0.7px;
    margin: 0px 15px;
    line-height: 1;
    text-shadow: 0 0 10px #FF6600;
    font-family:"neon_absolute_sans_regular";
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #FF7700;
    @media screen and (min-width: 800px)
    {
        font-size: 1.7rem;
    }
`;

const H2__SEPARATORCLASSIC = styled.h2`
    font-weight: normal;
    letter-spacing: 0.7px;
    margin: 0px 15px;
    line-height: 1;
    color: #FFC400;
    font-family:"neon_absolute_sans_regular";
    font-size: 1.5rem;
    @media screen and (min-width: 800px)
    {
        font-size: 1.7rem;
    }
`;

const H3__LETTERS = styled.h3`
    color: #FFC400;
    margin: 30px 0px 10px;
    font-family:"neon_absolute_sans_regular";
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 0.08rem;
    text-shadow: 0 0 5px rgba(255, 196, 0, 0.5);
    @media screen and (min-width:800px)
    {
        font-size: 1.5rem;
        text-align: right;
        width: 270px;
        margin: 0px 50px 0px 0px;
    }
`;

const H3__NUMBERS = styled.h3`
    color: #FFC400;
    margin: 10px 0px;
    font-family:"montserrat_light";
    font-size: 1.4rem;
    text-shadow: 0 0 5px rgba(255, 196, 0, 0.5);
`;

const H3__IMGS = styled.h3`
    margin: 0px;
`;

const H3__IMGS_IMG = styled.img`
    width: 65px;
`;


const title = ({type, theme, content, icon}) =>
{
    return(
        type === "H1" ?
        (
            theme === "h1__mobileTitle" ?
            (
                <H1__MOBILE mobileTitle>{content}</H1__MOBILE>

            ) : theme === "h1__visitCardTitle" ? (

                <H1__PROJECTDETAILS visitCardTitle>{content}</H1__PROJECTDETAILS>

            ) : theme === "h1__projectDetailsTitle" ? (

                <H1__PROJECTDETAILS>{content}</H1__PROJECTDETAILS>

            ) : theme === "h1__headerTitle" ? (

                <H1__HEADER>{content}</H1__HEADER>

            ) : null

        ) : type === "H2" ? (

            theme === "h2__projectsCardTitle" ?
            (
                <H2__PROJECTSCARD>{content}</H2__PROJECTSCARD>

            ) : theme === "h2__homeQuestionTitle" ? (

                <H2__HOMEQUESTION>{content}</H2__HOMEQUESTION>

            ) : theme === "h2__separatorGlowy" ? (

                <H2__SEPARATORGLOWY>{content}</H2__SEPARATORGLOWY>

            ) : theme === "h2__separatorClassic" ? (

                <H2__SEPARATORCLASSIC>{content}</H2__SEPARATORCLASSIC>

            ) : null

        ) : type === "H3" ? (

            theme === "h3__letters" ?
            (
                <H3__LETTERS>{content}</H3__LETTERS>

            ) : theme === "h3__numbers" ? (

                <H3__NUMBERS>{content}</H3__NUMBERS>

            ) : theme === "h3__imgs" ? (

                <H3__IMGS>
                    <H3__IMGS_IMG src={icon} alt={content} />
                </H3__IMGS>

            ) : null

        ) : null
    )
}

export default title;