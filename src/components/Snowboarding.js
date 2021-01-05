import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled  from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import snow1 from '../assets/images/snowboarding/snow1.png';
import snow2 from '../assets/images/snowboarding/snow2.png';
import snow3 from '../assets/images/snowboarding/snow3.png';
import snow4 from '../assets/images/snowboarding/snow4.png';


import Slide from 'react-reveal/Slide';

import PuzzlePieces from './PuzzlePieces';
import { Container, ListItem } from './styles'
import '../index.css';



const Snowboarding = () => {
    const puzzles = PuzzlePieces.getPuzzles();

    return (
        <div className="snow-page">
        <div className="snow-bg">
            <div className="snow-div">
                <DragDropContext onDragEnd={(param) => {
                    const srcIndex = param.source.index;
                    const destIndex = param.destination?.index;

                    //param.destination? = adds conditional to fix param.destination is null
                    // resolves error if item is dragged out of droppable zone
                    if(destIndex) {

                    //to make draggable items stay in place
                    //const.splice(startingParam, deleteCount, insertCount)[startAtIndex]
                    puzzles.splice(destIndex, 0, puzzles.splice(srcIndex, 1)[0]) 
                    }

                    console.log(param);
                }}>
                
                <Container>
                    <h4>Solve this Puzzle</h4>    

                    <Droppable droppableId="droppable-1">
                        {(provided, _) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <ul>
                                    {puzzles.map((item, i) => (
                                        <Draggable key={item.id} draggableId={"draggable-" + item.id} index={i}>
                                            {(provided, snapshot) => (
                                                
                                                // draggableProps controls the movement of draggable item when dragging or not dragging
                                                // dragHandleProps lets you pick up the item you want to be draggable
                                                <ListItem ref={provided.innerRef} {...provided.draggableProps}>
                                                    
                                                    <img className="snow-img" src={item.thumb} {...provided.dragHandleProps}/>                                    
                                                </ListItem>
                
                                            )}
                                        </Draggable>
                                    )
                                    )}
                                    {provided.placeholder}
                                </ul>
                            </div>
                        )}
                
                    </Droppable>
            
                </Container>


                </DragDropContext>

            </div>
        </div>
        </div>
    )

    }
    
export default Snowboarding
