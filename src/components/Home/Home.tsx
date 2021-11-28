import React from 'react';
import Nav from '../generals/Nav';
import Pres from './Pres';
import PresAuth from './PresAuth';

const Home = () => {
    return (
        <div className="home">
            <Nav/>
            <h1>Page d'accueil</h1>
            <h2>Présentation du projet</h2>
            <Pres/>
            <h2>Présentation du créateur</h2>
            <PresAuth/>
        </div>
    );
};

export default Home;