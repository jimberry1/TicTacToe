import { useState } from 'react';
import { IoMdColorPalette } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubPicker } from 'react-color';
import {
  StyledButton,
  ResetButton,
  ControlButtonContainer,
  PlayerButtonsContainer,
} from '../styles/GeneralStyles';
import {
  ColourPickerVariants,
  ColourPicker2Variants,
} from '../styles/Animations';
import {
  SpaceAroundContainer,
  ColourPickerContainer,
  DefaultPlayerContainer,
  DefaultPlayerSetting,
} from '../styles/PlayerControl';
import styled from 'styled-components';

const PlayerOrderContainer = styled.div`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  ${({ selected }) => selected && `background: red`};
`;

const PlayerControls = (props) => {
  console.log('starting player ' + props.startingPlayer);
  const [showP1ColourPicker, setShowP1ColourPicker] = useState(false);
  const [showP2ColourPicker, setShowP2ColourPicker] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '25%', margin: 'auto' }}>
        <AnimatePresence
          style={{ position: 'absolute', left: '50px', top: -100 }}
        >
          {showP1ColourPicker && (
            <motion.div
              variants={ColourPickerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <GithubPicker
                color={props.playerColor}
                onChangeComplete={(color) =>
                  props.handleColorChange(color, 'P1')
                }
                triangle="hide"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ControlButtonContainer>
        <SpaceAroundContainer>
          <ColourPickerContainer
            onClick={() => setShowP1ColourPicker((curVal) => !curVal)}
          >
            <IoMdColorPalette style={{ fontSize: '30px' }} />
          </ColourPickerContainer>
          <DefaultPlayerContainer>
            <p>Starting Player</p>
            <DefaultPlayerSetting>
              <PlayerOrderContainer
                selected={props.startingPlayer === 'P1'}
                onClick={() => props.setStartingPlayer('P1')}
              >
                P1
              </PlayerOrderContainer>
              <PlayerOrderContainer
                selected={props.startingPlayer === 'Rnd'}
                onClick={() => props.setStartingPlayer('Rnd')}
              >
                Rnd
              </PlayerOrderContainer>
              <PlayerOrderContainer
                selected={props.startingPlayer === 'P2'}
                onClick={() => props.setStartingPlayer('P2')}
              >
                P2
              </PlayerOrderContainer>
            </DefaultPlayerSetting>
          </DefaultPlayerContainer>
          <ColourPickerContainer
            onClick={() => setShowP2ColourPicker((curVal) => !curVal)}
          >
            <IoMdColorPalette style={{ fontSize: '30px' }} />
          </ColourPickerContainer>
        </SpaceAroundContainer>
        <PlayerButtonsContainer>
          <StyledButton
            // onClick={() => setCurPlayer('P1')}
            curPlayer={props.curPlayer}
            buttonVal="P1"
            buttonCol={props.player1Color}
          >
            P1
          </StyledButton>
          <StyledButton
            // onClick={() => setCurPlayer('P2')}
            curPlayer={props.curPlayer}
            buttonVal="P2"
            buttonCol={props.player2Color}
          >
            P2
          </StyledButton>
        </PlayerButtonsContainer>
        <ResetButton onClick={props.resetHandler}>Reset</ResetButton>
      </ControlButtonContainer>
      <div style={{ width: '25%', margin: 'auto' }}>
        <AnimatePresence
          style={{ position: 'absolute', left: '50px', top: -100 }}
        >
          {showP2ColourPicker && (
            <motion.div
              variants={ColourPicker2Variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <GithubPicker
                color={props.playerColor}
                onChangeComplete={(color) =>
                  props.handleColorChange(color, 'P2')
                }
                triangle="hide"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlayerControls;
