// ye function jo 2 property consider karta ha

const INITIAL_STATE={
    currentUser: null
}
// means ager state is undefined
const userReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser:action.payload
            }
        
        default:
            return state;
    }
}
export default userReducer;