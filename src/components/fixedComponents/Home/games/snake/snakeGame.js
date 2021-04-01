import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS } from "./helpers";
import MicroCard from '../../../../sharedComponents/microCard_and_buttons'
import styled from "styled-components"


const SnakeGame = () => {

    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [counter, setCounter] = useState(0);

    useInterval(() => gameLoop(), speed);

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    };

    const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

    const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

    const checkCollision = (piece, snk = snake) => {
        if (
            piece[0] * SCALE >= CANVAS_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] ||
            piece[1] < 0
        )
        return true;

        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
        }
        return false;
    };

    const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple();
            setCounter(counter+1)
            while (checkCollision(newApple, newSnake)) {
                newApple = createApple();
            }
            setApple(newApple);
            return true;
        }
        return false;
    };

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    };

    const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir([0, -1]);
        setSpeed(SPEED);
        setGameOver(false);
        setCounter(0)
    };

    useEffect( () => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "#191F48";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "#FF6600";
        context.fillRect(apple[0], apple[1], 1, 1);
    },
        [snake, apple, gameOver]
    );


    return (
        <SnakeGameStyle>
            <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
                <canvas
                    // style={{ border: "1px solid white" }}
                    ref={canvasRef}
                    width={`${CANVAS_SIZE[0]}px`}
                    height={`${CANVAS_SIZE[1]}px`}
                />
                { gameOver ?
                    <div className="texts">
                        <p>Niveau <span>{counter}</span></p>
                        <p>Game Over... Try again !</p>
                    </div>
                    :
                    <div className="texts">
                        { counter > 0 ?
                            <p>Niveau <span>{counter}</span></p>
                            :
                            <p>( Attention pas de sens inverse )</p>
                        }
                    </div>
                }
                {/* {gameOver ? <p>Niveau {counter} Game Over... Try again !</p> : <p>{ counter > 0 ? ("Niveau " + counter) : "( Attention pas de sens inverse )" }</p>} */}
                <div>
                    <MicroCard onClick={startGame} type="reStartButton" content="Commencer" />
                </div>
            </div>
            <div>
                <p>Ce jeu ne peut etre joué qu'avec les flèches d'un clavier.</p>
            </div>
        </SnakeGameStyle>
    );
};

export default SnakeGame;


const SnakeGameStyle = styled.div`

    > div:first-of-type
    {
        display: none;
    }

    > div:last-of-type
    {
        width: 100%;
        padding: 50px;
        margin: 0 auto;
        background-color: #0B0F2C;
        border: 1px solid #e8f6fa;
        border-radius: 0px 0px 5px 5px;
    }

    > div:last-of-type p
    {
        line-height: 1.7;
    }

    canvas
    {
        background-color: #e8f6fa;
    }

    @media screen and (min-width:550px)
    {    
        > div:last-of-type
        {
            display: none;
        }

        > div:first-of-type
        {
            display: block;
            width: 100%;
            padding: 15px;
            margin: 0 auto;
            background-color: #0B0F2C;
            border: 1px solid #e8f6fa;
            border-radius: 0px 0px 5px 5px;
            position: relative;
        }

        p
        {
            display: inline-block;
        }

        p span
        {
            font-family: "montserrat_medium";
            font-size: 1.3rem;
        }

        p:last-of-type
        {
            padding-left: 20px;
        }
        
        .texts
        {
            height: 43px;
        }

        > div > div:last-of-type
        {
            width: 100%;
            position: absolute;
            bottom: -101px;
            left: 0%;
        }

        button
        {
            width: 193.77px;
        }
    }
    
    @media screen and (min-width:1200px)
    {
        > div:first-of-type
        {
            padding: 32px 15px 13px;
        }

    }
`;
