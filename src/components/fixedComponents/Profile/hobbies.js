import React from "react";
import styled from "styled-components";

// Component links
import Separator from "../../sharedComponents/separator";
import Title from '../../sharedComponents/titles';

// Assets links
import profilDatas from '../../../assets/datas/profilDatas';


const hobbies = () =>
{
    return(
        <Hobbies>
            <Separator type="profileSeparator" separatorTitle="Hobbies" />
            <ul className="hobbies">
                { profilDatas.map((categories) => (
                    categories.myhobbies && categories.myhobbies.map((subCategories) => (
                        <li key={subCategories.id}>
                            <Title type="H3" theme="h3__imgs" icon={subCategories.icon} content={"Icone de " + subCategories.icon} />
                            {subCategories.kind}
                        </li>
                    ))
                )) }
            </ul>
        </Hobbies>
    )
}

export default hobbies;


const Hobbies = styled.div`

    .hobbies
    {
        list-style: none;
        padding-inline-start: 0px;
        max-width: 480px;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .hobbies li
    {
        margin: 30px 0px;
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 800px)
    {
        .hobbies
        {
            max-width: 600px;
        }

        .hobbies li
        {
            flex-direction: row;
            align-items: center;
            text-align: left;
        }
        
        .hobbies h3
        {
            margin-right: 30px;
        }

    }

    @media screen and (min-width: 1200px)
    {
        .hobbies
        {
            padding-bottom: 0px;
        }
    }

`;