import { Box, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const ScrollDownIcon = () => {
  return (
    <Box position="fixed" bottom={4} left="50%" transform="translateX(-50%)" zIndex={999}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <Icon as={FiChevronDown} boxSize={8} color="brand.orange" />
      </motion.div>
    </Box>
  );
};

export default ScrollDownIcon;
