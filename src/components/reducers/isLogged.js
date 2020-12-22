const loggedReducer = (state = false, action) => {
    switch(action.type) {
        //check the name and return state depending on name
        case 'SIGN_IN':
            return !state;
        
    }
}

export default loggedReducer;