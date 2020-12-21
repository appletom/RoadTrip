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
                    const destIndex = param.destination.index;

                    //to make draggable items stay in place
                    //const.splice(startingParam, deleteCount, insertCount)[startAtIndex]
                    puzzles.splice(destIndex, 0, puzzles.splice(srcIndex, 1)[0]) 
                    
                    console.log(param);
                }}>
                <Container>
                <h1>Puzzle</h1>    

                <Droppable droppableId="droppable-1">
                    {(provided, _) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <ul>
    {/*                     <img className="snow-img" src={snow3} alt={`Thumb`}/>
                            <img className="snow-img" src={snow1} alt={`Thumb`}/>
                            <img className="snow-img" src={snow4} alt={`Thumb`}/>
                            <img className="snow-img" src={snow2} alt={`Thumb`}/>
    */}
                            
                            
                        {puzzles.map((item, i) => (
                            <Draggable key={item.id} draggableId={"draggable-" + item.id} index={i}>
                                {(provided, snapshot) => (
                                    
                                    <ListItem ref={provided.innerRef} {...provided.draggableProps}>
                                        <span {...provided.dragHandleProps}>{puzzles[i].thumb}</span>
                                    
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
    // Use Title and Wrapper like any other React component – except they're styled!



    }
    
export default Snowboarding

/* 

   // create state using list items
    const [snowPuzzles, updateSnowPuzzles] = useState(finalPuzzle)

    //update state any time item is dragged
    function handleOnDragEnd(result) {
  
        console.log(result)
        //create a new copy of our snowPuzzles
        const items = Array.from(snowPuzzles);

        //use source.index value to find our item from new array and remove it using splice
        //result is destructured and end up with new object of reorderedItem (our dragged item)
        const [reorderedItems] = items.splice(result.source.index, 1);

        //then use destination.index to add that item back into the array, but at a new location using splice
        items.splice(result.destination.index, 0, reorderedItems)

        //update snowPuzzles state using the updateSnowPuzzles function
        updateSnowPuzzles(items);
    }


    
return (
       <div className="snow-page">
        <div className="snow-bg">
        <div className="snow-div">
        <Slide left>

        <DragDropContext >
        <Droppable >

            {(provided) => ( 
                //provided includes info and ref to code from library to work properly
                //provided.droppableProps allows library to keep track of movements and positioning
                //provided.innerRef is created for the library to access the list element's HTML elements
                
                <ul className="snowPuzzles" {...provided.droppableProps} ref={provided.innerRef}> 
                    {finalPuzzle.map(({id, thumb, index}) => {
                    
                    return (
                    <Draggable key={id} draggableId={String(id)} index={index}>
                    
                    {(provided) => (

                        //provided.innerRef adds a reference to the library
                        //... spreads additional props from the provided argument
                        // provided.placeholder fills up the space that held the item we're dragging
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={id}>
                            <div className="snow-thumb">
                                <img className="snow-img" src={thumb} alt={`Thumb`}/>
                            </div>

                        </li>
                    )}
                    </Draggable>
                    );
                    })}    
                    {provided.placeholder} 
                </ul>
                
            )}   

        </Droppable>
        </DragDropContext>

           </Slide>
            </div>
        </div>
        </div>
    
    )
} */