import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default Layout;
