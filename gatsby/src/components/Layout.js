import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Nav />
                { children }
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;