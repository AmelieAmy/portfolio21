import React from "react";
import styled from "styled-components";

// Component links
import Title from './titles';


const Lines = styled.div`
    width: 100%;
    border-radius: 5px;
    height: 2px;
    background-color: ${props => props.isGlowy ? "#FF6600" : "#FFC400"};
    box-shadow: ${props => props.isGlowy ? "0 0 10px #FF6600" : "none"};
`;

const SeparatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${props => props.profileSeparator ? "50px 0px 20px" : "0 auto"};
    width: ${props => props.profileSeparator ? "100%" : "60%"};
    padding-bottom: ${props => props.profileSeparator ? "0px" : "20px"};
    @media screen and (min-width:800px)
    {
        margin: ${props => props.profileSeparator ? "50px 0px 30px" : "0 auto"};
    }
`;

const separator = ({type, separatorTitle}) =>
{
    return(
        type === "profileSeparator" ?
        (
            <SeparatorContainer profileSeparator>
                <Lines isGlowy></Lines>
                <Title type="H2" theme="h2__separatorGlowy" content={separatorTitle} />
                <Lines isGlowy></Lines>
            </SeparatorContainer >

        ) : (

            <SeparatorContainer>
                <Lines></Lines>
                <Title type="H2" theme="h2__separatorClassic" content={separatorTitle} />
                <Lines></Lines>
            </SeparatorContainer>
        )
    )
}

export default separator;