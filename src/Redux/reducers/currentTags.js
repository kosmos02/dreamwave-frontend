import { ADD_TAG, DELETE_TAG } from '../types'

const currentTags = (state = [], action) => {
    switch (action.type) {
        case ADD_TAG:
            state = [...state, action.payload]
            return state
        case DELETE_TAG:
            // state = [...state.filter(tag => tag !== action.payload)]
            return state.filter(tag => tag !== action.payload)
        default:
            return state
    }
}

export default currentTags