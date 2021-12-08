const initState = [
    { password : 'something'},
    {password : 'password'},
    {password : 'nothing'}
]
const reducer = (state=initState, action) => {
    switch(action.type) {
        case 'ADD_DATA':
            return [...state,action.payload]
        default:
            return state
    }
}
export default reducer;