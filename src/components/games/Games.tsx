import React from 'react';
import Nav from '../generals/Nav';
import GeneralPres from './pres/GeneralPres';
import LudoPres from './pres/LudoPres';

const Games = () => {
    return (
        <div className="games-presentation">
            <Nav/>
            <h1>Jeux créés</h1>
            <GeneralPres/>
            <LudoPres/>
        </div>
    );
};

export default Games;