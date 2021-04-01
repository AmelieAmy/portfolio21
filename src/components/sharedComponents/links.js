import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Component links
import Title from './titles'
import TxT from './texts'


const HeaderLink = styled.div`
    width: 180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: ${props => props.HeaderLinkMenu ? "25px 0px" : "0px"};
    @media screen and (min-width:800px)
    {
        width: 125px;
    }
`;

const Lines = styled.div`
    width: 100%;
    border-radius: 5px;
    height: 2px;
    background-color: #FFC400;
    opacity: ${props => props.h1__line ? "50%" : "100%"};
`;

const links = ({type, content, hrefLink}) =>
{
    return(
        type === "headerLink" ?
        (
            <Link to={hrefLink}>
                <HeaderLink>
                    <Lines></Lines>
                    <TxT type="p__texts_headerLink" content={content}/>
                </HeaderLink>
            </Link>

        ) : type === "headerLink__h1" ? (

            <div>
                <HeaderLink>
                    <Lines h1__line></Lines>
                    <Title type="H1" theme="h1__headerTitle" content={content} />
                </HeaderLink>
            </div>

        ) : type === "headerLink__menu" ? (

            <Link to={hrefLink}>
                <HeaderLink HeaderLinkMenu>
                    <Lines></Lines>
                    <TxT type="p__texts_headerLink" content={content}/>
                </HeaderLink>
            </Link>

        ) : null
    )
}

export default links;