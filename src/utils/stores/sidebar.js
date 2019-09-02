export default function sidebar(state=false, action){

    if(action.type === 'SHOW-HIDDEN-SIDEBAR'){
        return !state;
    }

    return state;
}