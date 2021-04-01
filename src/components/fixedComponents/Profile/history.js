import React from "react";
import styled from "styled-components";

// Component links
import Separator from "../../sharedComponents/separator";
import Title from '../../sharedComponents/titles';

// Assets links
import profilDatas from '../../../assets/datas/profilDatas';
import historicalTimeLine from '../../../assets/imgs/description_profil/historicalTimeLine.png';


const history = () =>
{
    return(
        <History>
            <Separator type="profileSeparator" separatorTitle="Historique" />
            <img src={historicalTimeLine} alt="Frise chronologique professionnelle" className="hiddenHistory" />
            <ul className="history">
                { profilDatas.map((categories) => (
                    categories.myhistory && categories.myhistory.map((subCategories) => (
                        <li key={subCategories.id}>
                            <Title type="H3" theme="h3__numbers" content={subCategories.year} />
                            <p className="p__texts_medium">
                                {subCategories.descriptionName}
                            </p>
                            <p className="p__texts_medium">
                                {subCategories.description}
                            </p>
                            <p className="p__texts_classic">
                                {subCategories.descriptionPlace}
                            </p>
                        </li>
                    ))
                )) }
            </ul>
        </History>
    )
}

export default history;


const History = styled.div`

    .history
    {
        list-style: none;
        padding-inline-start: 0px;
        width: 250px;
        margin: 0 auto;
    }

    .history li
    {
        margin: 50px 0px;
    }

    .hiddenHistory
    {
        display: none;
    }

    @media screen and (min-width: 1200px)
    {
        .hiddenHistory
        {
            display: block;
            width: 95%;
            margin: 0 auto;
            padding-top: 30px;
        }

        .history
        {
            display: none;
        }
    }
    
`;