import React, { useState, useEffect } from 'react';
import image from '../../images/FEAT.png'

const About = () => {

    return (
        <div id="features">
            <div className='features-model'>
                <img src={image} alt="img" />
             </div>   
                <div className='features-text'>
                    <h2>Alexandre Lusiak</h2>
                    <h3>Developpeur <span> Web</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button>Telecharger CV</button>
                </div>
        </div>
    )

}

export default About