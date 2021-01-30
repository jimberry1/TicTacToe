import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TitleStyle = styled(motion.h1)`
  margin-top: 0px
  padding-top: 0px
  width: 100%;
  text-align: center;
  font-size: 50px;
`;

export const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  padding-right: 20px;
`;

export const StyledButton = styled(motion.button)`
  height: 60px;
  width: 200px;
  border-radius: 25px;
  outline: none;
  margin: 10px;
  ${({ buttonVal, curPlayer, buttonCol }) =>
    buttonVal === curPlayer &&
    `
background: ${buttonCol};
`}
`;

export const ResetButton = styled.button`
  height: 30px;
  width: 100px;
  margin: 10px;
  background: lightblue;
  outline: none;
`;

export const ControlButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PlayerButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const WinnerAnnouncementContainer = styled(motion.div)`
display: flex;
justify-content: center
text-align: center;

`;

export const WinnerAnnouncementText = styled.h2`
  text-align: center;
  margin: auto;
  color: white;
  font-size: 35px;
`;
