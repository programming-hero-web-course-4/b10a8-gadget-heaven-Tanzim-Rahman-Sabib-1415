import React from 'react';
import Topnavbar from '../Topnavbar/Topnavbar';
import Botfooter from '../Botfooter/Botfooter';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Topnavbar></Topnavbar>
            <Outlet></Outlet>
            <Botfooter></Botfooter>
        </div>
    );
};

export default Home;