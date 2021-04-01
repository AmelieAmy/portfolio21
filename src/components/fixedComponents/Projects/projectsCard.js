import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

// Component links
import Title from '../../sharedComponents/titles';


const projectsCard = ({urlName, name, microCover, microDescription_projectType, microDescription_skillsUsed, microDescription_year, microDescription_caseStudy}) => {
    return (
        <ProjectsCard>
            <Link to={`/projects/${urlName}`}>
                <img src={microCover} alt={microCover} />
            </Link>
            <figcaption>
                <Title type="H2" theme="h2__projectsCardTitle" content={name} />
                <div>
                    <div></div>
                    <p>
                        {microDescription_projectType}<br/>
                        {microDescription_skillsUsed}<br/>
                        {microDescription_year} {microDescription_caseStudy}
                    </p>
                </div>
            </figcaption>
        </ProjectsCard>
    )
}

export default projectsCard



const ProjectsCard = styled.figure`

    transition: transform 0.3s ease-in-out;
    margin: 25px 0px;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 450px;

    :hover
    {
        transform: scale(1.05);
    }

    img
    {
        width: 100%;
        max-width: 450px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        border: 1px solid rgba(218, 237, 242, 0.3);
    }

    figcaption
    {
        padding-top: 10px;
        text-align: left;
        max-width: 90%;
        margin-left: 5%;
    }

    figcaption > div
    {
        display: flex;
        align-items: flex-start;
        justify-content: left;
    }

    figcaption > div > div
    {
        background-color: #FF6600;
        width: 40px;
        margin: 5px 12px 0px 0px;
        height: 3px;
        border-radius: 5px;
    }

    figcaption > div p
    {
        font-family: "montserrat_medium";
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0px;
    }

    @media screen and (min-width:800px)
    {
        flex-basis: 45%;
        display: block;
        max-width: 100%;

        figcaption
        {
            margin-left: 10%;
        }
        
        figcaption > div p
        {
            font-size: 1.1rem;
        }
    }

    @media screen and (min-width:1200px)
    {
        flex-basis: 30%;
        margin: 10px 0px;
    }

    @media screen and (min-width:1600px)
    {
        figcaption
        {
            margin-left: 15%;
        }
    }

`;