import React, { createContext, useState } from 'react';
import Topnavbar from './components/Topnavbar/Topnavbar';
import Botfooter from './components/Botfooter/Botfooter';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

const ThemeContext = createContext(null);
// const helmetContext = {};

const Root = () => {

    const [switchBtn, setSwitchBtn] = useState(true);

    return (
        <div className='bg-slate-50'>
            <HelmetProvider>
                <ThemeContext.Provider value={{ switchBtn, setSwitchBtn }}>
                    <Topnavbar></Topnavbar>
                    <Outlet></Outlet>
                    <Botfooter></Botfooter>
                    <ToastContainer />
                </ThemeContext.Provider>
            </HelmetProvider>
            {/* <Topnavbar></Topnavbar>
            <Outlet></Outlet>
            <Botfooter></Botfooter> */}

        </div>
    );
};

export default Root;
export { ThemeContext };