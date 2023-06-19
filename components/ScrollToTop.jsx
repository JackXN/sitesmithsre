import React, { useEffect, useState } from 'react';
import { Box, IconButton, useStyleConfig } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <Box display={showScroll ? 'block' : 'none'} position="fixed" bottom="20px" right="50px" zIndex="999">
      <IconButton
        icon={<FaArrowCircleUp />}
        size="lg"
        color='brand.orange'        
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      />
    </Box>
  );
};

export default ScrollToTop;
