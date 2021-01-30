import { useState } from 'react';
import Square from './Square';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const RowContainer = styled.div`
  display: flex;
`;

const Board = (props) => {
  console.log(props.player1Color);
  const SquareClickedHandler = (rowNumber, squareId) => {
    const newBoard = [...props.board];

    for (let i in newBoard[rowNumber - 1].contents) {
      if (
        newBoard[rowNumber - 1].contents[i].id === squareId &&
        !newBoard[rowNumber - 1].contents[i].owner
      ) {
        newBoard[rowNumber - 1].contents[i].owner = props.curPlayer;
        props.playerTurnHandler(newBoard);
      }
    }
  };

  const boardToDisplay = props.board.map((row) => {
    return (
      <RowContainer key={row.rowNumber}>
        {row.contents.map((boxInRow) => {
          return (
            <Square
              key={boxInRow.id}
              owner={boxInRow.owner}
              clicked={() => SquareClickedHandler(row.rowNumber, boxInRow.id)}
              player1Color={props.player1Color}
              player2Color={props.player2Color}
            />
          );
        })}
      </RowContainer>
    );
  });

  return <BoardContainer>{boardToDisplay}</BoardContainer>;
};

export default Board;
