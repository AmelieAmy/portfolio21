import React from "react";
import styled from "styled-components";

// Component links
import Title from '../../sharedComponents/titles';
import Header from "../../sharedComponents/header/header";
import ProjectsCard from "./projectsCard";

// Assets links
import projetcsDatas from '../../../assets/datas/projectsDatas';
import home_mobile_bg from '../../../assets/imgs/backgrounds/home_mobile_bg.png';


const projects = ({pageLink}) =>
{    
    return(
        <Projects>
            <Header pLink={pageLink} />
            <div className="container">
                <Title type="H1" theme="h1__mobileTitle" content="Projets" />
                <div className="projectMiniatures">
                    { projetcsDatas.map((element) => (
                        <ProjectsCard
                        urlName={element.urlName}
                        name={element.name}
                        key={element.id}
                        microCover={element.microCover}
                        microDescription_projectType={element.microDescription_projectType}
                        microDescription_skillsUsed={element.microDescription_skillsUsed}
                        microDescription_year={element.microDescription_year}
                        microDescription_caseStudy={element.microDescription_caseStudy}
                        />
                    )) }
                </div>
            </div>
        </Projects>
    )
}

export default projects;


const Projects = styled.div`

    background-image: url(${home_mobile_bg});
    background-position: top center;
    background-repeat: no-repeat;

    div.container
    {
        width: 90%;
        margin: 0 auto;
    }

    .projectMiniatures
    {
        padding: 0px 0px 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (min-width:800px)
    {
        background-position: 50% -2%;
        
        div.container
        {
            width: 95%;
        }
        .projectMiniatures
        {
            justify-content: space-around;
        }

    }

    @media screen and (min-width:1200px)
    {
        background-position: 100% 0%;
        
        .projectMiniatures
        {
            margin-top: 70px;
        }

        .projectMiniatures figure:nth-of-type(3n+2)
        {
            margin-top: 70px;
        }
    }

`;