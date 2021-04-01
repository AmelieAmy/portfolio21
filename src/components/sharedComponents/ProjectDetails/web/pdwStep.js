import React from 'react'
import styled from "styled-components";

// Component links
import CaseStudy from '../../microCard_and_buttons';
import Separator from '../../separator';

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';


const pdwStep = ({type, sPL}) => {

    return (
        type === "Projet" ?
        (
            <PdwStep className="PDWStep">
                { 
                    projectsDatas.map((projet) => (
                        (projet.urlName === sPL && projet.microDescription_caseStudy === true) &&
                        <CaseStudy type="caseStudy" key={projet.id} />
                    )) 
                }
                <Separator separatorTitle="Projet" />
                {
                    projectsDatas.map((projet) => (
                        projet.urlName === sPL &&
                        <p key={projet.id} className="pdw__projetStep_txt">{projet.fullProjectDescription}</p>
                    ))
                }
            </PdwStep>

            ) : type === "Difficultes" ? (

            <PdwStep className="PDWStep">
                <Separator separatorTitle="Difficultés" />
                { projectsDatas.map((projet) => (
                    projet.urlName === sPL &&
                    <ul key={projet.id}>
                        { projet.fullProjectIssue.map((issue) => (
                            <li key={issue} className="pdw__step_txt" >{issue}</li>
                        )) }
                    </ul>
                )) }
            </PdwStep>
            
        ) : type === "Solutions" ? (
            
            <PdwStep className="PDWStep">
                <Separator separatorTitle="Solutions" />
                {
                    projectsDatas.map((projet) => (
                        projet.urlName === sPL &&
                        <ul key={projet.id}>
                            { projet.fullProjectSolution.map((solution) => (
                                <li key={solution} className="pdw__step_txt" >{solution}</li>
                            )) }
                        </ul>
                    ))
                }
            </PdwStep>
            
        ) : null
    )
}

export default pdwStep


const PdwStep = styled.div`

    border: 1px solid #FF7700;
    background-color: #101437;
    border-radius: 10px;
    position: relative;
    padding: 20px 0px;
    font-size: 1rem;
    text-align: left;
    margin: 10px 0px;

    .pdw__step_txt, .pdw__projetStep_txt
    {
        width: 85%;
        margin: 0 auto;
        line-height: 1.2;
    }

    ul
    {
        list-style-type: square;
        margin: 0px;
        padding-inline-start: 15px;
    }

    ul li
    {
        padding: 5px 0px;
    }

    @media screen and (min-width:600px)
    {
        .pdw__projetStep_txt
        {
            line-height: 1.4;
        }
    }

    @media screen and (min-width:800px)
    {
        .pdw__projetStep_txt
        {
            width: 83%;
            line-height: 1.8;
        }
    }

    @media screen and (min-width:1200px)
    {
        .pdw__step_txt
        {
            width: 80%;
            line-height: 1.5;
        }
    }

`;