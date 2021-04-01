import React from "react";
import styled from "styled-components";

// Component links
import Separator from "../../sharedComponents/separator";
import Title from '../../sharedComponents/titles';

// Assets links
import profilDatas from '../../../assets/datas/profilDatas';


const skills = () =>
{
    return(
        <Skills>
            <Separator type="profileSeparator" separatorTitle="Compétences" />
            <ul className="skills" >
                { profilDatas.map((categories) => (
                    categories.skills && categories.skills.map((subCategories) => (
                        <div key={subCategories.id}>
                            <div className="skillsContent" >
                                <div>
                                    <Title type="H3" theme="h3__letters" content={subCategories.title} />
                                </div>
                                <div>
                                    { subCategories.description.map((element) => (
                                    <li key={element}>{element}</li>
                                    )) }
                                </div>
                            </div>
                            <div className="div__line_skillsLine" ></div>
                        </div>
                    ))
                )) }
            </ul>
        </Skills>
    )
}

export default skills;

const Skills = styled.div`

    .skills
    {
        font-size: 1rem;
        padding-inline-start: 0px;
        text-align: left;
        width: 265px;
        margin: 0 auto;
    }

    .skills li
    {
        margin: 5px 0px 5px 65px;
        font-family:"montserrat_medium";
        font-size: 1.1rem;
        font-weight: normal;
        line-height: 1.2
    }

    .skillsContent
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .skills .div__line_skillsLine
    {
        display: none;
    }

    @media screen and (min-width:800px)
    {
        .skills
        {
            width: 100%;
            list-style: none;
        }
        
        .skills > div
        {
            display: flex;
            flex-direction: column;
        }

        .skillsContent
        {
            flex-direction: row;
            align-items: center;
        }

        .skillsContent > div:first-of-type
        {
            flex-basis: 50%;
            display: flex;
            justify-content: flex-end;
        }
        
        .skillsContent > div:last-of-type
        {
            flex-basis: 50%;
        }
        
        .skills li
        {
            margin: 5px 0px 5px 50px;
        }
        
        .skills .div__line_skillsLine
        {
            display: block;
            width: 700px;
            align-self: center;
            margin: 20px 0px 20px 20px;
            height: 1px;
            border-radius: 5px;
            background-color: #FF6600;
        }

    }

    @media screen and (min-width:1200px)
    {        
        .skills li
        {
            margin: 5px 0px 5px 75px;
        }
        
        .skills .div__line_skillsLine
        {
            width: 750px;
            margin: 20px 0px 20px 20px;
        }
    }
`;