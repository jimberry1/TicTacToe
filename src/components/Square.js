import styled from 'styled-components';

const SquareContainer = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;

  ${({ owner, player1Color }) =>
    owner === 'P1' &&
    `
    background: ${player1Color};
  `}

  ${({ owner, player2Color }) =>
    owner === 'P2' &&
    `
  background: ${player2Color};
`}
`;
const Square = (props) => {
  return (
    <SquareContainer
      onClick={props.clicked}
      owner={props.owner}
      player1Color={props.player1Color}
      player2Color={props.player2Color}
    />
  );
};

export default Square;
