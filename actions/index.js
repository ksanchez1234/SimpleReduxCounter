//Increasing Decreasing Actions
export const increment = () => {
    return{
        type: 'INCREMENT'
    };
};
export const decrement = () => {
    return{
        type: 'DECREMENT'
    };
};
//Logging in and out Actions
export const sign_in = () => {
    return{
        type: 'SIGN_IN'
    };
};
export const sign_out = () => {
    return{
        type: 'SIGN_OUT'
    };
};