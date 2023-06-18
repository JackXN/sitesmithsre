"use client";
import '/styles/globals.css';

// Navbar
import Nav from '../components/containers/Nav/Navbar';

import {extendTheme} from '@chakra-ui/react';


// Provider
import Provider from '/components/Provider';






const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>
        <Provider>
            <Nav/>
            <div className='main'>
                <div className='gradient'>
                </div>
               {children}
            </div>
        </Provider>
        </body>
    </html>
)


export default RootLayout;


