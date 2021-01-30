import { useState, useEffect } from 'react';
import Board from './components/Board';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoMdColorPalette } from 'react-icons/io';
import './App.css';
import {
  WinnerAnnouncementContainer,
  WinnerAnnouncementText,
} from './styles/GeneralStyles';
import { winnerVariants } from './styles/Animations';
import PlayerControls from './components/PlayerControls';
import Title from './components/Title';

function App() {
  const [startingPlayer, setStartingPlayer] = useState('P1');
  const [player1Color, setPlayer1Color] = useState('#0000FF');
  const [player2Color, setPlayer2Color] = useState('#008000');
  const [curPlayer, setCurPlayer] = useState('P1');
  const [winner, setWinner] = useState('');
  const [squaresRemaining, setSquaresRemaining] = useState(9);
  const [board, setBoard] = useState([
    {
      rowNumber: '1',
      contents: [
        { id: 101, owner: null },
        { id: 102, owner: null },
        { id: 103, owner: null },
      ],
    },
    {
      rowNumber: '2',
      contents: [
        { id: 201, owner: null },
        { id: 202, owner: null },
        { id: 203, owner: null },
      ],
    },
    {
      rowNumber: '3',
      contents: [
        { id: 301, owner: null },
        { id: 302, owner: null },
        { id: 303, owner: null },
      ],
    },
  ]);

  const resetHandler = () => {
    setBoard([
      {
        rowNumber: '1',
        contents: [
          { id: 101, owner: null },
          { id: 102, owner: null },
          { id: 103, owner: null },
        ],
      },
      {
        rowNumber: '2',
        contents: [
          { id: 201, owner: null },
          { id: 202, owner: null },
          { id: 203, owner: null },
        ],
      },
      {
        rowNumber: '3',
        contents: [
          { id: 301, owner: null },
          { id: 302, owner: null },
          { id: 303, owner: null },
        ],
      },
    ]);

    if (!startingPlayer || startingPlayer === 'Rnd') {
      setCurPlayer(Math.random() > 0.5 ? 'P1' : 'P2');
    } else {
      setCurPlayer(startingPlayer);
    }
    setWinner('');
    setSquaresRemaining(9);
  };

  // any full row, any column or any diagonal

  useEffect(() => {
    let winner = null;

    let i = 0;
    let ii = 0;
    //check rows
    for (let i in board) {
      if (
        board[i].contents[0].owner &&
        board[i].contents[0].owner === board[i].contents[1].owner &&
        board[i].contents[0].owner === board[i].contents[2].owner
      ) {
        console.log('winner declared by check rows');
        winner = board[i].contents[0].owner;
      }
    }

    //Check columns
    for (let ii in board) {
      if (
        board[0].contents[ii].owner &&
        board[0].contents[ii].owner === board[1].contents[ii].owner &&
        board[0].contents[ii].owner === board[2].contents[ii].owner
      ) {
        console.log('winner declared by check columns');
        winner = board[0].contents[ii].owner;
      }
    }

    // Check diagonals
    if (
      (board[0].contents[0].owner &&
        board[0].contents[0].owner === board[1].contents[1].owner &&
        board[0].contents[0].owner === board[2].contents[2].owner) ||
      (board[0].contents[2].owner &&
        board[0].contents[2].owner === board[1].contents[1].owner &&
        board[0].contents[2].owner === board[2].contents[0].owner)
    ) {
      console.log('winner declared by check diagnonals');
      winner = board[1].contents[1].owner;
    }

    if (winner) {
      setWinner(winner);
    }
  }, [board]);

  // This is called from the Board function when a player makes a move
  const playerTurnHandler = (board) => {
    if (!winner) {
      setBoard(board);
      setSquaresRemaining((curVal) => curVal - 1);

      // Switch the current player
      if (curPlayer === 'P1') {
        setCurPlayer('P2');
      } else {
        setCurPlayer('P1');
      }
    }
  };

  const handleColorChangeComplete = (color, player) => {
    if (player === 'P1' && color.hex !== player2Color) {
      setPlayer1Color(color.hex);
    } else if (player === 'P2' && color.hex !== player1Color) {
      setPlayer2Color(color.hex);
    }
  };

  return (
    <div className="pageBody">
      <Title />

      <PlayerControls
        color={player1Color}
        handleColorChange={(color, player) =>
          handleColorChangeComplete(color, player)
        }
        curPlayer={curPlayer}
        player1Color={player1Color}
        player2Color={player2Color}
        resetHandler={resetHandler}
        startingPlayer={startingPlayer}
        setStartingPlayer={setStartingPlayer}
      />
      <Board
        curPlayer={curPlayer}
        board={board}
        playerTurnHandler={(board) => playerTurnHandler(board)}
        player1Color={player1Color}
        player2Color={player2Color}
      />
      {winner && (
        <WinnerAnnouncementContainer
          variants={winnerVariants}
          initial="hidden"
          animate="visible"
        >
          <WinnerAnnouncementText>{`${curPlayer} is the winner!`}</WinnerAnnouncementText>
        </WinnerAnnouncementContainer>
      )}
      {squaresRemaining === 0 && !winner && (
        <WinnerAnnouncementContainer
          variants={winnerVariants}
          initial="hidden"
          animate="visible"
        >
          <WinnerAnnouncementText>
            All available squares have been used. Please reset the game
          </WinnerAnnouncementText>
        </WinnerAnnouncementContainer>
      )}
    </div>
  );
}

export default App;
