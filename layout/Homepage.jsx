"use client";
import React from 'react';
import {Text, Box, Container,Spacer, Image} from '@chakra-ui/react';
import ScrollToTop from '../components/ScrollToTop';
import Scroller from '../components/ScrollIcon';
import styles from '../components/componentStyles/homepage';



const Homepage = () => {
  return (
    <Container maxW='100vw'  height='200vh'>
      <Box sx={styles.wrapper}>
<Box sx={styles.titleContainer}
>
  <Text as='h1' color='brand.black'>Crafting <span style={{backgroundColor: '#E04C4C', padding: '15px 10px 0px 10px',color: 'white', borderRadius: '6px'}}>Beautiful</span> <br/> Websites That <br/> & Convert</Text>
  <Spacer/>
  <Text as='h2' color='brand.black'>Expert Web Development, Graphic Design & Coding Services</Text>
<Scroller/>

</Box>
</Box>

</Container>
  )
}

export default Homepage
