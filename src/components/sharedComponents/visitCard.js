import React from 'react'
import styled from "styled-components";

// Assets links
import logo from '../../assets/icons/big_logo.svg';
import Titles from './titles'
import TxT from './texts'


const isNotVisible = "visitCard mobile_visibility"
const isVisible = "visitCard"

const visitCard = ({mobile_visibility}) =>
{
    return(
        <VisitCard>
            <div className={mobile_visibility === "true" ? isVisible : isNotVisible} >
                <img src={logo} alt="logo" />
                <Titles type="H1" theme="h1__visitCardTitle" content="Amélie BOCKELANDT" />
                <TxT type="p__texts_headerLinkColored" content="Product Designer & Developer" />
            </div>
        </VisitCard>
    )
}

export default visitCard


const VisitCard = styled.div`

    .mobile_visibility
    {
        display: none;
    }

    flex-basis: 40%;

    .visitCard img
    {
        margin: 45px 0px 15px;
    }

    .visitCard .h1__title
    {
        margin: 20px 0px;
    }

    @media screen and (min-width:800px)
    {
        .visitCard .h1__title
        {
            margin: 15px 0px;
        }
    }

    @media screen and (min-width:1200px)
    {
        .mobile_visibility
        {
            display: block;
        }
        
        .visitCard
        {
            margin: 25vh 0px 0px 0px;
        }

        .visitCard img
        {
            margin: 0px 0px 30px;
            width: 165px;
        }
        
        .visitCard .h1__title
        {
            margin: 20px 0px;
        }
    }
`;