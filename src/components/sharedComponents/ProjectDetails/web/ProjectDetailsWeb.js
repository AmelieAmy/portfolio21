import React from "react";
import styled from "styled-components";

// Component links
import PDWIntro from "./pdwIntro";
import PDWSteps from "./pdwStep";
import PDWDesigns from "./pdwDesigns";

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';


const ProjectsDetails__web = () =>
{    
    const currentPath = window.location.pathname;
    const lastword = (words) => {
        let w = words.split("/");
        return w[w.length - 1];
    }    
    const subPageLink = lastword(currentPath)

    return(
        <PDW>
            { projectsDatas.map((projet) => (
                projet.urlName === subPageLink &&
                <PDWIntro
                    key={projet.name}
                    title={projet.name}
                    subTitle={projet.fullProjectName}
                    pageName={subPageLink}
                />
            )) }
            <div className="PDWSteps" >
                <PDWSteps type="Projet" sPL={subPageLink}/>
                <PDWSteps type="Difficultes" sPL={subPageLink}/>
                <PDWSteps type="Solutions" sPL={subPageLink}/>
            </div>
            <PDWDesigns pageName={subPageLink} />
        </PDW>
    )
}

export default ProjectsDetails__web;


const PDW = styled.div`

    .PDWSteps
    {
        display: flex;
        flex-direction: column;
    }

    .PDWStep
    {
        flex-basis: 45%;
    }

    .PDWStep:last-of-type
    {
        flex-basis: 95%;
    }

    @media screen and (min-width:600px)
    {
        .PDWSteps
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }

    @media screen and (min-width:1200px)
    {
        .PDWStep:last-of-type
        {
            flex-basis: 70%;
        }
    }

`;