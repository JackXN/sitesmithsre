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


const theme = extendTheme({
    styles: {
        global: {
            ul: {
                listStyleType: 'none',
            },
        },
    },
})






export function Providers({ children }) {
    useEffect(() => {
      initializeAOS();
    }, []);
  
}



const Provider = ({ children, session}) => (
    <CacheProvider>
        <ChakraProvider >
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
    </ChakraProvider>
    </CacheProvider>
);


export default Provider;