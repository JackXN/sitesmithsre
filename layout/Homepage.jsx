"use client";
import React from 'react';
import {Text, Box, Container,Spacer, Image} from '@chakra-ui/react';


// Styles
import styles from '../components/componentStyles/homepage';

// Components
import WhoWeAre from 'components/containers/Home/WhoWeAre';
import WhatWeDo from 'components/containers/Home/WhatWeDo';
import Scroller from '../components/ScrollIcon';
import Elevate from '../components/containers/Home/Elevate';
import CookieModal from '../components/CookiesModal';


const activeModal = true;



const Homepage = () => {
  return (
    <Container maxW='90%'  height='100%'>
      {activeModal ? <CookieModal/> : none}
 
      <Box sx={styles.wrapper}>
        {/* CSS BLOBS */}
        <div className='blob'>
          <Image src='/BlobOne.png' alt='Blob'/>
        </div>
        <div className='blob-bottom-right'>
          <Image src='/BlobTwo.png' alt='Blob Two :)'/>
        </div>
<Box sx={styles.titleContainer}
>
  <Text as='h1' color='brand.black'>Crafting <span style={{backgroundColor: '#E04C4C', padding: '15px 10px 0px 10px',color: 'white', borderRadius: '6px'}}>Beautiful</span> <br/> Websites That <br/> Inspire & Convert</Text>
  <Spacer/>
  <Text as='h2' color='brand.black'>Expert Web Development, Graphic Design & Coding Services</Text>

<Image src='/AnvilLogo.png' alt='Site Smiths Anvil Logo' 
height={['50%','50%','25%','15%']}
width={['50%','50%','25%', '15%']}
mt={['50px']}
position='relative'
left={[null,null,null,null,'350px']}
bottom={[null,null,null,null,'150px']}
/>
<Scroller/>

</Box>
</Box>
{/* HERO END */}



<WhoWeAre/>
<WhatWeDo/>
<Elevate/>
</Container>
  )
}

export default Homepage
