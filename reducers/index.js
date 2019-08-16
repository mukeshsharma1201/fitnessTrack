import { ADD_ENTRY, RECEIVE_ENTRY } from '../actions'

const initialState = {}

export function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_ENTRY:
                return {
                    ...state,
                    ...action.entry
                }
            break;
        case RECEIVE_ENTRY:
                return {
                    ...state,
                    ...action.entries
                }
            break;
        default:
            return state
    }
}

export default reducer