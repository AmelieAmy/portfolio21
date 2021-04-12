import React from "react";
import styled from "styled-components";

// Component links
import Titles from '../../sharedComponents/titles'
import ContactInfos from './contactInfos'

// Assets links
import Telephone from "../../../assets/icons/callingTelIcon.svg";
import Email from "../../../assets/icons/sendingMailIcon.svg";
import linkedin from "../../../assets/icons/linkedinIcon.svg";
import GitHub from "../../../assets/icons/githubIcon.svg";


const contactCard = () =>
{
    return(
        <ContactCard>
            <Titles type="H1" theme="h1__mobileTitle" content="Contact" />
            <div className="contactCard">
                <div>
                    <ContactInfos iconHref={Telephone} contentLink="tel:+33781028488" content="07 81 02 84 88" subContent="De préférence la journée" />
                    <ContactInfos iconHref={Email} contentLink="mailto:am_bock@outlook.com" content="am_bock@outlook.com" subContent="Garantie plus rapide que la poste" />
                    <ContactInfos iconHref={linkedin} contentLink="https://www.linkedin.com/in/ameliebockelandt/" target="_blank" rel="noreferrer" content="Compte LinkedIn" subContent="N'y allez surtout pas, ça fait peur !" />
                    <ContactInfos iconHref={GitHub} contentLink="https://github.com/AmelieAmy/" target="_blank" rel="noreferrer" content="Compte GitHub" subContent=" 🐱 || 🐙 ? " />
                </div>
            </div>
        </ContactCard>
    )
}

export default contactCard;


const ContactCard = styled.div`

    flex-basis: 45%;

    @media screen and (min-width:800px)
    {
        .contactCard
        {
            width: 600px;
            padding-left: 100px;
            margin: 0 auto;
        }

        .contactCard .contactInfos
        {
            margin: 70px 0px;
        }

    }

    @media screen and (min-width:1200px)
    {
        .contactCard
        {
            width: 100%;
            margin: 130px 0px 0px 0px;
            padding-left: 0px;
        }

        .contactCard > div
        {
            width: 445px;
            background-color: #101437;
            box-shadow: 0px 0px 50px 50px #101437;
        }
    }
`;