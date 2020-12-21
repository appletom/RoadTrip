//     Reducers specify how the application’s state changes in response to actions sent to the store.
import Item1 from '../../assets/images/travel/Bali.jpg';
import Item2 from '../../assets/images/travel/BoraBora.jpg';
import Item3 from '../../assets/images/travel/MachuPicchu.jpg';
import Item4 from '../../assets/images/travel/Phuket.jpg';
import Item5 from '../../assets/images/travel/Rome.jpg';
import Item6 from '../../assets/images/travel/Tahiti.jpg';

const initState = {
    items: [
        {id: 1,title: 'Bali', desc: "words", price: 110, img: Item1},
        {id: 2,title: 'BoraBora', desc: "words", price: 110, img: Item2},
        {id: 3,title: 'MachuPicchu', desc: "words", price: 130, img: Item3},
        {id: 4,title: 'Phuket', desc: "words", price: 140, img: Item4},
        {id: 5,title: 'Rome', desc: "words", price: 120, img: Item5},    
        {id: 6,title: 'Tahiti', desc: "words", price: 130, img: Item6},    
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    return state;
}

export default cartReducer;