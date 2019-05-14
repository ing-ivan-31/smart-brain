import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './icon.png'

const Logo = () => {
    return (
       <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 100 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa2"> 
                    <img style={{paddingTop:'40px'}} src={brain} alt=""/> 
                </div>
            </Tilt>
       </div>
    )
};

export default Logo;
