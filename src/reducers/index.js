import {combineReducers} from 'redux'


const counterReducer = (counter = 0 , action) =>{
    switch(action.type){
        case 'INCREMENT':
            return ++counter;
        case 'DECREMENT':
            return --counter;
        default:
         return  counter
    }
}

export default combineReducers({
    counter : counterReducer
})