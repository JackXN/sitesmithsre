import React from 'react';
import {
    Box,
    Text,
    Image,
    IconButton,
  } from '@chakra-ui/react';

  import Button from '../../common/CustomButton';

const WhoWeAre = () => {
  return (
    <Box sx={styles.container}>
    <Box sx={styles.leftContainer}>
      <hr/>
    <Text as='h1' color='#504F50'>Who <br/> We Are <IconButton bg='none' /></Text>
    </Box>


    <Box sx={styles.rightContainer}>
      <Box sx={styles.contentContainer}>
      <Box sx={styles.titleContainer}>
        <Text as='h2'
        fontFamily='Roboto'
        fontStyle='italic'
        fontWeight='400'
        >
          We Design
        </Text>
        <Text as='h2'
        fontFamily='Lobster, cursive'
        lineHeight='40px'
        >
          <span style={{color: '#E04C4C'}}>Beautiful</span> User Experience
        </Text>
      </Box>

      <Box sx={styles.paragraph}>
        
        <Text as='p'>
        Our mission is to create a better digital world and make our customers happy.
We possess a winning combination of creative, technical and people skills that not only make us fun to work with, but ensure we get the job done, and done well.
        </Text>
        <Text as='p'>
        Our mission is to create a better digital world and make our customers happy.
We possess a winning combination of creative, technical and people skills that not only make us fun to work with, but ensure we get the job done, and done well.
        </Text>
      </Box>


<Box sx={styles.buttonContainer}>
<Button text='Read More' isSecondary={true} />
</Box>
      </Box>
    </Box>
        </Box>
  )
} 



const styles = {
  container: {
    display: 'flex',
    flexDirection: ['column', 'column', 'column', 'row' ,'row' , 'row'],
    textAlign: 'left',
    mt: ['180px']

  },
  leftContainer: {
    display: 'flex',
    position: 'relative',
    left: [null,null,null,'10rem',],
    // justifyContent: 'center',
    alignItems: [null,null,null,null,null,'center'],
    flex:2,

    flexDirection: 'column',

    h1: {
      fontFamily: "Luckiest guy",

      textAlign: "left",
      lineHeight: ["30px","30px","30px",],
      fontSize: ["44px", '44px', '44px', '44px'],
      // fontWeight: "900",
      position:[null,null,null,null,'relative'],
      top: [null,null,null,null,'90px', '150px']
    },

    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"],
      position:[null,null,null,null,'relative'],
      right: ["68px", "68px", "78px",'5px'],
      top: [null,null,null,null,'90px', '150px']
      
    }
  },


  rightContainer: {
    flex: 2,
    position:[null,null,null,null,'relative'],
    top: [null,null,null,null,'90px', '150px'],

    
  },


  titleContainer: {
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#504F50',
    // pt: ['30px'],
    



    h2: {
      fontSize: ['29px'],
      textAlign: 'left !important',
      lineHeight: ['35px'],
      
    }

  },
  contentContainer: {
    mt: ['20px'],
  
    p: {
      mt: ['30px'],
      textAlign: 'left',
      fontSize: ['14px'],
      fontFamily: 'Merriweather',
      fontWeight: 'Medium'
    }
  },

  buttonContainer: {
    justifyContent: 'left',
    alignSelf: 'left',
    display: 'flex',
    mt: ['40px'],
    mb: ['80px'],
    fontSize: ['16px']
  }



}

export default WhoWeAre