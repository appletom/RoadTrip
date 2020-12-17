import React from 'react';
import Map from '../assets/images/landing/world.png';
import cloud from '../assets/images/landing/a_cloud.png';
import clouds from '../assets/images/landing/clouds.png';
import styled, { keyframes } from 'styled-components';
//import { bounce } from 'react-animations';
//import Zoom from './Zoom';
/* 
const Bounce = styled.div`
animation: 2s ${keyframes`{bounce}`} infinite`;
 */
const Landing = () => {
    return (
        <div>
        <img className="img-clouds" src={clouds} alt="clouds" />

        <a href="/destinations">
        <img className="img-world" src={Map} alt="world map" />

        </a>


{/*         <Zoom>
        <h1>ROAD TRIP</h1>
        </Zoom> */}
        </div>
    )
}


export default Landing