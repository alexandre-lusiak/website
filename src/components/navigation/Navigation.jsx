import React, { useState, useEffect } from 'react';
import './navigation.css'

const Navigation = () => {

    return (
        <nav className='navigation-container'>
            <a className='item-navigation' href="#about" >Qui quis-je</a>
            <a className='item-navigation' href="#Techno" >Mes Technologies</a>
            <a className='item-navigation' href="#skills" >Mes Compétences</a>
            <a className='item-navigation' href="#project" >Mes projets</a>
            <a className='item-navigation' href="#contact" >Contact</a>
        </nav>
    )
}

export default Navigation;