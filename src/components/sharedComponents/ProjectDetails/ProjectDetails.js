import React from "react";
import styled from "styled-components";

// Component links
import Header from "../header/header";
import Pd3d from "./3d/ProjectDetails3d";
import Pdw from "./web/ProjectDetailsWeb";

// Assets links
import projects_bg from "../../../assets/imgs/backgrounds/home_mobile_bg.png"
import projectsDatas from '../../../assets/datas/projectsDatas';


const ProjectsDetails = ({pageLink}) =>
{    
    const currentPath = window.location.pathname;
    const lastword = (words) => {
        let w = words.split("/");
        return w[w.length - 1];
    }    
    const subPageLink = lastword(currentPath)

    return(
        <PD>
            <Header pLink={pageLink} />
                { projectsDatas.map((project) => (
                project.urlName === subPageLink &&
                <div className="container" key={project.id}>
                    {project.index < 6 ?
                        <Pdw />
                    : null}
                    {project.index > 5 ?
                        <Pd3d />
                    : null}
                </div>
            )) }
        </PD>
    )
}

export default ProjectsDetails;


const PD = styled.div`

    background-image: url(${projects_bg});
    background-position: 50% 165px;
    background-repeat: no-repeat;

    div.container
    {
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (min-width:600px)
    {
        background-position: 50% 220px;
    }

    @media screen and (min-width:800px)
    {
        background-position: 50% 250px;

        div.container
        {
            width: 85%;
            margin: 0 auto;
        }
    }

    @media screen and (min-width:1200px)
    {
        background-position: 100% 730px;

        div.container
        {
            width: 85%;
            margin: 0 auto;
        }
    }

`;