import React from "react";
import styled from "styled-components";

// Component links
import Header from "../../sharedComponents/header/header";
import VisitCard from "../../sharedComponents/visitCard";
import ContactCard from "./contactCard";

// Assets links
import home_mobile_bg from '../../../assets/imgs/backgrounds/home_mobile_bg.png';
import home_desktop_bg from '../../../assets/imgs/backgrounds/home_desktop_bg.png';


const Contact = ({pageLink}) =>
{
    return(
        <Contacts>
            <Header pLink={pageLink} />
            <div className="container">
                <VisitCard mobile_visibility="false" />
                <ContactCard />
            </div>
        </Contacts>
    )
}

export default Contact;


const Contacts = styled.div`

    background-image: url(${home_mobile_bg});
    background-position: 50% 35%;
    background-repeat: no-repeat;
    height: 100vh;

    div.container
    {
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: 0 auto;
    }

    @media screen and (min-width:800px)
    {
        background-position: 50% 120%;

        div.container
        {
            width: 80%;
        }
    }

    @media screen and (min-width:1200px)
    {
        background-image: url(${home_desktop_bg});
        background-position: center top;
        background-repeat: no-repeat;
        
        div.container
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
`;