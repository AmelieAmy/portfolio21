import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headroom from '../Headroom/headroom'
import styled from "styled-components";

// components
import MobileMenu from './header__mobileMenu';
import Links from '../links';

// Assets
import logo from '../../../assets/icons/headerLogo.svg';
import burgerMenu from '../../../assets/icons/burgerMenuIcon.svg';


const HeaderLinks = ({href}) =>
{    
    return(
        <>
            <Link to="/">
                <img src={logo} alt="logo" className="img__Icon_header" />
            </Link>
            <div className="desktopNavElement">
                <Links type={href === "/projects" ? "headerLink__h1" : "headerLink" } hrefLink="/projects" content="Projets"/>
                <Links type={href === "/profile" ? "headerLink__h1" : "headerLink"} hrefLink="/profile" content="Profil"/>
                <Links type={href === "/contact" ? "headerLink__h1" : "headerLink"} hrefLink="/contact" content="Contact"/>
            </div>
        </>
    )
}


const Header = ({pLink}) =>
{
    const [isToggled, setIsToggled] = useState(false);

    const toggleTrueFalse = () => setIsToggled(!isToggled);

    const toggleOn = isToggled && <MobileMenu />;

    const hamburgerMenu = () =>
    {
        return(
            <button onClick={toggleTrueFalse}>
                <img src={burgerMenu} alt="Menu" className="img__Icon_header" />
            </button>
        )
    }
    
    return(
        < Headroom >
            <HeaderStyle>
                <div className="header" style={{paddingRight: pLink === "/contact" || pLink === "/" ? 17 : 0}}>
                {/* <div className="header" > */}
                    <div>
                        <nav>
                            <HeaderLinks  href={pLink}/>
                            {hamburgerMenu()}
                        </nav>
                    </div>
                </div>
            </HeaderStyle>
            {toggleOn}
        </Headroom>
    )
}


export default Header;

const HeaderStyle = styled.header`

    .header
    {
        background-color: #191F48;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        position: sticky;
        top: 0px;
        height: 75px !important;
    }

    .header > div
    {
        width: 95%;
        margin: 0 auto;
    }

    .header nav
    {
        padding: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .img__Icon_header
    {
        width: 70px;
        cursor: pointer;
    }

    .header button
    {
        background-color: #191F48;
        border: none;
    }

    .desktopNavElement
    {
        display: none;
    }

    @media screen and (min-width:400px)
    {
        .header > div
        {
            width: 80%;
        }
    }

    @media screen and (min-width:800px)
    {        
        .header
        {
            height: 104px !important;
        }

        .header button
        {
            display: none;
        }

        .header nav
        {
            padding: 20px 0px 10px;
            display: flex;
            justify-content: space-between;
        }

        .desktopNavElement
        {
            display: flex;
            justify-content: space-between;
            width: 500px;
            margin: 0 auto;
        }
    }
`;