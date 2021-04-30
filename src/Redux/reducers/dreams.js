import { ADD_DREAMS, ADD_DREAM } from '../types'

const dreams = (state= [], action)=> {
    switch(action.type){
        case ADD_DREAMS:
            state = action.payload
            return state
        case ADD_DREAM:
            state= [...state, action.payload]
            return state
        default:
            return state
    }
}

export default dreams