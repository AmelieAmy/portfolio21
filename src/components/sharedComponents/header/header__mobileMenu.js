import React from "react";
import styled from "styled-components";

import Links from '../links';

const mobileMenu = () =>
{
    return (
        <MobileMenuStyle className="mobile_menu">
            <nav>
                <Links type="headerLink__menu" hrefLink="/projects" content="Projets"/>
                <Links type="headerLink__menu" hrefLink="/profile" content="Profil"/>
                <Links type="headerLink__menu" hrefLink="/contact" content="Contact"/>
            </nav>
        </MobileMenuStyle>
    )
}

export default mobileMenu


const MobileMenuStyle = styled.div`

    display: flex;
    justify-content: center;
    position: absolute;
    top: 63.9px;
    width: 100%;
    padding: 20px 0px;
    background-color: #191F48;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    z-index: 101;

`;