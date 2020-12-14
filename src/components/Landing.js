import React from 'react';
import Map from '../assets/images/landing/world.png';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import Zoom from './Zoom';

const Bounce = styled.div`
animation: 2s ${keyframes`{bounce}`} infinite`;

const Landing = () => {
    return (
        <div>

        <a href="/destinations">
        <img className="img-world" src={Map} alt="world map" />
        </a>

        <Zoom>
        <h1>ROAD TRIP</h1>
        </Zoom>
        </div>
    )
}


export default Landing