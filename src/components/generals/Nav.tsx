import React from 'react';
import {NavLink as Navi} from "react-router-dom";

const Nav = () => {
    interface isActive {
        isActive: boolean
    }
    const v = ({isActive}: isActive) => isActive ? "nav" : "actived-nav" 
    return (
        <div className="nav-bar">
            <Navi to="/" className={(isActive) => v(isActive)}>Accueil</Navi>
            <Navi to="/games" className={(isActive) => v(isActive)}>Jeux</Navi>
            <Navi to="/games/Ludo" className={(isAvtive) => v(isAvtive)}>Ludo</Navi>
        </div>
    );
};

export default Nav;