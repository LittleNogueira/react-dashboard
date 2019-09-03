export default function login(state={},action){
    
    if(action.type === 'LOGIN'){
        return action.login;
    }
    
    return state;
}