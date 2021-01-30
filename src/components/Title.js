import { motion } from 'framer-motion';
import { TitleContainer, TitleStyle } from '../styles/GeneralStyles';
import { TitleParentVariants, TitleChildVariants } from '../styles/Animations';
import '../App.css';

const Title = () => {
  return (
    <div>
      <TitleContainer
        variants={TitleParentVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        <TitleStyle className="titleFont" variants={TitleChildVariants}>
          Tic
        </TitleStyle>
        <TitleStyle className="titleFont" variants={TitleChildVariants}>
          Tac
        </TitleStyle>
        <TitleStyle className="titleFont" variants={TitleChildVariants}>
          Toe
        </TitleStyle>
      </TitleContainer>
    </div>
  );
};

export default Title;
