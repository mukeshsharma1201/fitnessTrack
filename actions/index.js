export const ADD_ENTRY = 'ADD_ENTRY'
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY'

export function addEntryAction(entry){
    return {
        type : ADD_ENTRY,
        entry
    }
}

export function receiveEntryAction(entries){
    return {
        type : RECEIVE_ENTRY,
        entries
    }
}