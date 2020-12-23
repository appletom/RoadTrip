import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDeveTools} from 'redux-devtools-extension';
const store = createStore(rootReducer);

export default store;



//     Reducers specify how the application’s state changes in response to actions sent to the store.
import Item1 from '../../assets/images/games/Item1.png';
import Item2 from '../../assets/images/games/Item2.png';
import Item3 from '../../assets/images/games/Item3.png';
import Item4 from '../../assets/images/games/Item4.png';
import Item5 from '../../assets/images/games/Item5.png';
import Item6 from '../../assets/images/games/Item6.png';
import { AddToCart } from '../actions/AddToCart';

const initState = {
    items: [
        {id: 1,title: 'Meteorfall: Krumit’s Tale', desc: "Meteorfall: Krumit’s Tale feels like the ultimate evolution of games that combine turn-based strategy, deck building and RPGs, and then squash the resulting playfield into a tiny grid. ", price: '$6.99', img: Item1, src:'https://apps.apple.com/app/meteorfall-krumits-tale/id1369611597'},
        {id: 2,title: 'Kingdom Two Crowns', desc: "Kingdom Two Crowns is an iPhone game that kicks things off with a monarch on horseback, using his handful of gold coins to have locals do his bidding.  ", price: '$4.99', img: Item2, src:'https://apps.apple.com/app/kingdom-two-crowns/id1477991646'},
        {id: 3,title: 'Peak’s Edge', desc: "Peak’s Edge joins an increasingly impressive sub-genre of sorts on iPhone: turn-based strategy games in a shoebox. ", price: '$2.99', img: Item3, src:'https://apps.apple.com/us/app/peaks-edge/id1502580967'},
        {id: 4,title: 'Maze Machina', desc: "Maze Machina finds you as a mouse in a maze. ", price: '$1.99', img: Item4, src:'https://apps.apple.com/app/maze-machina/id1481339646'},
        {id: 5,title: 'Starbeard', desc: "Starbeard features a race of space gnomes, attempting to defend their gardens from aliens that look an awful lot like garden pests. ", price: '$2.99', img: Item5, src:'https://apps.apple.com/app/starbeard/id1188480720'},    
        {id: 6,title: 'P1 Select', desc: "P1 Select is a single-screen dungeon crawler with a twist. At the bottom half of the screen is a basic maze, with its walls, monsters, bling, and an exit. At first, P1 Select merrily smashes your brain out with a brick. ", price: '$2.99', img: Item6, src:'https://apps.apple.com/app/p1-select/id1470639614?l=en'},    
    ],
    addedItems:[],
    total: 0
}

const store = (state = initState, action) => {
    return state;




    
}




export default store;