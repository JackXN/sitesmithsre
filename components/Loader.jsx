"use client";
import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import {Box} from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    
    >
      <CirclesWithBar
  height="100"
  width="100"
  color="#E04C4C"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
</Box>
  )
}

export default Loader
