import { motion } from 'framer-motion';

export const winnerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      spring: 120,
    },
  },
};

export const ColourPickerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      spring: 120,
    },
  },
};

export const ColourPicker2Variants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      spring: 120,
    },
  },
};

export const TitleParentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const TitleChildVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};
