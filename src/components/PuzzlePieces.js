import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import Slide from 'react-reveal/Slide';


import '../index.css';



import snow1 from '../assets/images/snowboarding/snow1.png';
import snow2 from '../assets/images/snowboarding/snow2.png';
import snow3 from '../assets/images/snowboarding/snow3.png';
import snow4 from '../assets/images/snowboarding/snow4.png';



const PuzzlePieces = {
    puzzles: [
        {
        id: 1,
        thumb: `${snow3}`
        },

                {
        id: 2,
        thumb: `${snow1}`
        },

                {
        id: 3,
        thumb: `${snow4}`
        },

                {
        id: 4,
        thumb: `${snow2}`
        }
    ],

    getPuzzles: function () {
        return (
            this.puzzles
        );
    },

    // once puzzles come together, save the final puzzle here
    savePuzzle: (puzzles) => {
        localStorage.setItem("thePuzzles", JSON.stringify(puzzles))
    },

};

export default PuzzlePieces;
