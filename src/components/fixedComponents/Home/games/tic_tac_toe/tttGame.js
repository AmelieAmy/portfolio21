import React, { useState } from 'react';
import { calculateWinner } from './helpers';
import MicroCard from '../../../../sharedComponents/microCard_and_buttons'

import Board from './board'

import styled from "styled-components"


const TicTacToeGame = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user clik an occupied square or if game is won, just do a return statement
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the cliqued square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    // Reflexion matrial to definie an AI player instead of O
    // const handleClick = (i) => {
    //     if (currentPlayer == human) {
    //         let O = floor(mouseX / w)
    //         let X = floor(mouseY / h)
    //         if (board [O][X] == "") {
    //             board[O][X] = human
    //             currentPalyer = ai
    //         }
    //         setXIsNext(!xIsNext);
    //     }
    // }

    const handleRestart = () => {
        setBoard(Array(9).fill(null))
    }


    return (
        <>
            <TicTacToe>
                <Board squares={board} onClick={handleClick} />
                { winner &&
                    <div>
                        <p className="letter">{winner}</p>
                        <p> a gagné !!</p>
                    </div>
                }
                { !winner &&
                    <div>
                        <p>Prochain joueur : </p>
                        <p className="letter">{xIsNext ? " X" : " O"}</p>
                    </div>
                }
            </TicTacToe>
            <MicroCard onClick={() => handleRestart()} type="reStartButton" content="Recommencer" />
        </>
    )
}

export default TicTacToeGame;


const TicTacToe = styled.div`

    width: 100%;
    padding: 15px;
    margin: 0 auto;
    background-color: #0B0F2C;
    border: 1px solid #e8f6fa;
    border-radius: 0px 0px 5px 5px;

    p
    {
        display: inline-block;
    }

    .letter
    {
        font-family: "montserrat_medium";
        font-size: 1.3rem;
    }

    p:last-of-type
    {
        padding-left: 15px;
    }
    
    @media screen and (min-width:500px)
    {
        padding: 20px 50px;
    }
    
    @media screen and (min-width:1200px)
    {
        padding: 30px 15px 15px;
    }
`;
