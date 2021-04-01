import React from 'react';
import styled from "styled-components";


const Square = ({value, onClick}) => {
    return (
        <SquaresStyle onClick={onClick}>
            {value}
        </SquaresStyle>
    )
}

export default Square;


const SquaresStyle = styled.button`

    border: 2px solid #0B0F2C;
    background-color: #e8f6fa;
    height: 12vh;
    line-height: 10vh;
    font-family:"neon_absolute_sans_regular";
    font-size: 3rem;
    font-weight: 800;
    color: #0B0F2C;

    @media screen and (min-width:1200px)
    {
        height: 14vh;
        line-height: 14vh;
        font-size: 4rem;
    }
`;
