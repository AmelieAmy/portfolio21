import React from 'react';
import Square from './square';
import styled from "styled-components";


const Board = ({squares, onClick}) => {
    return (
        <BoardStyle>
            { squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            )) }
        </BoardStyle>
    )
}

export default Board;


const BoardStyle = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
`;
