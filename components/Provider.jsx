'use client';
import {useEffect} from 'react';
import {SessionProvider} from 'next-auth/react';


//global css
import '../styles/globals.css'

// AOS
import initializeAos from '../aos';

// Loader

// Chakra ui
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


// Breakpoints
import {breakpoints, colors} from '../theme/index';


// Fonts
import '@fontsource/lobster-two';
import '@fontsource/luckiest-guy';
import '@fontsource/bangers';


  const theme = extendTheme({
    breakpoints,
    colors,
    components: {
        Text: {
            color: 'orange'
        },
    },
    styles: {
     
      global: {
        body: {
          // overflowX: 'hidden',
        },
        html: {
          backgroundColor: "white",
          overflowX: 'hidden',
        },
        h1: {
          fontSize: '50px',
          fontWeight: "black",
        },
        h3: {
          color: "orange",
          fontFamily: 'Lato',
          fontWeight: 'black',
          
        },
        h2: {
          fontSize: "23px",
          fontFamily: "Lato",
          fontWeight: "black",
          mt: ["25px"],
          mb: ["10px"]
        },
        p: {
          fontSize: ["18px"],
          fontFamily: "Barlow Semi Condensed",
          mt: ["25px"],
          mb: ["25px"],
          fontWeight: 'black'
        },
        Container:{
          margin: '10px'
        }
      }
    }
  });







export function Providers({ children }) {
    useEffect(() => {
      initializeAOS();
    }, []);
  
}



const Provider = ({ children, session}) => (
    <CacheProvider>
        <ChakraProvider theme={theme} >
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
    </ChakraProvider>
    </CacheProvider>
);


export default Provider;