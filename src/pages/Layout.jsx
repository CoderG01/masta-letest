import React, { useState } from 'react'
import { Outlet }from "react-router-dom";
import Footer from '../component/Footer';
import Nav from '../component/Nav';

const Layout = () => {
    
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
