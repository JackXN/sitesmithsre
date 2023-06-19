'use client';
import '/styles/globals.css';

// Navbar
import Nav from '../components/containers/Nav/Navbar';

import {extendTheme} from '@chakra-ui/react';


// Provider
import Provider from '/components/Provider';


// Scroller
import ScrollToTop from 'components/ScrollToTop';





const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>
    
        <Provider>
        <Nav/>
                <ScrollToTop/>
               {children}
        
        </Provider>
        </body>
    </html>
)


export default RootLayout;


