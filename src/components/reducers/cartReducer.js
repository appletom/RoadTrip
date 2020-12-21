//     Reducers specify how the application’s state changes in response to actions sent to the store.
import Item1 from '../../assets/images/games/Item1.png';
import Item2 from '../../assets/images/games/Item2.png';
import Item3 from '../../assets/images/games/Item3.png';
import Item4 from '../../assets/images/games/Item4.png';
import Item5 from '../../assets/images/games/Item5.png';
import Item6 from '../../assets/images/games/Item6.png';

const initState = {
    items: [
        {id: 1,title: 'Meteorfall: Krumit’s Tale', desc: "words", price: '$6.99', img: Item1},
        {id: 2,title: 'Kingdom Two Crowns', desc: "words", price: '$4.99', img: Item2},
        {id: 3,title: 'Peak’s Edge', desc: "words", price: '$2.99', img: Item3},
        {id: 4,title: 'Maze Machina', desc: "words", price: '$1.99', img: Item4},
        {id: 5,title: 'Starbeard', desc: "words", price: '$2.99', img: Item5},    
        {id: 6,title: 'P1 Select', desc: "words", price: '$2.99', img: Item6},    
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    return state;
}

export default cartReducer;