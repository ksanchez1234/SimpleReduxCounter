const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return true //true when user is logged in
        case 'SIGN_OUT':
            return false //false when user isn't logged in
        default:
            return state; //default false
    }
};
export default loggedReducer;